export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Mock transcription - in production you would use a real speech-to-text service
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