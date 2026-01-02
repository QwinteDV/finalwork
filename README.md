# Voice Recognition AI

Voice recognition website met Groq AI integratie via Vercel Functions.

## Setup

1. **Vercel deployen:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Groq API key toevoegen:**
   - Ga naar https://console.groq.com/keys
   - Maak een API key aan
   - Ga naar Vercel dashboard → Project settings → Environment Variables
   - Voeg toe: `GROQ_API_KEY` met je Groq key
   - Optioneel: `GROQ_MODEL` (default: `qwen-2.5-7b-instruct`)

3. **Local testen:**
   ```bash
   npm install
   vercel dev
   ```

## Werking

- Klik microfoon → neem audio op
- Audio → `/api/transcribe` → OpenAI Whisper
- Tekst → `/api/chat` → Groq AI (Qwen model)
- Reactie verschijnt in AI balk

## Bestanden

- `index.html` - Frontend
- `script.js` - Audio recording & API calls
- `style.css` - Styling
- `api/transcribe.js` - Whisper API
- `api/chat.js` - Groq API
- `package.json` - Dependencies
- `vercel.json` - Vercel config