import { Activity, Itinerary } from "../types";

const DEFAULT_EVENT_HOURS = 2;

function escapeIcsText(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

function formatIcsDate(date: Date) {
  return [
    date.getUTCFullYear(),
    pad(date.getUTCMonth() + 1),
    pad(date.getUTCDate())
  ].join("") + "T" + [
    pad(date.getUTCHours()),
    pad(date.getUTCMinutes()),
    pad(date.getUTCSeconds())
  ].join("") + "Z";
}

function parseActivityTime(time: string) {
  const match = time.match(/(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?/i);
  if (!match) return { hours: 9, minutes: 0 };

  let hours = Number(match[1]);
  const minutes = Number(match[2] ?? "0");
  const meridiem = match[3]?.toUpperCase();

  if (meridiem === "PM" && hours < 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;

  return { hours, minutes };
}

function eventDateFor(dayIndex: number, activity: Activity, tripStartDate?: string) {
  const date = tripStartDate ? new Date(`${tripStartDate}T00:00:00`) : new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + dayIndex);

  const { hours, minutes } = parseActivityTime(activity.time);
  date.setHours(hours, minutes, 0, 0);

  return date;
}

export function generateItineraryIcs(itinerary: Itinerary) {
  const now = formatIcsDate(new Date());
  const events = itinerary.days.flatMap((day, dayIndex) =>
    day.activities.map((activity, activityIndex) => {
      const startsAt = eventDateFor(dayIndex, activity, itinerary.startDate);
      const endsAt = new Date(startsAt.getTime() + DEFAULT_EVENT_HOURS * 60 * 60 * 1000);
      const coordinates = typeof activity.latitude === "number" && typeof activity.longitude === "number"
        ? `${activity.latitude};${activity.longitude}`
        : "";

      return [
        "BEGIN:VEVENT",
        `UID:wanderful-${dayIndex + 1}-${activityIndex + 1}-${Date.now()}@wanderful.local`,
        `DTSTAMP:${now}`,
        `DTSTART:${formatIcsDate(startsAt)}`,
        `DTEND:${formatIcsDate(endsAt)}`,
        `SUMMARY:${escapeIcsText(`${itinerary.tripName}: ${activity.title}`)}`,
        `DESCRIPTION:${escapeIcsText(`${activity.description}\n\nDay ${day.dayNumber}: ${day.title}\nCost: ${activity.cost}\nTip: ${day.tips}`)}`,
        `LOCATION:${escapeIcsText(activity.locationName)}`,
        coordinates ? `GEO:${coordinates}` : "",
        "END:VEVENT"
      ].filter(Boolean).join("\r\n");
    })
  );

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wanderful Travel OS//Itinerary Export//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:${escapeIcsText(itinerary.tripName)}`,
    ...events,
    "END:VCALENDAR"
  ].join("\r\n");
}

export function downloadItineraryIcs(itinerary: Itinerary) {
  const ics = generateItineraryIcs(itinerary);
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `${itinerary.tripName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "wanderful-itinerary"}.ics`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
