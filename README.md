# Wanderful Travel OS

Wanderful is a premium AI travel planning app that generates cinematic, practical trip itineraries with mapped activities, budget breakdowns, packing guidance, weather context, calendar export, printable dossiers, and offline-aware trip caching.

The app is built as a React/Vite frontend served through a small Express backend. The backend handles itinerary generation through Gemini by default, with optional support for OpenAI, Anthropic, and Groq.

## Features

- AI-generated multi-day travel itineraries with real-world activity coordinates
- Pre-curated luxury, adventure, food, and relaxed travel templates
- Separate app routes for Discover, How It Works, Itineraries, Guides, and Trip dashboard
- Interactive OpenStreetMap/Leaflet activity maps
- Local destination weather forecast through Open-Meteo
- Printable itinerary dossier for PDF export
- `.ics` calendar export for Google Calendar and Apple Calendar
- Trip progress indicator in the dashboard
- Offline status indicator and local itinerary caching
- Service worker for app-shell caching
- Optional in-browser provider key selection for Gemini, OpenAI, Anthropic, and Groq

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Discover/home planner |
| `/how-it-works` | System and workflow overview |
| `/itineraries` | Pre-curated itinerary archive |
| `/guides` | Cultural, safety, logistics, and travel guides |
| `/trip` | Generated or loaded itinerary dashboard |

`vercel.json` includes an SPA fallback rewrite so refreshing any route serves `index.html`.

## Tech Stack

- React 19
- Vite 6
- TypeScript
- Tailwind CSS 4
- Express
- Leaflet
- Motion
- GSAP
- Lucide React
- Google GenAI SDK
- Open-Meteo forecast API

## Getting Started

### Prerequisites

- Node.js 22 or newer recommended
- npm

### Install

```bash
npm install
```

### Configure Environment

Create a local `.env` file from the example:

```bash
cp .env.example .env
```

Then add at least one AI provider key:

```env
GEMINI_API_KEY="your_gemini_key"
OPENAI_API_KEY=""
ANTHROPIC_API_KEY=""
GROQ_API_KEY=""
APP_URL="http://localhost:3000"
```

Gemini is the default provider. Users can also paste provider keys inside the app settings drawer at runtime.

### Run Locally

```bash
npm run dev
```

The app runs at:

```text
http://localhost:3000
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Express + Vite development server |
| `npm run build` | Build the frontend and bundle the server |
| `npm run start` | Start the production server from `dist/server.cjs` |
| `npm run lint` | Run TypeScript checks with `tsc --noEmit` |
| `npm run clean` | Remove generated build output |

## Deployment

### Vercel

The repository includes:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This prevents `404: NOT_FOUND` on direct route refreshes such as `/how-it-works` or `/guides`.

Set provider keys in your deployment environment variables:

- `GEMINI_API_KEY`
- `OPENAI_API_KEY`
- `ANTHROPIC_API_KEY`
- `GROQ_API_KEY`
- `APP_URL`

## Project Structure

```text
src/
  components/
    MapView.tsx
    PrintableItinerary.tsx
    VerticalTimeline.tsx
    WanderfulShell.tsx
  pages/
    HomePage.tsx
    HowItWorksPage.tsx
    ItinerariesPage.tsx
    GuidesPage.tsx
    TripPage.tsx
  services/
    calendar.ts
    localItineraryCache.ts
    weather.ts
  state/
    WanderfulContext.ts
  data.ts
  types.ts
server.ts
public/sw.js
vercel.json
```

## Notes

- Weather data is fetched from Open-Meteo using the first activity with valid latitude and longitude.
- Calendar export creates a downloadable `.ics` file from itinerary activities.
- Offline support caches the app shell and stores the latest itinerary snapshot in local storage.
- Generated itineraries depend on the selected AI provider and key availability.

## Troubleshooting

### Route refresh shows `404: NOT_FOUND`

Ensure `vercel.json` is deployed with the SPA rewrite. Vercel must serve `index.html` for client-side routes.

### `Port 3000 is already in use`

Stop the existing dev server or change the port in `server.ts`.

### AI generation fails

Check that the selected provider has a valid API key either in `.env` or in the app settings drawer.

### Weather does not appear

The itinerary must include activity coordinates. Weather is skipped when no mapped activity is available or while offline.
