# Voice Recognition AI

Voice recognition website met Groq AI integratie via Vercel Functions.

## Setup

1. **Vercel deployen:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **API keys toevoegen:**
   - **Groq:** Ga naar https://console.groq.com/keys → maak API key
   - **AssemblyAI:** Ga naar https://app.assemblyai.com/account → maak API key
   - Ga naar Vercel dashboard → Project settings → Environment Variables
   - Voeg toe: `GROQ_API_KEY` met je Groq key
   - Voeg toe: `ASSEMBLYAI_API_KEY` met je AssemblyAI key
   - Optioneel: `GROQ_MODEL` (default: `llama-3.1-8b-instant`)

3. **Local testen:**
   ```bash
   npm install
   vercel dev
   ```

## Werking

- Klik microfoon → neem audio op
- Audio → `/api/transcribe` → AssemblyAI
- Tekst → `/api/chat` → Groq AI (Llama model)
- Reactie verschijnt in AI balk

## Bestanden

- `index.html` - Frontend
- `script.js` - Audio recording & API calls
- `style.css` - Styling
- `api/transcribe.js` - AssemblyAI API
- `api/chat.js` - Groq API
- `package.json` - Dependencies
- `vercel.json` - Vercel config