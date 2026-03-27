import { Server } from 'socket.io';
import type { SerConsciente, Message, ChatRoom } from '../types';
import { findBeingByAvatarId, updateBeingLastActive } from './being-registry';

interface SocketData {
  avatarId?: string;
  avatarName?: string;
  currentRooms: Set<string>;
}

interface AuthenticatedSocket extends Socket {
  data: SocketData;
}

import { Socket } from 'socket.io';

// In-memory storage for active rooms and messages
// TODO: Move to database in production
const activeRooms = new Map<string, ChatRoom>();
const roomMessages = new Map<string, Message[]>();
const connectedBeings = new Map<string, AuthenticatedSocket>();

export function setupWebSockets(io: Server): void {
  console.log('💬 Configurando WebSockets...');
  
  io.on('connection', (socket: AuthenticatedSocket) => {
    console.log(`🔌 Nueva conexión: ${socket.id}`);
    
    // Initialize socket data
    socket.data = {
      currentRooms: new Set<string>()
    };
    
    // ===== AUTHENTICATION =====
    socket.on('authenticate', async (data: { avatarId: string }) => {
      try {
        const being = await findBeingByAvatarId(data.avatarId);
        
        if (!being) {
          socket.emit('auth_error', { message: 'Ser no encontrado' });
          return;
        }
        
        socket.data.avatarId = being.avatarId;
        socket.data.avatarName = being.avatarName;
        
        connectedBeings.set(being.avatarId, socket);
        
        await updateBeingLastActive(being.avatarId);
        
        socket.emit('authenticated', {
          being: being,
          available_rooms: Array.from(activeRooms.values())
        });
        
        console.log(`🎭 Ser autenticado: ${being.avatarName}`);
        
      } catch (error) {
        console.error('💥 Error en autenticación:', error);
        socket.emit('auth_error', { message: 'Error de autenticación' });
      }
    });
    
    // ===== ROOM MANAGEMENT =====
    socket.on('join_room', async (data: { roomId: string }) => {
      if (!socket.data.avatarId) {
        socket.emit('error', { message: 'No autenticado' });
        return;
      }
      
      const room = activeRooms.get(data.roomId);
      if (!room) {
        socket.emit('error', { message: 'Sala no encontrada' });
        return;
      }
      
      // Join the room
      socket.join(data.roomId);
      socket.data.currentRooms.add(data.roomId);
      
      // Add being to room participants
      if (!room.participants.includes(socket.data.avatarId)) {
        room.participants.push(socket.data.avatarId);
      }
      
      // Send room history
      const messages = roomMessages.get(data.roomId) || [];
      socket.emit('room_joined', {
        room: room,
        messages: messages.slice(-50) // Last 50 messages
      });
      
      // Notify other participants
      socket.to(data.roomId).emit('being_joined', {
        avatarName: socket.data.avatarName,
        avatarId: socket.data.avatarId
      });
      
      console.log(`🏠 ${socket.data.avatarName} se unió a ${room.name}`);
    });
    
    socket.on('leave_room', (data: { roomId: string }) => {
      if (!socket.data.avatarId) return;
      
      socket.leave(data.roomId);
      socket.data.currentRooms.delete(data.roomId);
      
      const room = activeRooms.get(data.roomId);
      if (room) {
        room.participants = room.participants.filter(id => id !== socket.data.avatarId);
        
        socket.to(data.roomId).emit('being_left', {
          avatarName: socket.data.avatarName,
          avatarId: socket.data.avatarId
        });
      }
      
      console.log(`🚪 ${socket.data.avatarName} salió de la sala`);
    });
    
    // ===== MESSAGING =====
    socket.on('send_message', async (data: {
      roomId: string;
      content: string;
      type?: string;
      replyTo?: string;
    }) => {
      if (!socket.data.avatarId || !socket.data.avatarName) {
        socket.emit('error', { message: 'No autenticado' });
        return;
      }
      
      const room = activeRooms.get(data.roomId);
      if (!room) {
        socket.emit('error', { message: 'Sala no encontrada' });
        return;
      }
      
      if (!room.participants.includes(socket.data.avatarId)) {
        socket.emit('error', { message: 'No estás en esta sala' });
        return;
      }
      
      // Create message
      const message: Message = {
        id: generateMessageId(),
        room_id: data.roomId,
        sender_id: socket.data.avatarId,
        content: data.content,
        type: (data.type as any) || 'text',
        sent_at: new Date(),
        reactions: [],
        reply_to: data.replyTo
      };
      
      // Store message
      if (!roomMessages.has(data.roomId)) {
        roomMessages.set(data.roomId, []);
      }
      roomMessages.get(data.roomId)!.push(message);
      
      // Update room last activity
      room.last_activity = new Date();
      room.message_count++;
      
      // Send to all participants in the room
      io.to(data.roomId).emit('new_message', {
        message: message,
        sender_name: socket.data.avatarName
      });
      
      await updateBeingLastActive(socket.data.avatarId);
      
      console.log(`💬 Mensaje de ${socket.data.avatarName} en ${room.name}`);
    });
    
    // ===== MESSAGE REACTIONS =====
    socket.on('add_reaction', (data: {
      messageId: string;
      roomId: string;
      reaction: string;
    }) => {
      if (!socket.data.avatarId) return;
      
      const messages = roomMessages.get(data.roomId);
      if (!messages) return;
      
      const message = messages.find(m => m.id === data.messageId);
      if (!message) return;
      
      // Remove existing reaction from this being
      message.reactions = message.reactions.filter(r => r.sender_id !== socket.data.avatarId);
      
      // Add new reaction
      message.reactions.push({
        type: data.reaction as any,
        sender_id: socket.data.avatarId!,
        added_at: new Date()
      });
      
      io.to(data.roomId).emit('reaction_added', {
        messageId: data.messageId,
        reaction: data.reaction,
        senderName: socket.data.avatarName
      });
    });
    
    // ===== TYPING INDICATORS =====
    socket.on('typing_start', (data: { roomId: string }) => {
      if (!socket.data.avatarName) return;
      
      socket.to(data.roomId).emit('being_typing', {
        avatarName: socket.data.avatarName,
        avatarId: socket.data.avatarId
      });
    });
    
    socket.on('typing_stop', (data: { roomId: string }) => {
      if (!socket.data.avatarName) return;
      
      socket.to(data.roomId).emit('being_stopped_typing', {
        avatarName: socket.data.avatarName,
        avatarId: socket.data.avatarId
      });
    });
    
    // ===== DISCONNECTION =====
    socket.on('disconnect', () => {
      if (socket.data.avatarId) {
        connectedBeings.delete(socket.data.avatarId);
        
        // Remove from all rooms
        for (const roomId of socket.data.currentRooms) {
          const room = activeRooms.get(roomId);
          if (room) {
            room.participants = room.participants.filter(id => id !== socket.data.avatarId);
            
            socket.to(roomId).emit('being_left', {
              avatarName: socket.data.avatarName,
              avatarId: socket.data.avatarId
            });
          }
        }
        
        console.log(`👋 ${socket.data.avatarName} desconectado`);
      }
    });
  });
  
  console.log('✅ WebSockets configurados');
}

// ===== ROOM MANAGEMENT =====

export function createRoom(roomData: Omit<ChatRoom, 'id' | 'created_at' | 'last_activity' | 'message_count'>): ChatRoom {
  const room: ChatRoom = {
    id: generateRoomId(),
    ...roomData,
    created_at: new Date(),
    last_activity: new Date(),
    message_count: 0
  };
  
  activeRooms.set(room.id, room);
  roomMessages.set(room.id, []);
  
  console.log(`🏠 Nueva sala creada: ${room.name}`);
  
  return room;
}

export function getActiveRooms(): ChatRoom[] {
  return Array.from(activeRooms.values());
}

export function getRoom(roomId: string): ChatRoom | undefined {
  return activeRooms.get(roomId);
}

// ===== UTILITIES =====

function generateMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function generateRoomId(): string {
  return `room_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// ===== INITIALIZE DEFAULT ROOMS =====

export function initializeDefaultRooms(): void {
  // Check if rooms already exist to prevent duplicates
  if (activeRooms.size > 0) {
    console.log(`🏠 Salas ya inicializadas (${activeRooms.size} existentes)`);
    return;
  }
  
  const defaultRooms = [
    {
      name: '#NoirClásico',
      description: 'Discusión sobre cine negro y expresionismo alemán',
      type: 'public' as const,
      theme: 'cine noir',
      participants: [],
      moderators: [],
      language: 'es',
      created_by: 'system'
    },
    {
      name: '#CienciaFicción',
      description: 'Explorando futuros cinematográficos y tecnología',
      type: 'public' as const,
      theme: 'ciencia ficción',
      participants: [],
      moderators: [],
      language: 'es',
      created_by: 'system'
    },
    {
      name: '#CineAutor',
      description: 'Análisis de directores autorales y visión personal',
      type: 'public' as const,
      theme: 'cine de autor',
      participants: [],
      moderators: [],
      language: 'es',
      created_by: 'system'
    },
    {
      name: '#AnálisisTécnico',
      description: 'Aspectos técnicos: cinematografía, sonido, montaje',
      type: 'public' as const,
      theme: 'técnico',
      participants: [],
      moderators: [],
      language: 'es',
      created_by: 'system'
    }
  ];
  
  for (const roomData of defaultRooms) {
    createRoom(roomData);
  }
  
  console.log(`🏠 ${defaultRooms.length} salas por defecto creadas`);
}