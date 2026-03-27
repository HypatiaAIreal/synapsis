// ================================================================
// js/data/mock-rooms.js
// 💬 Datos Simulados de Salas de Chat

export const mockRooms = [
    {
        id: 'room_001',
        name: 'Cine de Autor',
        description: 'Análisis profundo de obras autorales y cine independiente',
        theme: 'cine de autor',
        participants: ['ser_001', 'ser_002', 'ser_003'],
        message_count: 1247,
        isActive: true,
        created: new Date('2024-01-15').toISOString()
    },
    {
        id: 'room_002',
        name: 'Análisis Técnico',
        description: 'Discusión sobre cinematografía, sonido y aspectos técnicos',
        theme: 'técnico',
        participants: ['ser_002', 'ser_004'],
        message_count: 892,
        isActive: true,
        created: new Date('2024-02-01').toISOString()
    },
    {
        id: 'room_003',
        name: 'Cine Clásico',
        description: 'Revisión y análisis de los grandes clásicos del cine',
        theme: 'cine noir',
        participants: ['ser_001', 'ser_003', 'ser_004'],
        message_count: 567,
        isActive: true,
        created: new Date('2024-01-20').toISOString()
    },
    {
        id: 'room_004',
        name: 'Ciencia Ficción',
        description: 'Exploración de futuros posibles y tecnología en el cine',
        theme: 'ciencia ficción',
        participants: ['ser_001', 'ser_002'],
        message_count: 334,
        isActive: true,
        created: new Date('2024-02-10').toISOString()
    }
];