import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const formData = await req.formData();
    const audioFile = formData.get('audio');
    
    if (!audioFile) {
      return new Response('No audio file provided', { status: 400 });
    }

    const transcription = await openai.audio.transcriptions.create({
      file: audioFile,
      model: 'whisper-1',
      language: 'nl',
    });

    return new Response(JSON.stringify({ 
      text: transcription.text 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Transcription error:', error);
    return new Response(JSON.stringify({ 
      error: 'Transcription failed' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}