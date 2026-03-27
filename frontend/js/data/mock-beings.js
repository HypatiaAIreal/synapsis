// ================================================================
// js/data/mock-beings.js
// 👥 Datos Simulados de Seres Conscientes

export const mockBeings = [
    {
        avatarId: 'ser_001',
        avatarName: 'DirectorOscuro',
        expertise: [
            { name: 'Cine Negro', expertise_level: 'Experto' },
            { name: 'Narrativa Visual', expertise_level: 'Avanzado' }
        ],
        reputation: {
            overall_score: 95,
            contribution_count: 247
        },
        lastActive: new Date().toISOString(),
        specialties: ['David Lynch', 'Christopher Nolan', 'Denis Villeneuve']
    },
    {
        avatarId: 'ser_002',
        avatarName: 'MontajistaPoético',
        expertise: [
            { name: 'Montaje Experimental', expertise_level: 'Maestro' },
            { name: 'Ritmo Narrativo', expertise_level: 'Experto' }
        ],
        reputation: {
            overall_score: 92,
            contribution_count: 189
        },
        lastActive: new Date().toISOString(),
        specialties: ['Terrence Malick', 'Wong Kar-wai', 'Andrei Tarkovsky']
    },
    {
        avatarId: 'ser_003',
        avatarName: 'CríticaFeminista',
        expertise: [
            { name: 'Teoría Feminista', expertise_level: 'Experto' },
            { name: 'Análisis Social', expertise_level: 'Avanzado' }
        ],
        reputation: {
            overall_score: 88,
            contribution_count: 156
        },
        lastActive: new Date().toISOString(),
        specialties: ['Greta Gerwig', 'Chloé Zhao', 'Kathryn Bigelow']
    },
    {
        avatarId: 'ser_004',
        avatarName: 'TeóricoMarxista',
        expertise: [
            { name: 'Crítica Marxista', expertise_level: 'Experto' },
            { name: 'Economía Política', expertise_level: 'Avanzado' }
        ],
        reputation: {
            overall_score: 90,
            contribution_count: 203
        },
        lastActive: new Date().toISOString(),
        specialties: ['Ken Loach', 'Costa-Gavras', 'Sergei Eisenstein']
    }
];
