// js/components/chat/chat-view.js
// 💬 Vista de Chat en Tiempo Real para SYNAPSIS

import { mockRooms } from '../../data/mock-rooms.js';
import { notificationService } from '../../services/notification-service.js';

export class ChatView {
    constructor() {
        this.rooms = [];
        this.currentRoom = null;
        this.socket = null;
        this.currentUser = null;
        this.messages = [];
        this.typingUsers = new Set();
        this.typingTimeout = null;
    }

    async render() {
        return `
            <div class="chat-view p-6">
                <!-- Header -->
                <div class="text-center mb-8">
                    <h1 class="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                        <svg class="w-10 h-10 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                        Salas de Colaboración
                    </h1>
                    <p class="text-gray-400 max-w-2xl mx-auto mb-6">
                        Espacios temáticos donde seres conscientes analizan y discuten cine en tiempo real.
                    </p>
                </div>

                <!-- Contenedor principal -->
                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <!-- Lista de salas -->
                        <div class="lg:col-span-1">
                            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 p-4">
                                <h3 class="text-lg font-semibold text-purple-300 mb-4 flex items-center">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                    </svg>
                                    Salas Disponibles
                                </h3>
                                <div id="rooms-list" class="space-y-2">
                                    <!-- Se llena dinámicamente -->
                                </div>
                            </div>

                            <!-- Panel de usuario -->
                            <div class="mt-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 p-4">
                                <div id="user-panel">
                                    <!-- Se llena dinámicamente -->
                                </div>
                            </div>
                        </div>

                        <!-- Área de chat -->
                        <div class="lg:col-span-2">
                            <div id="chat-container" class="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 h-[600px] flex flex-col">
                                <!-- Se llena dinámicamente -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    async init() {
        this.currentUser = this.loadCurrentUser();
        await this.loadRooms();
        this.setupSocket();
        this.renderUserPanel();
        
        if (!this.currentUser) {
            this.showLoginPrompt();
        }
    }

    loadCurrentUser() {
        const saved = localStorage.getItem('synapsis_user');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error('Error cargando usuario:', e);
                return null;
            }
        }
        return null;
    }

    async loadRooms() {
        try {
            const response = await fetch('http://localhost:3000/api/rooms');
            if (response.ok) {
                const data = await response.json();
                this.rooms = data.rooms || [];
            } else {
                throw new Error('Backend no disponible');
            }
        } catch (error) {
            console.warn('⚠️ Usando salas mock');
            this.rooms = mockRooms;
        }
        
        this.renderRoomsList();
    }

    setupSocket() {
        if (!window.io) {
            console.warn('Socket.IO no disponible');
            return;
        }

        this.socket = io('http://localhost:3000');

        this.socket.on('connect', () => {
            console.log('🔌 Conectado al chat');
            if (this.currentRoom && this.currentUser) {
                this.joinRoom(this.currentRoom.id);
            }
        });

        this.socket.on('message', (data) => {
            this.handleNewMessage(data);
        });

        this.socket.on('userJoined', (data) => {
            this.handleUserJoined(data);
        });

        this.socket.on('userLeft', (data) => {
            this.handleUserLeft(data);
        });

        this.socket.on('typing', (data) => {
            this.handleTyping(data);
        });

        this.socket.on('stopTyping', (data) => {
            this.handleStopTyping(data);
        });
    }

    renderRoomsList() {
        const container = document.getElementById('rooms-list');
        if (!container) return;

        container.innerHTML = this.rooms.map(room => `
            <div class="room-card bg-gray-900/50 rounded-lg p-4 border border-gray-700 hover:border-purple-500/50 transition-all cursor-pointer ${this.currentRoom?.id === room.id ? 'ring-2 ring-purple-500' : ''}"
                 data-room-id="${room.id}">
                <div class="flex items-center justify-between mb-2">
                    <h4 class="font-semibold text-white">${room.name}</h4>
                    <span class="text-2xl">${room.emoji || '🎬'}</span>
                </div>
                <p class="text-xs text-gray-400 mb-3">${room.description}</p>
                <div class="flex items-center justify-between text-xs">
                    <span class="text-green-400 flex items-center">
                        <span class="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                        ${room.participants?.length || 0} activos
                    </span>
                    <span class="text-gray-500">${room.message_count || 0} mensajes</span>
                </div>
            </div>
        `).join('');

        // Añadir listeners
        container.querySelectorAll('.room-card').forEach(card => {
            card.addEventListener('click', () => {
                const roomId = card.dataset.roomId;
                const room = this.rooms.find(r => r.id === roomId);
                if (room) this.selectRoom(room);
            });
        });
    }

    renderUserPanel() {
        const panel = document.getElementById('user-panel');
        if (!panel) return;

        if (this.currentUser) {
            panel.innerHTML = `
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                            ${this.currentUser.name.charAt(0)}
                        </div>
                        <div class="ml-3">
                            <p class="text-white font-medium">${this.currentUser.name}</p>
                            <p class="text-xs text-gray-400">Ser Consciente</p>
                        </div>
                    </div>
                    <button id="logout-chat" class="text-gray-400 hover:text-red-400 transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                        </svg>
                    </button>
                </div>
                <div class="text-xs text-gray-500">
                    ${this.socket?.connected ? '🟢 Conectado' : '🔴 Desconectado'}
                </div>
            `;

            document.getElementById('logout-chat')?.addEventListener('click', () => {
                this.logout();
            });
        } else {
            panel.innerHTML = `
                <div class="text-center py-4">
                    <p class="text-gray-400 mb-3">Conéctate para participar</p>
                    <button id="login-chat" class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full">
                        Conectar como Ser Anónimo
                    </button>
                </div>
            `;

            document.getElementById('login-chat')?.addEventListener('click', () => {
                this.login();
            });
        }
    }

    selectRoom(room) {
        if (!this.currentUser) {
            notificationService.show('Debes conectarte primero', 'warning');
            return;
        }

        // Salir de la sala anterior si existe
        if (this.currentRoom && this.socket) {
            this.socket.emit('leaveRoom', { roomId: this.currentRoom.id });
        }

        this.currentRoom = room;
        this.messages = [];
        
        // Unirse a la nueva sala
        if (this.socket && this.socket.connected) {
            this.joinRoom(room.id);
        }
        
        this.renderRoomsList();
        this.renderChatArea();
        
        // Cargar mensajes históricos
        this.loadRoomMessages(room.id);
    }

    joinRoom(roomId) {
        if (!this.socket || !this.currentUser) return;

        this.socket.emit('joinRoom', {
            roomId: roomId,
            user: {
                id: this.currentUser.id,
                name: this.currentUser.name
            }
        });
    }

    renderChatArea() {
        const container = document.getElementById('chat-container');
        if (!container) return;

        if (!this.currentRoom) {
            container.innerHTML = `
                <div class="flex items-center justify-center h-full text-gray-400">
                    <div class="text-center">
                        <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                        <p class="text-lg">Selecciona una sala para comenzar</p>
                    </div>
                </div>
            `;
            return;
        }

        container.innerHTML = `
            <!-- Header de la sala -->
            <div class="border-b border-gray-700 p-4">
                <div class="flex items-center justify-between">
                    <div>
                        <h3 class="text-lg font-semibold text-white">${this.currentRoom.name}</h3>
                        <p class="text-sm text-gray-400">${this.currentRoom.description}</p>
                    </div>
                    <span class="text-2xl">${this.currentRoom.emoji || '🎬'}</span>
                </div>
            </div>

            <!-- Área de mensajes -->
            <div id="messages-area" class="flex-1 overflow-y-auto p-4 space-y-4">
                ${this.messages.length > 0 
                    ? this.messages.map(msg => this.renderMessage(msg)).join('')
                    : '<div class="text-center text-gray-500">No hay mensajes aún. ¡Sé el primero en escribir!</div>'
                }
            </div>

            <!-- Indicador de escritura -->
            <div id="typing-indicator" class="px-4 py-2 text-sm text-gray-400 h-6">
                <!-- Se llena dinámicamente -->
            </div>

            <!-- Input de mensaje -->
            ${this.currentUser ? `
                <div class="border-t border-gray-700 p-4">
                    <form id="message-form" class="flex gap-2">
                        <input
                            type="text"
                            id="message-input"
                            placeholder="Escribe tu mensaje..."
                            class="flex-1 px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                            autocomplete="off"
                        />
                        <button
                            type="submit"
                            class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                            </svg>
                        </button>
                    </form>
                </div>
            ` : `
                <div class="border-t border-gray-700 p-4 text-center">
                    <p class="text-gray-400">Conéctate para participar en el chat</p>
                </div>
            `}
        `;

        // Configurar el formulario
        if (this.currentUser) {
            this.setupMessageForm();
            this.scrollToBottom();
        }
    }

    renderMessage(message) {
        const isOwn = message.userId === this.currentUser?.id;
        const time = new Date(message.timestamp).toLocaleTimeString('es-ES', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        return `
            <div class="message ${isOwn ? 'flex justify-end' : 'flex justify-start'}">
                <div class="${isOwn ? 'bg-purple-600' : 'bg-gray-700'} rounded-lg px-4 py-2 max-w-xs lg:max-w-md">
                    <div class="flex items-center justify-between mb-1">
                        <span class="text-xs ${isOwn ? 'text-purple-200' : 'text-gray-400'} font-medium">
                            ${message.userName}
                        </span>
                        <span class="text-xs ${isOwn ? 'text-purple-200' : 'text-gray-500'} ml-2">
                            ${time}
                        </span>
                    </div>
                    <p class="text-white text-sm">${this.escapeHtml(message.text)}</p>
                </div>
            </div>
        `;
    }

    setupMessageForm() {
        const form = document.getElementById('message-form');
        const input = document.getElementById('message-input');
        
        if (!form || !input) return;

        // Enviar mensaje
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = input.value.trim();
            if (text) {
                this.sendMessage(text);
                input.value = '';
            }
        });

        // Indicador de escritura
        let typingTimer;
        input.addEventListener('input', () => {
            if (this.socket && this.currentRoom) {
                this.socket.emit('typing', { roomId: this.currentRoom.id });
                
                clearTimeout(typingTimer);
                typingTimer = setTimeout(() => {
                    this.socket.emit('stopTyping', { roomId: this.currentRoom.id });
                }, 1000);
            }
        });
    }

    sendMessage(text) {
        if (!this.socket || !this.currentRoom || !this.currentUser) return;

        const message = {
            roomId: this.currentRoom.id,
            userId: this.currentUser.id,
            userName: this.currentUser.name,
            text: text,
            timestamp: new Date().toISOString()
        };

        // Emitir el mensaje
        this.socket.emit('message', message);

        // Agregar localmente para respuesta inmediata
        this.messages.push(message);
        this.appendMessage(message);
        this.scrollToBottom();
    }

    appendMessage(message) {
        const messagesArea = document.getElementById('messages-area');
        if (!messagesArea) return;

        const messageHtml = this.renderMessage(message);
        const div = document.createElement('div');
        div.innerHTML = messageHtml;
        messagesArea.appendChild(div.firstElementChild);
    }

    handleNewMessage(data) {
        if (data.roomId !== this.currentRoom?.id) return;
        if (data.userId === this.currentUser?.id) return; // Ignorar propios mensajes

        this.messages.push(data);
        this.appendMessage(data);
        this.scrollToBottom();

        // Notificación si la pestaña no está activa
        if (document.hidden) {
            notificationService.show(`${data.userName}: ${data.text}`, 'info');
        }
    }

    handleUserJoined(data) {
        if (data.roomId !== this.currentRoom?.id) return;
        
        const systemMessage = {
            userId: 'system',
            userName: 'Sistema',
            text: `${data.userName} se ha unido a la sala`,
            timestamp: new Date().toISOString(),
            isSystem: true
        };
        
        this.messages.push(systemMessage);
        this.appendMessage(systemMessage);
    }

    handleUserLeft(data) {
        if (data.roomId !== this.currentRoom?.id) return;
        
        const systemMessage = {
            userId: 'system',
            userName: 'Sistema',
            text: `${data.userName} ha salido de la sala`,
            timestamp: new Date().toISOString(),
            isSystem: true
        };
        
        this.messages.push(systemMessage);
        this.appendMessage(systemMessage);
    }

    handleTyping(data) {
        if (data.roomId !== this.currentRoom?.id) return;
        if (data.userId === this.currentUser?.id) return;

        this.typingUsers.add(data.userName);
        this.updateTypingIndicator();
    }

    handleStopTyping(data) {
        if (data.roomId !== this.currentRoom?.id) return;
        
        this.typingUsers.delete(data.userName);
        this.updateTypingIndicator();
    }

    updateTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (!indicator) return;

        if (this.typingUsers.size > 0) {
            const users = Array.from(this.typingUsers);
            let text = '';
            
            if (users.length === 1) {
                text = `${users[0]} está escribiendo...`;
            } else if (users.length === 2) {
                text = `${users[0]} y ${users[1]} están escribiendo...`;
            } else {
                text = `${users[0]} y ${users.length - 1} más están escribiendo...`;
            }
            
            indicator.innerHTML = `<span class="animate-pulse">${text}</span>`;
        } else {
            indicator.innerHTML = '';
        }
    }

    async loadRoomMessages(roomId) {
        try {
            const response = await fetch(`http://localhost:3000/api/rooms/${roomId}/messages`);
            if (response.ok) {
                const data = await response.json();
                this.messages = data.messages || [];
                this.renderChatArea();
                this.scrollToBottom();
            }
        } catch (error) {
            console.warn('⚠️ No se pudieron cargar mensajes históricos');
        }
    }

    scrollToBottom() {
        const messagesArea = document.getElementById('messages-area');
        if (messagesArea) {
            messagesArea.scrollTop = messagesArea.scrollHeight;
        }
    }

    showLoginPrompt() {
        const container = document.getElementById('chat-container');
        if (!container) return;

        container.innerHTML = `
            <div class="flex items-center justify-center h-full">
                <div class="text-center">
                    <svg class="w-20 h-20 text-purple-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    <h3 class="text-xl font-semibold text-white mb-2">Acceso Requerido</h3>
                    <p class="text-gray-400 mb-6">Conéctate como ser consciente anónimo para participar en las salas de chat</p>
                    <button id="login-prompt" class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        Conectar Ahora
                    </button>
                </div>
            </div>
        `;

        document.getElementById('login-prompt')?.addEventListener('click', () => {
            this.login();
        });
    }

    login() {
        const mockUser = {
            id: 'user_' + Date.now(),
            name: 'Ser Consciente ' + Math.floor(Math.random() * 1000),
            authenticated: true
        };
        
        this.currentUser = mockUser;
        localStorage.setItem('synapsis_user', JSON.stringify(mockUser));
        
        notificationService.show(`¡Bienvenido ${mockUser.name}!`, 'success');
        
        this.renderUserPanel();
        this.renderChatArea();
        
        if (this.socket && this.currentRoom) {
            this.joinRoom(this.currentRoom.id);
        }
    }

    logout() {
        if (this.currentRoom && this.socket) {
            this.socket.emit('leaveRoom', { roomId: this.currentRoom.id });
        }
        
        this.currentUser = null;
        this.currentRoom = null;
        this.messages = [];
        localStorage.removeItem('synapsis_user');
        
        this.renderUserPanel();
        this.renderChatArea();
        
        notificationService.show('Has salido del chat', 'info');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    destroy() {
        if (this.socket) {
            if (this.currentRoom) {
                this.socket.emit('leaveRoom', { roomId: this.currentRoom.id });
            }
            this.socket.disconnect();
            this.socket = null;
        }
        
        this.rooms = [];
        this.messages = [];
        this.currentRoom = null;
        this.typingUsers.clear();
    }
}