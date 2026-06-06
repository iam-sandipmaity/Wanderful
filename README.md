# Wanderful Travel OS

<p align="center">
  <img src="public/preview.png" alt="Wanderful Travel OS preview" width="100%" />
</p>

Wanderful is a premium AI travel planning app for generating cinematic, practical, map-ready travel itineraries. It combines AI itinerary generation, seasonal planning, mapped activities, weather context, printable dossiers, calendar export, curated travel archives, and offline-aware trip caching in one polished travel workspace.

## Highlights

- AI-generated multi-day itineraries with real-world latitude and longitude for every activity
- Seasonal planning based on selected travel date and destination timing
- Budget-aware planning with selectable currency
- Pre-curated itinerary archive for instant demo journeys
- Cultural, safety, finance, and logistics guide pages
- Interactive OpenStreetMap/Leaflet activity maps
- Local destination weather forecast using Open-Meteo
- Printable PDF-friendly itinerary dossier
- `.ics` export for Google Calendar and Apple Calendar
- Offline state indicator and local itinerary caching
- Service worker for app-shell caching
- Bring-your-own-key support for Gemini, OpenAI, Anthropic, and Groq

## Live App Structure

| Route | Description |
| --- | --- |
| `/` | Discover planner and trip generation entry |
| `/how-it-works` | Product architecture and planning workflow |
| `/itineraries` | Pre-curated travel archive |
| `/guides` | Cultural, safety, wellness, and logistics guides |
| `/trip` | Generated or loaded itinerary dashboard |

The app includes a Vercel SPA fallback rewrite, so direct refreshes on client routes continue to serve the React app.

## Tech Stack

- React 19
- Vite 6
- TypeScript
- Tailwind CSS 4
- Express for local development server
- Vercel serverless API route for production itinerary generation
- Leaflet for maps
- Motion and GSAP for interaction and animation
- Lucide React icons
- Google GenAI SDK
- Open-Meteo forecast API

## Getting Started

### Prerequisites

- Node.js 22 or newer recommended
- npm

### Install Dependencies

```bash
npm install
```

### Configure Environment

Create `.env` from the example file:

```bash
cp .env.example .env
```

Add at least one provider key:

```env
GEMINI_API_KEY="your_gemini_key"
OPENAI_API_KEY=""
ANTHROPIC_API_KEY=""
GROQ_API_KEY=""
APP_URL="http://localhost:3000"
```

Gemini is the default provider. Users can also paste provider keys inside the app's settings drawer at runtime.

### Run Locally

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Express + Vite development server |
| `npm run build` | Build the Vite client and bundle the local server |
| `npm run start` | Start the production server from `dist/server.cjs` |
| `npm run lint` | Run TypeScript checks with `tsc --noEmit` |
| `npm run clean` | Remove generated build output |

## Deployment Notes

### Vercel

Production API generation is handled by:

```text
api/generate-itinerary.ts
```

Client-side routing is handled by `vercel.json`:

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

Set these environment variables in Vercel as needed:

- `GEMINI_API_KEY`
- `OPENAI_API_KEY`
- `ANTHROPIC_API_KEY`
- `GROQ_API_KEY`
- `APP_URL`

## Project Structure

```text
api/
  generate-itinerary.ts
public/
  favicon.svg
  preview.png
  sw.js
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
vercel.json
```

## Feature Details

### AI Itinerary Generation

The planner sends the starting city, budget, currency, travel date, trip length, travel style, and selected AI provider to the itinerary API. The API asks the model to return structured JSON with coordinates, activities, costs, lodging notes, packing guidance, and safety advice.

### Seasonal Timing

The travel date is passed into the model prompt so it can adjust recommendations for heat, winter, monsoon, festivals, shoulder season, daylight, and expected tourism pressure.

### Calendar Export

The trip dashboard generates a downloadable `.ics` file from itinerary activities. When a travel start date is selected, calendar events are anchored to that date.

### Weather

Weather data is fetched from Open-Meteo using the first activity that includes valid coordinates. Temperatures are shown in Celsius and wind speed in km/h.

### Offline Support

The service worker caches the app shell. The latest itinerary is saved in local storage so users can continue viewing core trip details when offline.

## Troubleshooting

### Direct route refresh shows `404: NOT_FOUND`

Make sure `vercel.json` is deployed. It rewrites client-side routes back to `index.html`.

### `/api/generate-itinerary` returns `405`

Make sure the Vercel serverless function in `api/generate-itinerary.ts` is included in the deployment.

### AI generation fails

Confirm that the selected provider has a valid key in environment variables or in the in-app settings drawer.

### Weather does not appear

Weather requires activity coordinates and an active network connection.

### Port `3000` is already in use

Stop the existing dev server, or change the port inside `server.ts`.

## Source

GitHub: <https://github.com/iam-sandipmaity/Wanderful>
