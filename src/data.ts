export interface TravelGuide {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  icon: string;
  readTime: string;
  bullets: string[];
  fullStory: string;
}

export const TRAVEL_GUIDES: TravelGuide[] = [
  {
    id: "guide-shrine",
    title: "Barefoot Steps & Shrine Etiquette",
    subtitle: "Navigating deep spiritual zones with humble grace across East Asia.",
    category: "Spiritual Culture",
    icon: "Compass",
    readTime: "4 min read",
    bullets: [
      "Always remove footwear when passing over delicate tatami grass mats or designated temple thresholds.",
      "Bow slightly with hands folded gently together near the heart when greeting local custodians.",
      "Never photograph high-sanctuary deities if clear signage requests deep silent observation.",
      "Speak in quiet, hushed, wind-like tones to let the incense smoke rise undisturbed."
    ],
    fullStory: "East Asian spiritual sanctuaries operate on deep silent rhythms. The transition from active dusty roads to shiny dark cedar steps requires physical translation: shoes off, shoulders draped, and heavy cameras stashed. When drinking from purification stone wells, use the wooden ladle to wash left hand first, then right, then sip tiny waters from your palm. Leave coins in the wooden collection boxes with a gentle toss."
  },
  {
    id: "guide-altitude",
    title: "Thermal Code & Acclimatization",
    subtitle: "Adapting to high altitude thermal shifts in geothermal onsen zones.",
    category: "Health & Wellbeing",
    icon: "ShieldCheck",
    readTime: "5 min read",
    bullets: [
      "Acclimatize fully by consuming dual-saline warm mineral liquids on arrival.",
      "Always wash and rinse your body completely with warm wooden stools before entering quiet geothermal pools.",
      "Keep standard soaking sequences strictly under 15-minute bursts to shield the capillaries.",
      "Pack lightweight packable wool layers for high altitude sub-tectonic night cooling."
    ],
    fullStory: "High geothermal slopes (like around Kawaguchiko or active Icelandic vents) can shift in air oxygen ratios quite rapidly. Combined with deep geothermal baths, blood circulation will accelerate quickly. Our medical teams advise regular warm hydration, no cold wind exposures immediately following mineral pools, and listening deeply to your internal physical rhythm. If light fatigue forms, rest immediately on wooden loungers."
  },
  {
    id: "guide-currency",
    title: "Spices & High-Speed Cash Systems",
    subtitle: "When to choose digital taps over crisp paper notes in regional bazaars.",
    category: "Finance & Trade",
    icon: "DollarSign",
    readTime: "3 min read",
    bullets: [
      "Always keep low-denomination paper coins and bills ready for street food operators.",
      "Convert currencies base on local real-time rates dynamically cached on our platform.",
      "Keep primary premium credit cards locked securely inside protective RFID metallic slips.",
      "Confirm prices clearly before getting inside private regional transport auto-rickshaws."
    ],
    fullStory: "While major hotels and premium restaurants take standard tap cards seamlessly, local spice markets and heritage transportation operators function almost entirely via local paper currencies. Carrying 10-50 small denomination bills ensures you can enjoy hot spiced teas or immediate auto transits without any digital friction. Keep your cash securely separated into dual pockets to avoid stumbles."
  },
  {
    id: "guide-parisian",
    title: "The Art of Parisian Flânerie",
    subtitle: "Embracing the local cultural concept of purposeful wandering.",
    category: "French Culture",
    icon: "Compass",
    readTime: "6 min read",
    bullets: [
      "Avoid rigid stopwatch schedules. Allow destination detours to evolve dynamically.",
      "Order 'un café' directly at the copper or zinc countertop bar for authentic local rates.",
      "Pause inside covered shopping arcades dating to the 19th century to observe the vintage print trades.",
      "Utilize green metal garden chairs inside Luxembourg or Tuileries for independent reading blocks."
    ],
    fullStory: "A true flâneur is an artist of the pavement. In Paris, the finest coordinates emerge when you consciously ignore strict itinerary pins. Walk slowly down narrow limestone alleys, observe vintage deckled-edge paper sellers along the Seine, and peer inside ancient ivy-covered residential courtyards. When a cafe calls, sit facing the street, order dynamic local roasts, and simply observe the cinematic flow of the city."
  },
  {
    id: "guide-alpine-gear",
    title: "Alpine Ascent & Triple-Insulated Wear",
    subtitle: "Dressing strategies for unpredictable high alpine pass pressures.",
    category: "Health & Safety",
    icon: "ShieldCheck",
    readTime: "5 min read",
    bullets: [
      "Implement the classic triple-layer standard: breathable base, thermal fleece, and windproof shell.",
      "Select socks constructed from high-grade organic merino wool to insulate high mountain walks.",
      "Verify that boot profiles feature specialized vulcanized rubber soles with minimum 4.5mm lugs.",
      "Keep dynamic visual protection sunglasses secured around your collar to prevent glacier reflection burn."
    ],
    fullStory: "Weather inside high Swiss passes (above 2,500 meters) can drop by 20 degrees Fahrenheit in under twenty minutes. This severe atmospheric pressure transition requires physical preparation: raw sweating during uphill ascents can freeze near your chest if not regulated by moisture-wicking synthetic undergarments. Our survival directors recommend packing a secondary dry woolen layer inside your primary dry-pack."
  },
  {
    id: "guide-swiss-rail",
    title: "Swiss Rail Vector & Aqueduct Transit",
    subtitle: "Mastering rail transitions, timing coordinates, and seats across gorges.",
    category: "Finance & Logistics",
    icon: "DollarSign",
    readTime: "4 min read",
    bullets: [
      "Download the Swiss SBB navigation offline maps prior to traversing remote mountain tunnels.",
      "Aim for port side seating on the Albula line to capture legendary circular stone aqueducts.",
      "Validate panoramic carriage reservations 48 hours prior to boarding heavy express grids.",
      "Hold onto lightweight bags when stepping past high open carriage train vestibules."
    ],
    fullStory: "Swiss rail lines operates with absolute mechanical precision, synchronization points matching local chronological clocks to the exact second. Missed connections are rare but easily recovered using decentralized regional cogwheel systems. Storing active digital pass codes inside offline mobile states ensures rapid ticket gates processing in alpine valleys without remote base-station signals."
  }
];

