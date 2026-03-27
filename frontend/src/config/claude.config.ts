// frontend/src/config/claude.config.ts
export const CLAUDE_CONFIG = {
  apiKey: process.env.REACT_APP_CLAUDE_API_KEY || '',
  model: 'claude-3-opus-20240229',
  maxTokens: 4000,
  temperature: 0.7
};