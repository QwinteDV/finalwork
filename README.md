# Voice Recognition AI

Voice recognition website met OpenAI integratie via Vercel Functions.

## Setup

1. **Vercel deployen:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **OpenAI API key toevoegen:**
   - Ga naar Vercel dashboard
   - Project settings → Environment Variables
   - Voeg toe: `OPENAI_API_KEY` met je OpenAI key

3. **Local testen:**
   ```bash
   npm install
   vercel dev
   ```

## Werking

- Klik microfoon → neem audio op
- Audio → `/api/transcribe` → OpenAI Whisper
- Tekst → `/api/chat` → OpenAI GPT
- Reactie verschijnt in AI balk

## Bestanden

- `index.html` - Frontend
- `script.js` - Audio recording & API calls
- `style.css` - Styling
- `api/transcribe.js` - Whisper API
- `api/chat.js` - GPT API
- `package.json` - Dependencies
- `vercel.json` - Vercel config