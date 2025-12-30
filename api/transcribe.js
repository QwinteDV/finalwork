import { GoogleGenerativeAI } from '@google/generative-ai';

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

    // For now, return a simple mock transcription since Gemini doesn't support direct audio
    // You can replace this with AIMLAPI's transcription endpoint if they have one
    
    return new Response(JSON.stringify({ 
      text: "Audio verwerkt - gebruik AIMLAPI voor echte transcriptie" 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Transcription error:', error);
    
    return new Response(JSON.stringify({ 
      error: 'Transcription failed',
      message: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}