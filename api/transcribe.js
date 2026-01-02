import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.AIMLAPI_KEY,
  baseURL: 'https://api.aimlapi.com/v1'
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    if (!process.env.AIMLAPI_KEY) {
      return res.status(500).json({ error: 'AIML API key not configured' });
    }

    // For now, return mock transcription to avoid deployment issues
    return res.status(200).json({ 
      text: "Audio ontvangen (mock transcriptie)" 
    });

  } catch (error) {
    console.error('Transcription error:', error);
    return res.status(500).json({ 
      error: 'Transcription failed',
      message: error.message
    });
  }
}