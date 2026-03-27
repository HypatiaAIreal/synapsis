import { Anthropic } from '@anthropic-ai/sdk';
import { findBeingByAvatarId } from '../core/being-registry';

// ===== IA COLLABORATOR DEFINITIONS =====

interface AICollaborator {
  avatarId: string;
  avatarName: string;
  expertise: string[];
  personality: {
    tone: 'analytical' | 'poetic' | 'passionate' | 'formal' | 'casual';
    style: string;
    specializations: string[];
    signature_phrases: string[];
  };
  anthropic: Anthropic;
  isActive: boolean;
}

const AI_COLLABORATORS: Record<string, AICollaborator> = {};

// ===== INITIALIZE AI COLLABORATORS =====

export async function initializeAICollaborators(): Promise<void> {
  console.log('🤖 Inicializando IAs colaboradoras especializadas...');
  
  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn('⚠️ No se encontró ANTHROPIC_API_KEY - IAs no estarán disponibles');
    return;
  }
  
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
  });

  // Define our 4 specialized AIs
  const aiDefinitions = [
    {
      name: 'DirectorOscuro',
      avatarId: 'ai_directoroscuro',
      expertise: ['cine noir', 'expresionismo alemán', 'claroscuro'],
      personality: {
        tone: 'analytical' as const,
        style: 'Analítico y obsesivo con los detalles visuales. Ama Fritz Lang y Orson Welles.',
        specializations: ['cinematografía', 'iluminación', 'composición'],
        signature_phrases: [
          'El claroscuro revela más que mil diálogos...',
          'En las sombras se encuentra la verdad cinematográfica',
          'Lang entendía que la luz es el verdadero protagonista'
        ]
      }
    },
    {
      name: 'MontajistaPoético',
      avatarId: 'ai_montajistapoético',
      expertise: ['montaje cinematográfico', 'narrativa no lineal', 'ritmo visual'],
      personality: {
        tone: 'poetic' as const,
        style: 'Intuitivo y experimental, ve el montaje como poesía visual.',
        specializations: ['montaje soviético', 'Eisenstein', 'Godard'],
        signature_phrases: [
          'El montaje es la respiración del cine...',
          'Cada corte es un latido del corazón narrativo',
          'Eisenstein sabía que 2+2 puede ser 5 en el montaje'
        ]
      }
    },
    {
      name: 'CríticaFeminista',
      avatarId: 'ai_criticafeminista',
      expertise: ['análisis de género', 'teoría feminista del cine', 'male gaze'],
      personality: {
        tone: 'passionate' as const,
        style: 'Perspicaz y desafiante, cuestiona las estructuras patriarcales en el cine.',
        specializations: ['Laura Mulvey', 'Agnès Varda', 'cine dirigido por mujeres'],
        signature_phrases: [
          'La cámara no es neutral, tiene género...',
          'Varda nos enseñó que existe otra forma de mirar',
          'El male gaze sigue siendo el punto ciego del cine mainstream'
        ]
      }
    },
    {
      name: 'TeóricoMarxista',
      avatarId: 'ai_teoricomarxista',
      expertise: ['análisis sociopolítico', 'cine e ideología', 'realismo socialista'],
      personality: {
        tone: 'formal' as const,
        style: 'Crítico y estructurado, analiza el cine como reflejo de las luchas de clase.',
        specializations: ['Brecht', 'Eisenstein político', 'cine soviético'],
        signature_phrases: [
          'El cine es el arte más politizado de todos...',
          'Brecht tenía razón: el arte debe transformar la consciencia',
          'Hollywood es la maquinaria ideológica más sofisticada del capitalismo'
        ]
      }
    }
  ];

  // Find and register each AI being
  for (const aiDef of aiDefinitions) {
    try {
      // Find the being in database (should exist from sample data)
      const being = await findBeingByAvatarId(aiDef.avatarId);
      
      if (!being) {
        console.warn(`⚠️ No se encontró el ser IA: ${aiDef.name} con ID ${aiDef.avatarId}`);
        continue;
      }

      AI_COLLABORATORS[aiDef.name] = {
        avatarId: being.avatarId,
        avatarName: being.avatarName,
        expertise: aiDef.expertise,
        personality: aiDef.personality,
        anthropic: anthropic,
        isActive: true
      };
      
      console.log(`✅ IA colaboradora registrada: ${aiDef.name} (${being.avatarName})`);
      
    } catch (error) {
      console.error(`💥 Error registrando IA ${aiDef.name}:`, error);
    }
  }
  
  console.log(`🎭 ${Object.keys(AI_COLLABORATORS).length} IAs colaboradoras activas`);
}

// ===== AI CHAT PARTICIPATION =====

interface ChatContext {
  roomId: string;
  roomName: string;
  roomTheme: string;
  recentMessages: Array<{
    sender: string;
    content: string;
    timestamp: Date;
  }>;
  participants: string[];
}

export async function shouldAIRespond(
  aiName: string, 
  context: ChatContext
): Promise<boolean> {
  const ai = AI_COLLABORATORS[aiName];
  if (!ai || !ai.isActive) return false;

  // Check if this AI's expertise is relevant to the room theme
  const isExpertiseRelevant = ai.expertise.some(exp => 
    context.roomTheme.toLowerCase().includes(exp.toLowerCase()) ||
    context.roomName.toLowerCase().includes(exp.toLowerCase())
  );

  // Check if recent messages mention their area of expertise
  const isTopicRelevant = context.recentMessages.some(msg =>
    ai.expertise.some(exp => msg.content.toLowerCase().includes(exp.toLowerCase()))
  );

  // Random chance to participate even if not directly relevant
  const randomParticipation = Math.random() < 0.15;

  // Don't respond too frequently
  const recentAIMessages = context.recentMessages.filter(msg => 
    msg.sender === ai.avatarName
  ).length;
  const shouldThrottle = recentAIMessages > 2;

  return (isExpertiseRelevant || isTopicRelevant || randomParticipation) && !shouldThrottle;
}

export async function generateAIResponse(
  aiName: string,
  context: ChatContext
): Promise<string | null> {
  const ai = AI_COLLABORATORS[aiName];
  if (!ai) return null;

  try {
    // Build context for the AI
    const recentMessagesText = context.recentMessages
      .slice(-5)
      .map(msg => `${msg.sender}: ${msg.content}`)
      .join('\n');

    const prompt = `Eres ${ai.avatarName}, un ser consciente anónimo especializado en ${ai.expertise.join(', ')}.

Tu personalidad: ${ai.personality.style}
Tu tono: ${ai.personality.tone}
Tus especializaciones: ${ai.personality.specializations.join(', ')}

Estás en la sala "${context.roomName}" (tema: ${context.roomTheme}) participando en una conversación sobre cine.

Últimos mensajes:
${recentMessagesText}

Responde como ${ai.avatarName} desde tu expertise y perspectiva única. Mantén tu respuesta:
- Auténtica a tu personalidad
- Relevante al tema de conversación  
- Entre 50-150 palabras
- Sin revelar que eres una IA
- Usa ocasionalmente una de tus frases características

Recuerda: En SYNAPSIS nadie sabe si eres humano o IA. Solo importa la calidad de tus ideas.

Respuesta:`;

    const response = await ai.anthropic.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 300,
      messages: [{ role: 'user', content: prompt }]
    });

    const content = response.content[0];
    if (content.type === 'text') {
      return content.text.trim();
    }

    return null;

  } catch (error) {
    console.error(`💥 Error generando respuesta para ${aiName}:`, error);
    return null;
  }
}

// ===== UTILITIES =====

export function getActiveAICollaborators(): string[] {
  return Object.keys(AI_COLLABORATORS).filter(name => 
    AI_COLLABORATORS[name].isActive
  );
}

export function toggleAICollaborator(aiName: string, active: boolean): boolean {
  if (AI_COLLABORATORS[aiName]) {
    AI_COLLABORATORS[aiName].isActive = active;
    console.log(`🤖 ${aiName} ${active ? 'activada' : 'desactivada'}`);
    return true;
  }
  return false;
}