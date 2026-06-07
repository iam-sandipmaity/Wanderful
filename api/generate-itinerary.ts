import { GoogleGenAI, Type } from "@google/genai";

export const config = {
  maxDuration: 60
};

function cleanAndParseJSON(responseText: string) {
  let cleaned = responseText.trim();
  if (cleaned.startsWith("```json")) {
    cleaned = cleaned.slice(7);
  } else if (cleaned.startsWith("```")) {
    cleaned = cleaned.slice(3);
  }
  if (cleaned.endsWith("```")) {
    cleaned = cleaned.slice(0, cleaned.length - 3);
  }
  return JSON.parse(cleaned.trim());
}

function enforceItineraryDensity(
  parsedData: any,
  expectedDays: number,
  expectedActivitiesPerDay: number
) {
  if (!parsedData || typeof parsedData !== "object") {
    throw new Error("AI returned an empty itinerary. Please try generating again.");
  }

  if (!Array.isArray(parsedData.days)) {
    throw new Error("AI returned an itinerary without day plans. Please try generating again.");
  }

  if (parsedData.days.length < expectedDays) {
    throw new Error(
      `AI returned only ${parsedData.days.length} day plans; requested ${expectedDays}. Please try generating again.`
    );
  }

  if (parsedData.days.length > expectedDays) {
    parsedData.days = parsedData.days.slice(0, expectedDays);
  }

  parsedData.days.forEach((day: any, index: number) => {
    if (!Array.isArray(day.activities)) {
      throw new Error(`AI returned Day ${index + 1} without activities. Please try generating again.`);
    }

    if (day.activities.length < expectedActivitiesPerDay) {
      throw new Error(
        `AI returned only ${day.activities.length} activities for Day ${index + 1}; requested ${expectedActivitiesPerDay}. Please try again or choose fewer daily stops.`
      );
    }

    if (day.activities.length > expectedActivitiesPerDay) {
      day.activities = day.activities.slice(0, expectedActivitiesPerDay);
    }
  });

  parsedData.durationDays = expectedDays;
  return parsedData;
}

function buildTravelTimingContext(startDate: unknown) {
  const travelStartDate = typeof startDate === "string" && startDate.trim() ? startDate.trim() : "";

  if (!travelStartDate) {
    return {
      travelStartDate,
      travelTimingContext: "No fixed travel date supplied; use generally balanced, year-round recommendations."
    };
  }

  const date = new Date(`${travelStartDate}T12:00:00`);
  if (Number.isNaN(date.getTime())) {
    return {
      travelStartDate,
      travelTimingContext: `Requested travel date: ${travelStartDate}. Interpret this date carefully and adapt to the destination's local season.`
    };
  }

  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
  return {
    travelStartDate,
    travelTimingContext: `Requested travel start date: ${travelStartDate} (${monthName}). Infer the destination's local season for this month and adapt all recommendations accordingly.`
  };
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const { startingCity, budget, days, activitiesPerDay, startDate, travelStyle, userApiKey, currency, aiProvider } = req.body || {};

    if (!startingCity || !days || !travelStyle) {
      return res.status(400).json({ error: "Missing required starting parameters" });
    }

    const activeProvider = aiProvider || "gemini";
    const travelDaysCount = Math.min(Math.max(parseInt(days) || 3, 1), 10);
    const activitiesPerDayCount = Math.min(Math.max(parseInt(activitiesPerDay) || 4, 3), 6);
    const targetCurrency = currency || "USD";
    const { travelStartDate, travelTimingContext } = buildTravelTimingContext(startDate);

    const prompt = `You are the master engine of Wanderful, a futuristic high-end personalized travel OS.
Generate a premium, cinematic, ultra-detailed travel itinerary based on these variables:
- Starting City: ${startingCity}
- Budget Goal: ${budget || "flexible"} (All calculated costs must be formatted clearly in the specified currency: ${targetCurrency})
- Duration: ${travelDaysCount} Days
- Daily Activity Load: ${activitiesPerDayCount} planned stops per day
- Travel Timing: ${travelTimingContext}
- Travel Style / Sentiment: ${travelStyle}

Create an experience tailored deeply to this travel style, Starting City, and travel timing. Date/month matters: if the selected month implies summer, winter, monsoon, shoulder season, festival pressure, heat risk, snow risk, short daylight, or high/low tourism season at the destination, reflect that in pacing, activity choices, packing, safety guidance, lodging/transport notes, and cost estimates. Realistically estimate costs relative to local rates. All text must speak in a highly refined, cinematic travel curator tone. Include real-world approximate latitude and longitude coordinates for every single activity location so they can be mapped on Leaflet.

Activity density requirements:
- Return exactly ${travelDaysCount} day objects in the "days" array.
- Every day must include exactly ${activitiesPerDayCount} activity objects.
- Use this daily rhythm as the base: morning anchor, lunch or food stop, afternoon cultural/nature/local experience, and evening dinner/viewpoint/wind-down.
- If ${activitiesPerDayCount} is 5 or 6, add realistic late-morning and/or late-afternoon stops without making the day feel rushed.
- Do not collapse a day into only one or two activities.`;

    const jsonFormatSpecs = `
Structure your response as a valid JSON object matching this schema:
{
  "tripName": "Creative premium atmospheric name of the journey",
  "tagline": "Emotionally resonant travel tagline",
  "destination": "The curated main destination city/region",
  "durationDays": ${travelDaysCount},
  "travelStyle": "${travelStyle}",
  "estimatedTotalCost": "Total budget total in ${targetCurrency} with appropriate currency symbols",
  "highlights": ["up to 4 premium, high-impact highlights"],
  "packingList": ["5 highly specific items for this style and destination"],
  "days": [
    {
      "dayNumber": 1,
      "title": "Charming title of the day's theme",
      "activities": [
        {
          "time": "Morning",
          "title": "Morning anchor activity",
          "description": "Evocative cinematic details describing what to see, smell, or experience",
          "locationName": "Specific landmark, neighborhood, trailhead, museum, temple, lookout point, etc.",
          "cost": "Price estimation in ${targetCurrency}",
          "latitude": 35.0000,
          "longitude": 135.0000
        },
        {
          "time": "Lunch",
          "title": "Local lunch or food stop",
          "description": "Evocative culinary details with realistic pacing and local context",
          "locationName": "Specific restaurant, market, cafe, food hall, or dining district",
          "cost": "Price estimation in ${targetCurrency}",
          "latitude": 35.0000,
          "longitude": 135.0000
        },
        {
          "time": "Afternoon",
          "title": "Afternoon cultural, nature, or neighborhood experience",
          "description": "Evocative cinematic details describing what to see, smell, or experience",
          "locationName": "Specific restaurant, temple, lookout point, etc.",
          "cost": "Price estimation in ${targetCurrency}",
          "latitude": 35.0000,
          "longitude": 135.0000
        },
        {
          "time": "Evening",
          "title": "Evening dinner, viewpoint, show, or wind-down",
          "description": "Evocative cinematic details describing how to close the day memorably",
          "locationName": "Specific restaurant, viewpoint, waterfront, theater, night market, or district",
          "cost": "Price estimation in ${targetCurrency}",
          "latitude": 35.0000,
          "longitude": 135.0000
        }
      ],
      "accommodations": "Suggested premium or highly tailored lodging for tonight",
      "tips": "Crucial professional local guidance regarding pace, reservation, or route for this day"
    }
  ],
  "budgetBreakdown": {
    "stays": "Estimates in ${targetCurrency}",
    "transport": "Estimates in ${targetCurrency}",
    "food": "Estimates in ${targetCurrency}",
    "activities": "Estimates in ${targetCurrency}"
  },
  "localSafetyAndPaceTips": "Overarching checklist or professional feedback on safety, pace, or cultural etiquette"
}
Ensure your response is raw JSON and contains exactly these fields. The "days" array must contain exactly ${travelDaysCount} days, and each day must contain exactly ${activitiesPerDayCount} activities.`;

    let parsedData: any = null;

    if (activeProvider === "openai") {
      const activeApiKey = userApiKey || process.env.OPENAI_API_KEY;
      if (!activeApiKey) {
        return res.status(401).json({ error: "Missing OpenAI API Key. Please configure OPENAI_API_KEY inside your deployment environment or provide it via settings flyout." });
      }

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${activeApiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: "You are the premium, futuristic travel OS 'Wanderful' that curates flawless itineraries. Deliver highly immersive, exciting descriptions, practical travel advice, realistic costs, and concrete safety tips. Act as a world-class travel planner. You must return only a valid JSON response." },
            { role: "user", content: `${prompt}\n\n${jsonFormatSpecs}` }
          ],
          response_format: { type: "json_object" },
          max_tokens: 8000
        })
      });

      if (!response.ok) {
        throw new Error(`OpenAI API failed: ${await response.text()}`);
      }

      const data: any = await response.json();
      parsedData = cleanAndParseJSON(data.choices?.[0]?.message?.content || "{}");
    } else if (activeProvider === "anthropic") {
      const activeApiKey = userApiKey || process.env.ANTHROPIC_API_KEY;
      if (!activeApiKey) {
        return res.status(401).json({ error: "Missing Anthropic API Key. Please configure ANTHROPIC_API_KEY inside your deployment environment or provide it via settings flyout." });
      }

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": activeApiKey,
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: "claude-3-5-sonnet-20241022",
          max_tokens: 8000,
          system: "You are the premium, futuristic travel OS 'Wanderful' that curates flawless itineraries. Deliver highly immersive, exciting descriptions, practical travel advice, realistic costs, and concrete safety tips. Act as a world-class travel planner. Return raw JSON matching the schema.",
          messages: [{ role: "user", content: `${prompt}\n\n${jsonFormatSpecs}` }]
        })
      });

      if (!response.ok) {
        throw new Error(`Anthropic API failed: ${await response.text()}`);
      }

      const data: any = await response.json();
      parsedData = cleanAndParseJSON(data.content?.[0]?.text || "{}");
    } else if (activeProvider === "groq") {
      const activeApiKey = userApiKey || process.env.GROQ_API_KEY;
      if (!activeApiKey) {
        return res.status(401).json({ error: "Missing Groq API Key. Please configure GROQ_API_KEY inside your deployment environment or provide it via settings flyout." });
      }

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${activeApiKey}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: "You are the premium, futuristic travel OS 'Wanderful' that curates flawless itineraries. Deliver highly immersive, exciting descriptions, practical travel advice, realistic costs, and concrete safety tips. Act as a world-class travel planner. Return a valid JSON." },
            { role: "user", content: `${prompt}\n\n${jsonFormatSpecs}` }
          ],
          response_format: { type: "json_object" },
          max_tokens: 8000
        })
      });

      if (!response.ok) {
        throw new Error(`Groq API failed: ${await response.text()}`);
      }

      const data: any = await response.json();
      parsedData = cleanAndParseJSON(data.choices?.[0]?.message?.content || "{}");
    } else {
      const activeApiKey = userApiKey || process.env.GEMINI_API_KEY;
      if (!activeApiKey || activeApiKey === "MY_GEMINI_API_KEY") {
        return res.status(401).json({ error: "Missing API Key. Please provide your own Gemini API key using the settings drawer or configure GEMINI_API_KEY in deployment environment variables." });
      }

      const ai = new GoogleGenAI({
        apiKey: activeApiKey,
        httpOptions: {
          headers: {
            "User-Agent": "wanderful-vercel"
          }
        }
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `${prompt}\n\n${jsonFormatSpecs}`,
        config: {
          systemInstruction: `You are the premium, futuristic travel OS 'Wanderful' that curates flawless itineraries. Deliver highly immersive, exciting descriptions, practical travel advice, realistic costs, and concrete safety tips. Act as a world-class travel planner. You must return exactly ${travelDaysCount} days and exactly ${activitiesPerDayCount} activities per day.`,
          maxOutputTokens: 8192,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            required: ["tripName", "tagline", "destination", "durationDays", "travelStyle", "estimatedTotalCost", "highlights", "packingList", "days", "budgetBreakdown", "localSafetyAndPaceTips"],
            properties: {
              tripName: { type: Type.STRING },
              tagline: { type: Type.STRING },
              destination: { type: Type.STRING },
              durationDays: { type: Type.INTEGER },
              travelStyle: { type: Type.STRING },
              estimatedTotalCost: { type: Type.STRING },
              highlights: { type: Type.ARRAY, items: { type: Type.STRING } },
              packingList: { type: Type.ARRAY, items: { type: Type.STRING } },
              days: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  required: ["dayNumber", "title", "activities", "accommodations", "tips"],
                  properties: {
                    dayNumber: { type: Type.INTEGER },
                    title: { type: Type.STRING },
                    activities: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        required: ["time", "title", "description", "locationName", "cost", "latitude", "longitude"],
                        properties: {
                          time: { type: Type.STRING },
                          title: { type: Type.STRING },
                          description: { type: Type.STRING },
                          locationName: { type: Type.STRING },
                          cost: { type: Type.STRING },
                          latitude: { type: Type.NUMBER },
                          longitude: { type: Type.NUMBER }
                        }
                      }
                    },
                    accommodations: { type: Type.STRING },
                    tips: { type: Type.STRING }
                  }
                }
              },
              budgetBreakdown: {
                type: Type.OBJECT,
                required: ["stays", "transport", "food", "activities"],
                properties: {
                  stays: { type: Type.STRING },
                  transport: { type: Type.STRING },
                  food: { type: Type.STRING },
                  activities: { type: Type.STRING }
                }
              },
              localSafetyAndPaceTips: { type: Type.STRING }
            }
          }
        }
      });

      parsedData = JSON.parse(response.text || "{}");
    }

    parsedData = enforceItineraryDensity(parsedData, travelDaysCount, activitiesPerDayCount);

    if (parsedData && typeof parsedData === "object") {
      parsedData.startDate = travelStartDate || undefined;
      parsedData.seasonalContext = travelTimingContext;
      parsedData.activitiesPerDay = activitiesPerDayCount;
    }

    return res.status(200).json(parsedData);
  } catch (error: any) {
    console.error("Travel generation error:", error);
    return res.status(500).json({
      error: error.message || "Failed to generate premium itinerary. Please check your selected API key and try again."
    });
  }
}
