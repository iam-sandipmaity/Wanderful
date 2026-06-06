import { Itinerary } from "../types";

export interface ForecastDay {
  date: string;
  weatherCode: number;
  maxTemp: number;
  minTemp: number;
  precipitationProbability: number;
  windSpeed: number;
}

export interface WeatherForecast {
  locationName: string;
  latitude: number;
  longitude: number;
  fetchedAt: string;
  days: ForecastDay[];
}

interface OpenMeteoResponse {
  latitude: number;
  longitude: number;
  daily?: {
    time?: string[];
    weather_code?: number[];
    temperature_2m_max?: number[];
    temperature_2m_min?: number[];
    precipitation_probability_max?: number[];
    wind_speed_10m_max?: number[];
  };
}

export function getForecastAnchor(itinerary: Itinerary) {
  const firstActivityWithCoordinates = itinerary.days
    .flatMap((day) => day.activities)
    .find((activity) => typeof activity.latitude === "number" && typeof activity.longitude === "number");

  if (!firstActivityWithCoordinates) return null;

  return {
    latitude: firstActivityWithCoordinates.latitude as number,
    longitude: firstActivityWithCoordinates.longitude as number,
    locationName: firstActivityWithCoordinates.locationName || itinerary.destination
  };
}

export async function fetchWeatherForecast(itinerary: Itinerary): Promise<WeatherForecast | null> {
  const anchor = getForecastAnchor(itinerary);
  if (!anchor) return null;

  const params = new URLSearchParams({
    latitude: anchor.latitude.toString(),
    longitude: anchor.longitude.toString(),
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_probability_max",
      "wind_speed_10m_max"
    ].join(","),
    temperature_unit: "celsius",
    wind_speed_unit: "kmh",
    timezone: "auto",
    forecast_days: Math.min(Math.max(itinerary.durationDays || 1, 1), 16).toString()
  });

  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`Weather forecast failed: ${response.status}`);
  }

  const data = (await response.json()) as OpenMeteoResponse;
  const daily = data.daily;

  if (!daily?.time?.length) return null;

  return {
    locationName: anchor.locationName,
    latitude: data.latitude ?? anchor.latitude,
    longitude: data.longitude ?? anchor.longitude,
    fetchedAt: new Date().toISOString(),
    days: daily.time.map((date, index) => ({
      date,
      weatherCode: daily.weather_code?.[index] ?? 0,
      maxTemp: daily.temperature_2m_max?.[index] ?? 0,
      minTemp: daily.temperature_2m_min?.[index] ?? 0,
      precipitationProbability: daily.precipitation_probability_max?.[index] ?? 0,
      windSpeed: daily.wind_speed_10m_max?.[index] ?? 0
    }))
  };
}

export function describeWeatherCode(code: number) {
  if (code === 0) return "Clear Sky";
  if ([1, 2, 3].includes(code)) return "Partly Cloudy";
  if ([45, 48].includes(code)) return "Fog";
  if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "Rain";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "Snow";
  if ([95, 96, 99].includes(code)) return "Storm Risk";
  return "Mixed Conditions";
}
