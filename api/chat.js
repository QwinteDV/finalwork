export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'No message provided' });
    }

    const ollamaUrl = process.env.OLLAMA_URL || 'http://localhost:11434';
    const model = process.env.OLLAMA_MODEL || 'qwen3:4b';

    const response = await fetch(`${ollamaUrl}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: model,
        prompt: `Je bent een behulpzame AI assistent die antwoord geeft in het Nederlands. Wees kort en duidelijk.\n\nGebruiker: ${message}\n\nAssistent:`,
        stream: false,
        options: {
          temperature: 0.7,
          num_predict: 150
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.response;

    return res.status(200).json({ 
      response: aiResponse 
    });

  } catch (error) {
    console.error('Chat error:', error);
    return res.status(500).json({ 
      error: error.message || 'AI response failed' 
    });
  }
}