// frontend/src/services/claudeService.ts

const CLAUDE_CONFIG = {
  apiKey: import.meta.env.VITE_CLAUDE_API_KEY || '',
  model: 'claude-3-opus-20240229',
  maxTokens: 4000,
  temperature: 0.7
};

export class ClaudeService {
  private apiUrl = 'https://api.anthropic.com/v1/messages';
  
  async generateAnalysis(
    movieTitle: string,
    movieData: any,
    theoryPrompt: string
  ): Promise<string> {
    if (!CLAUDE_CONFIG.apiKey) {
      throw new Error('No se encontró la API key de Claude. Por favor configura VITE_CLAUDE_API_KEY en el archivo .env');
    }

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': CLAUDE_CONFIG.apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: CLAUDE_CONFIG.model,
          max_tokens: CLAUDE_CONFIG.maxTokens,
          temperature: CLAUDE_CONFIG.temperature,
          messages: [
            {
              role: 'user',
              content: theoryPrompt.replace('{movieTitle}', movieTitle)
            }
          ]
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${JSON.stringify(errorData)}`);
      }

      const data = await response.json();
      return data.content[0].text;
    } catch (error) {
      console.error('Error con Claude API:', error);
      throw error;
    }
  }
}