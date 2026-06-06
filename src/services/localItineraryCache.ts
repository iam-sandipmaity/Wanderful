import { Itinerary } from "../types";

const ITINERARY_CACHE_KEY = "wanderful_cached_itinerary";

export interface CachedItinerarySnapshot {
  itinerary: Itinerary;
  cachedAt: string;
}

export function saveItinerarySnapshot(itinerary: Itinerary) {
  const snapshot: CachedItinerarySnapshot = {
    itinerary,
    cachedAt: new Date().toISOString()
  };

  localStorage.setItem(ITINERARY_CACHE_KEY, JSON.stringify(snapshot));
  return snapshot;
}

export function loadItinerarySnapshot(): CachedItinerarySnapshot | null {
  try {
    const cached = localStorage.getItem(ITINERARY_CACHE_KEY);
    return cached ? JSON.parse(cached) : null;
  } catch (error) {
    console.warn("Unable to read cached Wanderful itinerary.", error);
    return null;
  }
}
