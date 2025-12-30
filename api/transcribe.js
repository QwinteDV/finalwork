import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Check API key
    if (!process.env.GEMINI_API_KEY) {
      return new Response(JSON.stringify({ 
        error: 'Gemini API key not configured' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const formData = await req.formData();
    const audioFile = formData.get('audio');
    
    if (!audioFile) {
      return new Response(JSON.stringify({ 
        error: 'No audio file provided' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Convert to Buffer for Edge Runtime
    const arrayBuffer = await audioFile.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    // Create a Blob from the buffer
    const blob = new Blob([buffer], { type: audioFile.type });

    // Gemini doesn't have direct audio transcription, so we'll use a mock response
    // In production, you'd need to convert speech to text first
    
    return new Response(JSON.stringify({ 
      text: "Audio ontvangen (dit is een placeholder - Gemini heeft geen directe transcriptie API)" 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Transcription error:', error);
    console.error('Error stack:', error.stack);
    
    return new Response(JSON.stringify({ 
      error: error.message || 'Transcription failed',
      details: error.stack?.substring(0, 200)
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}