export const config = {
  maxDuration: 10
};

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed. Use GET." });
  }

  try {
    const response = await fetch("https://ipapi.co/json/", {
      headers: {
        "User-Agent": "wanderful-vercel"
      }
    });

    if (!response.ok) {
      return res.status(502).json({ error: "Location detection unavailable" });
    }

    const data = await response.json();
    return res.status(200).json({
      country: data.country || data.country_code || "",
      country_code: data.country_code || data.country || ""
    });
  } catch (error) {
    return res.status(502).json({ error: "Location detection unavailable" });
  }
}
