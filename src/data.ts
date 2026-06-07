import { Itinerary } from "./types";

const FEATURED_CURATED_ITINERARIES: Itinerary[] = [
  {
    tripName: "Kyoto & Mt. Fuji Sync",
    tagline: "Uncover quiet shrines, legendary hot springs, and multi-course culinary zen.",
    destination: "Honshu Island, Japan",
    durationDays: 4,
    travelStyle: "Luxury",
    estimatedTotalCost: "¥345,000",
    highlights: [
      "Dawn walk through the silent bamboo forest",
      "Private sunset tea ritual with local geiko",
      "Open-air volcanic hot springs overlooking Fuji",
      "Curated nine-course seasonal kaiseki dining"
    ],
    packingList: [
      "Linen overlays for quiet shrines",
      "Slip-on shoes for quick entry",
      "High-end camera or analog diary",
      "Thermal slips for mountain evening breezes",
      "Universal voltage converter"
    ],
    days: [
      {
        dayNumber: 1,
        title: "Silent Bamboo & Emerald Gardens",
        accommodations: "Hoshinoya Kyoto floating pavilion",
        tips: "Access the hotel via private wooden barge down the Oi River. Savor warm organic matcha on arrival.",
        activities: [
          {
            time: "05:30 AM",
            title: "Bamboo Sound Immersion",
            description: "Arrive at Arashiyama before the crowds. Listen strictly to the hollow, wind-swept creaking of thousand-year-old giant green stalks.",
            locationName: "Arashiyama Grove Outer Walk",
            cost: "Free",
            latitude: 35.0156,
            longitude: 135.6715
          },
          {
            time: "12:00 PM",
            title: "Warm Zen Tofu Lunch",
            description: "Enjoy delicate, hand-pressed, single-source silken tofu stewed over live wooden lanterns, inside historic temple walls.",
            locationName: "Shigetsu Temple Gardens",
            cost: "¥6,800",
            latitude: 35.0162,
            longitude: 135.6776
          },
          {
            time: "06:00 PM",
            title: "Lantern-lit Gion Footsteps",
            description: "Walk alongside an architectural preservationist down dark wooden neighborhoods. Spot shadows floating behind gold-painted paper shoji screens.",
            locationName: "Hanami-koji Street",
            cost: "¥11,000",
            latitude: 35.0034,
            longitude: 135.7749
          }
        ]
      },
      {
        dayNumber: 2,
        title: "Vermilion Gates & Earthly Shrines",
        accommodations: "Ritz-Carlton Kamogawa Suite",
        tips: "To capture the morning golden hour framing the red arches, depart your quarters at exactly 05:00 AM.",
        activities: [
          {
            time: "05:45 AM",
            title: "Sacred Torii Gate Loop",
            description: "Climb the sacred wooded mountain face through ten thousand vermilion archways dripping with morning dew.",
            locationName: "Fushimi Inari Shrine Path",
            cost: "Free",
            latitude: 34.9671,
            longitude: 135.7727
          },
          {
            time: "02:00 PM",
            title: "Antique Tea Whisking Session",
            description: "A private masterclass with active green masters. Hand-grind leaves on solid black volcanic stone.",
            locationName: "Tea Salon Uji",
            cost: "¥9,500",
            latitude: 34.8904,
            longitude: 135.8015
          }
        ]
      },
      {
        dayNumber: 3,
        title: "Nozomi Bullet Fast-Flight to Fuji",
        accommodations: "Fufu Kawaguchiko Onsen Resort",
        tips: "Locate seats on the right margin of the train for a breathtaking frame of volcanic fields.",
        activities: [
          {
            time: "09:00 AM",
            title: "High-Speed Shinkansen Transit",
            description: "Board the ultra-smooth bullet train. Sip seasonal sake while sliding effortlessly through rural Japan at 320 km/h.",
            locationName: "Kyoto Station Gate",
            cost: "¥14,200",
            latitude: 34.9858,
            longitude: 135.7588
          },
          {
            time: "04:30 PM",
            title: "Thermal Mineral Bathing",
            description: "Soak in carbonated mountain waters direct from Fuji's dormant core. Watch stars form around the iconic white peak.",
            locationName: "Private Onsen Lounge",
            cost: "Included",
            latitude: 35.5230,
            longitude: 138.7562
          }
        ]
      }
    ],
    budgetBreakdown: {
      stays: "¥145,000",
      transport: "¥60,000",
      food: "¥80,000",
      activities: "¥60,000"
    },
    localSafetyAndPaceTips: "Acclimate to high geothermal air shifts with hydration. Wear premium lightweight socks as you will walk barefoot on temple mats. Greet hosts with a light incline bow."
  },
  {
    tripName: "Amalfi Coast Sentinel",
    tagline: "High-altitude coastal hiking, lemon orchid degustation, and legendary sunrises over Positano.",
    destination: "Salerno & Amalfi Coast, Italy",
    durationDays: 3,
    travelStyle: "Adventure",
    estimatedTotalCost: "€1,850",
    highlights: [
      "Hiking high above the clouds along the Path of the Gods",
      "Private hand-harvested organic limoncello degustation",
      "Hidden sea cove kayaking and crystal grottos exploration",
      "Freshly prepared seafood dining in local fishing clifftops"
    ],
    packingList: [
      "Rigid high-traction trail runners",
      "UV polarized marine glass protectors",
      "Lightweight packable rain shell",
      "Personal refillable micro-purifier water capsule",
      "Euro cash coins for local bus operators"
    ],
    days: [
      {
        dayNumber: 1,
        title: "Path of the Gods & Cliffside Ascents",
        accommodations: "Monastero Santa Rosa Hotel & Spa",
        tips: "Begin early to bypass noon heats. Pack dry figs and stone fruits to fuel the high mountain ascent.",
        activities: [
          {
            time: "07:30 AM",
            title: "Path of the Gods Ridge Walk",
            description: "Trek high above the coastal sea line with deep clouds weaving past jagged ancient limestone gorges.",
            locationName: "Sentiero degli Dei Ridge",
            cost: "Free",
            latitude: 40.6305,
            longitude: 14.5028
          },
          {
            time: "01:30 PM",
            title: "Lemon Orcard Cave Lunch",
            description: "Enjoy chilled caprese salad wrapped in warm rosemary leaves underneath centuries-old aromatic lemon canopies.",
            locationName: "La Tagliata Amalfi Forest",
            cost: "€65",
            latitude: 40.6321,
            longitude: 14.4925
          },
          {
            time: "05:00 PM",
            title: "Positano Harbor Descent",
            description: "Walk down through vertical, candy-colored stone steps down to the emerald shores. Feel warm maritime wind.",
            locationName: "Positano Harbor Pier",
            cost: "Free",
            latitude: 40.6274,
            longitude: 14.4849
          }
        ]
      },
      {
        dayNumber: 2,
        title: "Hidden Grottos & Ravello Melodies",
        accommodations: "Belmond Hotel Caruso, Ravello",
        tips: "Visit Ravello's infinite gardens around 04:30 PM for breathtaking camera angles as shadows lengthen.",
        activities: [
          {
            time: "09:30 AM",
            title: "Coastal Emerald Grotto Kayaking",
            description: "Paddle inside a secluded, deep stone cove lit by ambient sub-aquatic sunlight casting emerald ripples on high ceilings.",
            locationName: "Grotta dello Smeraldo Shore",
            cost: "€85",
            latitude: 40.6143,
            longitude: 14.5168
          },
          {
            time: "04:30 PM",
            title: "Infinity Garden Concert and Walk",
            description: "Walk alongside architectural towers dating down to historical Roman states. Pause to listen to distant classical melodies.",
            locationName: "Villa Cimbrone Gardens",
            cost: "€12",
            latitude: 40.6475,
            longitude: 14.6111
          }
        ]
      }
    ],
    budgetBreakdown: {
      stays: "€950",
      transport: "€300",
      food: "€320",
      activities: "€280"
    },
    localSafetyAndPaceTips: "Wear dynamic trail runners with deep lug depths. Coastal buses run frequently but can be loaded; have cash coins ready."
  },
  {
    tripName: "Icelandic Volcanic Circle",
    tagline: "Glacier trekking, black basalt shores, and hot sub-tectonic rivers in active volcanic zones.",
    destination: "Southern Highlands, Iceland",
    durationDays: 4,
    travelStyle: "Adventure",
    estimatedTotalCost: "$2,450",
    highlights: [
      "Climbing over active sub-glacial black sand channels",
      "Soaking in steaming natural hot rivers of Reykjadalur",
      "Watching the sunset frame massive black basalt geometric pillars",
      "Dipping in geothermal pools next to roaring boiling safety valves"
    ],
    packingList: [
      "Heavy windproof hardshell trousers",
      "Gore-tex high-top boots",
      "Quick-dry hiking towels",
      "Waterproof camera skin protector",
      "Fleece-lined thermal base layers"
    ],
    days: [
      {
        dayNumber: 1,
        title: "Steaming Earth & Boiling Valleys",
        accommodations: "Ion Luxury Adventure Hotel",
        tips: "The mountain hike to the steam river requires 45 minutes of uphill stride. Pack dry woolen thermal wear.",
        activities: [
          {
            time: "09:00 AM",
            title: "Reykjadalur River Trek",
            description: "Hike through steaming sulfur fields to a geothermal river flowing right through lush green volcanic folds.",
            locationName: "Reykjadalur Thermal River",
            cost: "Free",
            latitude: 64.0225,
            longitude: -21.2115
          },
          {
            time: "03:00 PM",
            title: "Crystalline Lava Tunnel Dive",
            description: "Clamber down into cold lava tubes carved by ancient tectonic fire. View multi-colored subterranean minerals.",
            locationName: "Raufarholshellir Lava Cave",
            cost: "$74",
            latitude: 63.9402,
            longitude: -21.3988
          }
        ]
      },
      {
        dayNumber: 2,
        title: "Black Basalt Basins & Roaring Cascades",
        accommodations: "Skalakot Manor Hotel",
        tips: "Ensure waterproof wear is on before walking behind Seljalandsfoss waterfall to shield against heavy gale-spray.",
        activities: [
          {
            time: "10:00 AM",
            title: "Behind-the-Waterfall Walk",
            description: "Feel the ground shake underfoot as thousands of tons of glacier-melt crash over high black cliffs.",
            locationName: "Seljalandsfoss Cascade",
            cost: "Free",
            latitude: 63.6156,
            longitude: -19.9886
          },
          {
            time: "04:00 PM",
            title: "Basalt Pyramid Beach Wander",
            description: "Walk along ink-black sand beaches, framing giant freestanding ocean needles and perfectly geometric black columns.",
            locationName: "Reynisfjara Jet-Black Shore",
            cost: "Free",
            latitude: 63.4025,
            longitude: -19.0435
          }
        ]
      }
    ],
    budgetBreakdown: {
      stays: "$1,100",
      transport: "$550",
      food: "$400",
      activities: "$400"
    },
    localSafetyAndPaceTips: "Be incredibly cautious of sneaker waves along the black sand beaches. Check road conditions frequently as mountain winds are severe."
  },
  {
    tripName: "Rajasthani Royal Forts",
    tagline: "Spectacular pink cities, astronomical giant sundials, and sunset folk music high above lake palaces.",
    destination: "Jaipur & Udaipur, India",
    durationDays: 3,
    travelStyle: "Food",
    estimatedTotalCost: "₹1,15,000",
    highlights: [
      "Guided architectural crawl inside Amber Palace",
      "Astronomical tracking on high masonry stone dials",
      "Spiced street-food crawling through Johri Bazaar",
      "Private boat escape across Lake Pichola during sunset"
    ],
    packingList: [
      "Extremely breathable loose linen wear",
      "Wide-brimmed protection sun hat",
      "Hand sanitizer and digestive capsules",
      "Slip-on leather sandals",
      "Reusable water cooler flask"
    ],
    days: [
      {
        dayNumber: 1,
        title: "Intricate Stone Grids & Spiced Labyrinths",
        accommodations: "The Raj Palace, Jaipur",
        tips: "Sip warm sweetened cardamon tea early in Galtaji. Local monkeys are friendly but store visual items securely.",
        activities: [
          {
            time: "08:00 AM",
            title: "Masonry Wind Palace Photo Walk",
            description: "Capture the golden sun rays filtering inside hundreds of tiny latticed pink sandstones.",
            locationName: "Hawa Mahal Frontage",
            cost: "₹200",
            latitude: 26.9239,
            longitude: 75.8267
          },
          {
            time: "01:00 PM",
            title: "Spiced Street Samosa Sampling",
            description: "Savor blistering hot, hand-pinched street pastry pies brimming with slow-roasted potatoes, fennel and dry spices.",
            locationName: "Johri Street Bazaar vendors",
            cost: "₹150",
            latitude: 26.9205,
            longitude: 75.8252
          },
          {
            time: "05:00 PM",
            title: "Sunset Astronomical Reading",
            description: "Deconstruct local historic time-keeping systems inside giant architectural sundials.",
            locationName: "Jantar Mantar Scientific Gardens",
            cost: "₹300",
            latitude: 26.9248,
            longitude: 75.8245
          }
        ]
      },
      {
        dayNumber: 2,
        title: "Udaipur Glances & Lake Reflections",
        accommodations: "Taj Lake Palace, Udaipur",
        tips: "Sunset boating is heavily demanded; arrive at the harbor pier thirty minutes before the sun descends.",
        activities: [
          {
            time: "10:00 AM",
            title: "White Glass City Palace Tour",
            description: "Examine beautiful mirrors, hand-painted tiles, and marble gardens framing vertical lake parameters.",
            locationName: "Udaipur City Palace Complex",
            cost: "₹500",
            latitude: 24.5764,
            longitude: 73.6835
          },
          {
            time: "05:30 PM",
            title: "Lakeside Sunset Cruise",
            description: "Sail over pure, silent waters reflecting massive classical towers completely painted in warm gold.",
            locationName: "Lake Pichola Boating Harbor",
            cost: "₹800",
            latitude: 24.5772,
            longitude: 73.6789
          }
        ]
      }
    ],
    budgetBreakdown: {
      stays: "₹55,000",
      transport: "₹25,000",
      food: "₹15,000",
      activities: "₹20,000"
    },
    localSafetyAndPaceTips: "Only ingest filtered, bottled water. Wear sunscreen regularly as city stone preserves high daytime thermal capacity."
  },
  {
    tripName: "Parisian Atelier & Secret Cafes",
    tagline: "Sift through quiet independent modern art, bespoke botanical perfume creation, and vintage paper archives.",
    destination: "Marais & Saint-Germain, France",
    durationDays: 3,
    travelStyle: "Relaxed",
    estimatedTotalCost: "€1,450",
    highlights: [
      "Exclusive nose-tuning session at a century-old Marais perfume house",
      "Private archivist walk studying mid-century lithographs and ink sketches",
      "Gourmet hot chocolate degustation inside independent marble courtyards",
      "Sunset reading stroll among green chairs in Jardin du Luxembourg"
    ],
    packingList: [
      "Unstructured tailored dark blazer",
      "Premium pocket leather-bound diary",
      "Comfortable flat walking loafers",
      "High-SPF invisible face sunscreen",
      "Reusable compact canvas tote bags"
    ],
    days: [
      {
        dayNumber: 1,
        title: "Bespoke Aromas & Preserved Lithographs",
        accommodations: "Pavillon de la Reine, Place des Vosges",
        tips: "Independent art stands along the Seine river open at exactly 10:00 AM. Cash is highly preferred for prints.",
        activities: [
          {
            time: "10:00 AM",
            title: "Botanical Perfumery Masterclass",
            description: "Blend raw jasmine concrete, vetiver, and clean salt ozone under the direction of an expert master nose.",
            locationName: "L'Officine Universelle Buly, Marais",
            cost: "€180",
            latitude: 48.8576,
            longitude: 2.3621
          },
          {
            time: "03:00 PM",
            title: "Vintage Paper Archive Discovery",
            description: "Turn ancient deckled papers dating down to regional revolution presses. Purchase original hand-pressed zinc-lithograph layouts.",
            locationName: "Galerie Documents, Saint-Germain",
            cost: "Free",
            latitude: 48.8542,
            longitude: 2.3354
          }
        ]
      },
      {
        dayNumber: 2,
        title: "Quiet Courtyards & Literary Orbits",
        accommodations: "L'Hôtel Saint-Germain",
        tips: "Choose a green metal chair closer to the central fountain for the ultimate serene reading shadow.",
        activities: [
          {
            time: "11:30 AM",
            title: "Rich Melted Cacao Degustation",
            description: "Slowly savor thick, steaming chocolate mixed with fresh sea salt flakes underneath private garden canopies.",
            locationName: "La Cour de l'Atelier Courtyard",
            cost: "€18",
            latitude: 48.8529,
            longitude: 2.3382
          },
          {
            time: "04:30 PM",
            title: "Luxembourg Lawn Reading Flow",
            description: "Read, sketch, or think. Observe locals floating past giant classic stone statues draped in warm ivy.",
            locationName: "Jardin du Luxembourg, Paris",
            cost: "Free",
            latitude: 48.8462,
            longitude: 2.3371
          }
        ]
      }
    ],
    budgetBreakdown: {
      stays: "€720",
      transport: "€80",
      food: "€280",
      activities: "€370"
    },
    localSafetyAndPaceTips: "Stay vigilant of rapid scooter orbits along crosswalks. Order espresso directly at the zinc counter bars for local pricing standards."
  },
  {
    tripName: "Swiss Alpine Crests & Glacier Rails",
    tagline: "Panoramic cogwheel train passes, organic high-altitude alpine cheese tasting, and silent glacier walks.",
    destination: "Bernese Oberland, Switzerland",
    durationDays: 4,
    travelStyle: "Luxury",
    estimatedTotalCost: "CHF 2,900",
    highlights: [
      "Panoramic rail voyage aboard the Glacier Express premium cabins",
      "Tasting wood-fired alpine Raclette inside a historic high mountain vault",
      "Silent high-altitude traverse along frozen glacier paths",
      "Luxury thermal spa immersion facing jagged icy peaks"
    ],
    packingList: [
      "UV 400 polarized visual screens",
      "Waterproof dynamic mountain boots",
      "Fleece-insulated lightweight gloves",
      "Refillable vacuum insulated tea flask",
      "Swiss Pass pre-activated rail permit"
    ],
    days: [
      {
        dayNumber: 1,
        title: "High Rails & Deep Gorges",
        accommodations: "Grand Hotel Bellevue, Gstaad",
        tips: "Ensure rail permits are saved offline. Snag seats on the port side for optimal perspective of limestone cliffs.",
        activities: [
          {
            time: "08:30 AM",
            title: "Glacier Express Panoramic Transit",
            description: "Slide past deep frozen lakes, medieval stone aqueducts, and snowy pine forests through expansive glass layouts.",
            locationName: "Zermatt Rail Terminal Gate",
            cost: "CHF 210",
            latitude: 46.0256,
            longitude: 7.7482
          },
          {
            time: "04:00 PM",
            title: "Active Alpine Cheese Vault Visit",
            description: "Taste three-year-aged cave cheese with raw local pine honey next to active wood-fired iron kettles.",
            locationName: "Sennerei Alpine Dairy Cave",
            cost: "CHF 45",
            latitude: 46.4715,
            longitude: 7.9822
          }
        ]
      },
      {
        dayNumber: 2,
        title: "Glacier Ridge Walks & Thermal Heat",
        accommodations: "Therme Vals Luxury Suites",
        tips: "The mountain winds average 35 knots; secure all lightweight hats and camera straps before boarding the cable cabins.",
        activities: [
          {
            time: "09:30 AM",
            title: "Glacier Bridge Walkway",
            description: "Walk across a slender steel suspension bridge connecting two peak columns 3,000 meters above quiet valleys.",
            locationName: "Peak Walk by Tissot, Glacier 3000",
            cost: "CHF 80",
            latitude: 46.3302,
            longitude: 7.2045
          },
          {
            time: "05:00 PM",
            title: "Quartz Geothermal Plunge",
            description: "Float in mineral waters emerging from solid basalt granite corridors. Breathe cold pine air while stars emerge.",
            locationName: "Therme Vals Rock Pools",
            cost: "CHF 120",
            latitude: 46.6181,
            longitude: 9.1805
          }
        ]
      }
    ],
    budgetBreakdown: {
      stays: "CHF 1,400",
      transport: "CHF 450",
      food: "CHF 450",
      activities: "CHF 600"
    },
    localSafetyAndPaceTips: "Thermal hydration is essential at high pressure altitudes. Monitor SwissMeteo regional radar scans frequently before high alpine passes."
  }
];

interface CuratedSpotSeed {
  time: string;
  title: string;
  description: string;
  locationName: string;
  cost: string;
  latitude: number;
  longitude: number;
}

interface CuratedItinerarySeed {
  tripName: string;
  tagline: string;
  destination: string;
  durationDays: number;
  travelStyle: "Luxury" | "Adventure" | "Food" | "Relaxed";
  estimatedTotalCost: string;
  lodging: string;
  localAngle: string;
  paceAngle: string;
  transitNote: string;
  safety: string;
  spots: [CuratedSpotSeed, CuratedSpotSeed];
}

const PACKING_BY_STYLE: Record<CuratedItinerarySeed["travelStyle"], string[]> = {
  Luxury: [
    "Tailored evening layer",
    "Compact fragrance-free sunscreen",
    "Smart casual walking shoes",
    "Printed reservation references",
    "Small day clutch or sling"
  ],
  Adventure: [
    "Broken-in trail shoes",
    "Packable rain shell",
    "Refillable insulated bottle",
    "Compact first-aid pouch",
    "Offline map download"
  ],
  Food: [
    "Comfortable market walking shoes",
    "Small cash envelope",
    "Hand sanitizer",
    "Light scarf or overshirt",
    "Reusable tasting notebook"
  ],
  Relaxed: [
    "Soft walking layers",
    "Paperback or travel journal",
    "Comfortable flat shoes",
    "Reusable tote",
    "Compact umbrella"
  ]
};

function buildCuratedItinerary(seed: CuratedItinerarySeed): Itinerary {
  return {
    tripName: seed.tripName,
    tagline: seed.tagline,
    destination: seed.destination,
    durationDays: seed.durationDays,
    travelStyle: seed.travelStyle,
    estimatedTotalCost: seed.estimatedTotalCost,
    highlights: [
      seed.spots[0].title,
      seed.spots[1].title,
      seed.localAngle,
      seed.paceAngle
    ],
    packingList: PACKING_BY_STYLE[seed.travelStyle],
    days: [
      {
        dayNumber: 1,
        title: seed.spots[0].title,
        accommodations: seed.lodging,
        tips: seed.transitNote,
        activities: [seed.spots[0]]
      },
      {
        dayNumber: 2,
        title: seed.spots[1].title,
        accommodations: seed.lodging,
        tips: seed.safety,
        activities: [seed.spots[1]]
      }
    ],
    budgetBreakdown: {
      stays: `Primary lodging share of ${seed.estimatedTotalCost}`,
      transport: "Local transfers and route access",
      food: "Daily meals and tasting stops",
      activities: "Guides, tickets, and booked experiences"
    },
    localSafetyAndPaceTips: seed.safety
  };
}

const ADDITIONAL_CURATED_ITINERARY_SEEDS: CuratedItinerarySeed[] = [
  {
    tripName: "Lisbon Azure Tram Lines",
    tagline: "Tile-lined hills, river viewpoints, and slow evenings through Alfama.",
    destination: "Lisbon, Portugal",
    durationDays: 3,
    travelStyle: "Relaxed",
    estimatedTotalCost: "EUR 980",
    lodging: "Memmo Alfama or a quiet Baixa design stay",
    localAngle: "Azulejo courtyards and fado rooms",
    paceAngle: "Gentle climbs with long cafe pauses",
    transitNote: "Use trams for steep sections, but walk downhill whenever the route opens to the river.",
    safety: "Cobblestones get slick after rain; wear grippy flats and keep bags close on packed trams.",
    spots: [
      {
        time: "10:00 AM",
        title: "Alfama Tile Walk",
        description: "Follow narrow lanes past blue tile facades, tiny balconies, and river glimpses between old stone walls.",
        locationName: "Miradouro de Santa Luzia",
        cost: "Free",
        latitude: 38.7117,
        longitude: -9.1308
      },
      {
        time: "04:30 PM",
        title: "Belem Custard and River Drift",
        description: "Slow the afternoon around warm custard tarts, maritime monuments, and a sunset walk along the Tagus.",
        locationName: "Pasteis de Belem",
        cost: "EUR 12",
        latitude: 38.6976,
        longitude: -9.2033
      }
    ]
  },
  {
    tripName: "Marrakech Atlas Doorways",
    tagline: "Medina craft lanes, desert-toned gardens, and a mountain-edge day in Berber country.",
    destination: "Marrakech & Atlas Foothills, Morocco",
    durationDays: 4,
    travelStyle: "Adventure",
    estimatedTotalCost: "USD 1,250",
    lodging: "Riad Kniza or a courtyard riad near the medina edge",
    localAngle: "Handmade leather, spice souks, and mountain tea houses",
    paceAngle: "High sensory days balanced with courtyard resets",
    transitNote: "Hire a vetted driver for the Atlas segment and start early before road heat builds.",
    safety: "Stay oriented by landmarks in the medina and confirm prices before accepting guide help.",
    spots: [
      {
        time: "09:00 AM",
        title: "Medina Craft Circuit",
        description: "Move through lantern stalls, dyers' lanes, and carved cedar workshops while the morning stays cool.",
        locationName: "Souk Semmarine",
        cost: "USD 25",
        latitude: 31.6262,
        longitude: -7.9891
      },
      {
        time: "08:30 AM",
        title: "Imlil Valley Mule Path",
        description: "Walk between walnut groves, red earth terraces, and cool mountain streams beneath Toubkal ridgelines.",
        locationName: "Imlil Village Trailhead",
        cost: "USD 75",
        latitude: 31.1354,
        longitude: -7.9181
      }
    ]
  },
  {
    tripName: "Seoul Neon Palace Table",
    tagline: "Royal courtyards, late-night barbecue alleys, and polished cafe culture in one city rhythm.",
    destination: "Seoul, South Korea",
    durationDays: 3,
    travelStyle: "Food",
    estimatedTotalCost: "KRW 1,350,000",
    lodging: "L'Escape Hotel or an Insadong boutique stay",
    localAngle: "Street snacks, palace gates, and tea-house interiors",
    paceAngle: "Daylight culture, night market energy",
    transitNote: "Use the subway between districts and keep a transit card loaded for quick transfers.",
    safety: "Late-night areas are busy; keep your group together and save hotel details in Korean.",
    spots: [
      {
        time: "10:00 AM",
        title: "Gyeongbokgung Gate Morning",
        description: "Watch formal gate rituals, then wander stone courtyards framed by mountain silhouettes.",
        locationName: "Gyeongbokgung Palace",
        cost: "KRW 3,000",
        latitude: 37.5796,
        longitude: 126.977
      },
      {
        time: "07:00 PM",
        title: "Mapo Barbecue Crawl",
        description: "Taste grilled pork, banchan, cold noodles, and bright local beer through a compact dinner route.",
        locationName: "Mapo Galmaegi Street",
        cost: "KRW 65,000",
        latitude: 37.5455,
        longitude: 126.948
      }
    ]
  },
  {
    tripName: "Patagonia Wind Corridor",
    tagline: "Glacier-blue lakes, granite towers, and long trails under fast-moving southern skies.",
    destination: "Torres del Paine, Chile",
    durationDays: 5,
    travelStyle: "Adventure",
    estimatedTotalCost: "USD 2,300",
    lodging: "Explora Patagonia or a serviced refugio route",
    localAngle: "Condor viewpoints and glacial lake crossings",
    paceAngle: "Early starts with weather windows",
    transitNote: "Keep transfers flexible; wind can delay boats and park road movement.",
    safety: "Layer aggressively and secure hats, poles, and pack covers in sudden gusts.",
    spots: [
      {
        time: "07:00 AM",
        title: "Base Towers Trail Push",
        description: "Climb through forest, moraine, and wind-cut rock to the famous granite tower viewpoint.",
        locationName: "Mirador Base Las Torres",
        cost: "USD 65",
        latitude: -50.9423,
        longitude: -72.9865
      },
      {
        time: "02:00 PM",
        title: "Grey Glacier Edge Cruise",
        description: "Move across steel-blue water toward floating ice and ridged glacier walls.",
        locationName: "Grey Lake Navigation Dock",
        cost: "USD 95",
        latitude: -51.1292,
        longitude: -73.1346
      }
    ]
  },
  {
    tripName: "Cape Town Table & Vine",
    tagline: "Ocean cliffs, mountain cable views, and vineyard lunches around the Cape.",
    destination: "Cape Town & Stellenbosch, South Africa",
    durationDays: 4,
    travelStyle: "Luxury",
    estimatedTotalCost: "USD 1,950",
    lodging: "The Silo Hotel or a Constantia vineyard retreat",
    localAngle: "Design hotels, coastal roads, and cellar-door tastings",
    paceAngle: "Scenic drives with slow lunches",
    transitNote: "Use private transfers for wine regions and keep coastal drives daylight-first.",
    safety: "Avoid isolated areas after dark and follow local guidance for beach and trail conditions.",
    spots: [
      {
        time: "09:30 AM",
        title: "Table Mountain Cable Rise",
        description: "Ascend above the city bowl for sweeping views of the Atlantic, harbor, and rugged ridgeline.",
        locationName: "Table Mountain Aerial Cableway",
        cost: "USD 30",
        latitude: -33.9489,
        longitude: 18.4021
      },
      {
        time: "12:30 PM",
        title: "Stellenbosch Cellar Lunch",
        description: "Pair Cape wines with garden-grown plates under old oak trees and mountain light.",
        locationName: "Delaire Graff Estate",
        cost: "USD 120",
        latitude: -33.9146,
        longitude: 18.9297
      }
    ]
  },
  {
    tripName: "Bali Rice Terrace Reset",
    tagline: "Quiet villas, water temples, and soft green walking loops through Ubud.",
    destination: "Ubud, Bali, Indonesia",
    durationDays: 4,
    travelStyle: "Relaxed",
    estimatedTotalCost: "USD 1,100",
    lodging: "Bisma Eight or a private jungle-edge villa",
    localAngle: "Rice terraces, temple pools, and slow wellness rituals",
    paceAngle: "Soft mornings and shaded afternoons",
    transitNote: "Use a driver between temples; roads are narrow and scooter traffic can be intense.",
    safety: "Dress modestly at temples and watch footing on wet terrace paths.",
    spots: [
      {
        time: "08:30 AM",
        title: "Tegalalang Terrace Loop",
        description: "Walk emerald steps as morning mist lifts from palms and irrigation channels.",
        locationName: "Tegalalang Rice Terrace",
        cost: "USD 5",
        latitude: -8.4312,
        longitude: 115.2793
      },
      {
        time: "03:30 PM",
        title: "Tirta Empul Water Temple",
        description: "Observe purification pools, stone shrines, and spring-fed courtyards in a calmer afternoon window.",
        locationName: "Tirta Empul Temple",
        cost: "USD 4",
        latitude: -8.4159,
        longitude: 115.3153
      }
    ]
  },
  {
    tripName: "New York Borough Bites",
    tagline: "Bagels, galleries, skyline walks, and neighborhood food rooms across the city.",
    destination: "New York City, USA",
    durationDays: 3,
    travelStyle: "Food",
    estimatedTotalCost: "USD 1,450",
    lodging: "The Ludlow or a calm Brooklyn boutique hotel",
    localAngle: "Counter-service classics and independent galleries",
    paceAngle: "Dense city days with subway jumps",
    transitNote: "Group stops by borough and use contactless subway payment to avoid ticket queues.",
    safety: "Keep valuables zipped in crowds and leave extra time for weekend subway changes.",
    spots: [
      {
        time: "09:00 AM",
        title: "Lower East Side Bagel Start",
        description: "Begin with dense bagels, smoked fish, and old storefront energy before gallery hopping.",
        locationName: "Russ & Daughters",
        cost: "USD 28",
        latitude: 40.7229,
        longitude: -73.9882
      },
      {
        time: "05:30 PM",
        title: "Brooklyn Bridge Sunset Walk",
        description: "Cross toward Manhattan as the skyline lights up and river traffic moves below.",
        locationName: "Brooklyn Bridge Promenade",
        cost: "Free",
        latitude: 40.7061,
        longitude: -73.9969
      }
    ]
  },
  {
    tripName: "Cairo Nile & Stone",
    tagline: "Ancient plateaus, museum halls, and warm river evenings in the Egyptian capital.",
    destination: "Cairo & Giza, Egypt",
    durationDays: 3,
    travelStyle: "Luxury",
    estimatedTotalCost: "USD 1,650",
    lodging: "Marriott Mena House or a Nile-view suite",
    localAngle: "Private Egyptology, river dining, and desert light",
    paceAngle: "Early monuments, cooler indoor afternoons",
    transitNote: "Use a licensed guide and private driver for the Giza and museum segments.",
    safety: "Carry water, sun cover, and small bills; confirm inclusions before camel or photo offers.",
    spots: [
      {
        time: "07:30 AM",
        title: "Giza Plateau Dawn",
        description: "Walk between limestone giants while the desert light stays soft and the crowds are thinner.",
        locationName: "Great Pyramid of Giza",
        cost: "USD 35",
        latitude: 29.9792,
        longitude: 31.1342
      },
      {
        time: "04:00 PM",
        title: "Nile Corniche Golden Hour",
        description: "Drift into the evening with river views, feluccas, and a refined dinner near the water.",
        locationName: "Garden City Nile Corniche",
        cost: "USD 90",
        latitude: 30.036,
        longitude: 31.2297
      }
    ]
  },
  {
    tripName: "Bangkok Midnight Markets",
    tagline: "Temple mornings, canal breezes, and late-night noodles under neon signs.",
    destination: "Bangkok, Thailand",
    durationDays: 3,
    travelStyle: "Food",
    estimatedTotalCost: "THB 42,000",
    lodging: "The Siam or a riverside boutique stay",
    localAngle: "Canal boats, temple courtyards, and wok-fired street food",
    paceAngle: "Heat-aware days, energetic nights",
    transitNote: "Use river boats for old-city movement and taxis after late food routes.",
    safety: "Hydrate often, dress modestly for temples, and choose busy food stalls with high turnover.",
    spots: [
      {
        time: "08:30 AM",
        title: "Grand Palace Temple Morning",
        description: "Move through gilded roofs, mosaic guardians, and quiet corners before the heat peaks.",
        locationName: "Grand Palace Bangkok",
        cost: "THB 500",
        latitude: 13.7500,
        longitude: 100.4913
      },
      {
        time: "08:00 PM",
        title: "Chinatown Noodle Run",
        description: "Taste peppery soups, grilled seafood, and mango sweets under bright Yaowarat lights.",
        locationName: "Yaowarat Road",
        cost: "THB 900",
        latitude: 13.7402,
        longitude: 100.5096
      }
    ]
  },
  {
    tripName: "Queenstown Alpine Rush",
    tagline: "Lake edges, canyon swings, and high-country trails in New Zealand's adventure capital.",
    destination: "Queenstown, New Zealand",
    durationDays: 4,
    travelStyle: "Adventure",
    estimatedTotalCost: "NZD 2,450",
    lodging: "Eichardt's Private Hotel or a lakefront lodge",
    localAngle: "Jet boats, ridgeline hikes, and clear alpine light",
    paceAngle: "Adrenaline blocks with recovery windows",
    transitNote: "Book activity shuttles ahead and leave buffer time for weather holds.",
    safety: "Follow operator briefings closely and pack layers even on bright days.",
    spots: [
      {
        time: "10:00 AM",
        title: "Shotover Canyon Jet",
        description: "Skim through narrow rock walls, fast water, and hard turns with mountain air in your face.",
        locationName: "Shotover Jet Base",
        cost: "NZD 169",
        latitude: -44.9864,
        longitude: 168.6619
      },
      {
        time: "08:00 AM",
        title: "Ben Lomond Saddle Climb",
        description: "Climb above the lake basin toward broad ridgeline views and open southern sky.",
        locationName: "Ben Lomond Track",
        cost: "Free",
        latitude: -45.0302,
        longitude: 168.6411
      }
    ]
  },
  {
    tripName: "Dubai Desert Silk",
    tagline: "Skyline suites, desert dining, and polished souk walks between old and new Dubai.",
    destination: "Dubai, UAE",
    durationDays: 3,
    travelStyle: "Luxury",
    estimatedTotalCost: "AED 7,900",
    lodging: "One&Only The Palm or a Downtown skyline suite",
    localAngle: "Gold souks, dune camps, and high-design dining",
    paceAngle: "Air-conditioned afternoons and desert evenings",
    transitNote: "Use private transfers for desert sections and metro or taxis for city links.",
    safety: "Respect dress expectations in older districts and protect against midday heat.",
    spots: [
      {
        time: "10:00 AM",
        title: "Old Dubai Souk Walk",
        description: "Cross the creek by abra and move through spice, gold, and textile lanes.",
        locationName: "Dubai Gold Souk",
        cost: "AED 30",
        latitude: 25.2695,
        longitude: 55.2962
      },
      {
        time: "04:30 PM",
        title: "Private Dune Dinner",
        description: "Watch the city fall away into copper dunes before a quiet camp dinner under stars.",
        locationName: "Dubai Desert Conservation Reserve",
        cost: "AED 650",
        latitude: 24.8206,
        longitude: 55.6629
      }
    ]
  },
  {
    tripName: "Mexico City Market Canvas",
    tagline: "Museum courtyards, floating gardens, and layered street food in a highland capital.",
    destination: "Mexico City, Mexico",
    durationDays: 4,
    travelStyle: "Food",
    estimatedTotalCost: "MXN 29,000",
    lodging: "Nima Local House or a Roma Norte design hotel",
    localAngle: "Masa, murals, and neighborhood markets",
    paceAngle: "Museum mornings, food-led afternoons",
    transitNote: "Use ride-hailing between distant neighborhoods and avoid overpacking one day.",
    safety: "Choose official transport at night and keep altitude hydration steady.",
    spots: [
      {
        time: "09:30 AM",
        title: "Frida Courtyard Morning",
        description: "Move through cobalt rooms, garden paths, and intimate artist archives in Coyoacan.",
        locationName: "Museo Frida Kahlo",
        cost: "MXN 320",
        latitude: 19.3552,
        longitude: -99.1626
      },
      {
        time: "01:00 PM",
        title: "Roma Taco and Mezcal Route",
        description: "Taste al pastor, seafood tostadas, and small-batch mezcal across a walkable food corridor.",
        locationName: "Roma Norte",
        cost: "MXN 900",
        latitude: 19.4149,
        longitude: -99.1631
      }
    ]
  },
  {
    tripName: "Santorini Caldera Quiet",
    tagline: "Whitewashed lanes, volcanic wine, and slow cliffside light over the Aegean.",
    destination: "Santorini, Greece",
    durationDays: 3,
    travelStyle: "Relaxed",
    estimatedTotalCost: "EUR 1,650",
    lodging: "Canaves Oia Suites or a calm Imerovigli cave stay",
    localAngle: "Caldera views, volcanic vineyards, and village lanes",
    paceAngle: "Early walks and sunset reservations",
    transitNote: "Use booked transfers between villages; parking can be limited in high season.",
    safety: "Wear stable shoes on polished steps and carry water during exposed cliff walks.",
    spots: [
      {
        time: "08:30 AM",
        title: "Oia Blue Dome Walk",
        description: "Trace quiet lanes before crowds arrive, moving between white walls and deep blue church domes.",
        locationName: "Oia Castle Viewpoint",
        cost: "Free",
        latitude: 36.4618,
        longitude: 25.3753
      },
      {
        time: "04:00 PM",
        title: "Volcanic Vineyard Tasting",
        description: "Taste mineral white wines grown low to the ground against wind and sea glare.",
        locationName: "Santo Wines",
        cost: "EUR 45",
        latitude: 36.3824,
        longitude: 25.4357
      }
    ]
  },
  {
    tripName: "Norway Fjord Glass",
    tagline: "Railways, waterfall mist, and mirrored fjord water through western Norway.",
    destination: "Bergen & Flam, Norway",
    durationDays: 4,
    travelStyle: "Adventure",
    estimatedTotalCost: "NOK 22,000",
    lodging: "Opus XVI Bergen or a Flam fjord lodge",
    localAngle: "Scenic rail, cold-water views, and steep valley walls",
    paceAngle: "Weather-led movement with calm evenings",
    transitNote: "Reserve rail and ferry legs together, then keep arrival buffers generous.",
    safety: "Pack rain gear even under clear forecasts and stay behind marked waterfall barriers.",
    spots: [
      {
        time: "09:00 AM",
        title: "Flam Railway Descent",
        description: "Ride through tunnels, cliffs, and waterfall spray on one of Norway's classic rail lines.",
        locationName: "Flam Railway Station",
        cost: "NOK 680",
        latitude: 60.861,
        longitude: 7.1134
      },
      {
        time: "01:30 PM",
        title: "Naeroyfjord Silent Cruise",
        description: "Float beneath sheer rock faces and small farms clinging to the fjord edge.",
        locationName: "Naeroyfjord Cruise Pier",
        cost: "NOK 890",
        latitude: 60.9082,
        longitude: 6.8775
      }
    ]
  },
  {
    tripName: "Singapore Garden Circuit",
    tagline: "Sky gardens, hawker centers, and immaculate waterfront walks in a compact city-state.",
    destination: "Singapore",
    durationDays: 3,
    travelStyle: "Food",
    estimatedTotalCost: "SGD 1,650",
    lodging: "The Warehouse Hotel or a Marina Bay design stay",
    localAngle: "Hawker stalls, garden domes, and skyline paths",
    paceAngle: "Efficient transit with plenty of shade breaks",
    transitNote: "Use MRT links and group food stops by neighborhood to avoid backtracking.",
    safety: "Heat and humidity are the main pacing challenge; hydrate and use shaded crossings.",
    spots: [
      {
        time: "11:00 AM",
        title: "Maxwell Hawker Lunch",
        description: "Build a plate-by-plate tasting route through chicken rice, laksa, rojak, and sugarcane juice.",
        locationName: "Maxwell Food Centre",
        cost: "SGD 28",
        latitude: 1.2803,
        longitude: 103.8448
      },
      {
        time: "06:30 PM",
        title: "Supertree Garden Glow",
        description: "Walk elevated paths as the gardens shift into a precise evening light show.",
        locationName: "Gardens by the Bay",
        cost: "SGD 35",
        latitude: 1.2816,
        longitude: 103.8636
      }
    ]
  },
  {
    tripName: "Buenos Aires Tango Table",
    tagline: "Bookshops, steak houses, and late tango rooms in a city made for long nights.",
    destination: "Buenos Aires, Argentina",
    durationDays: 3,
    travelStyle: "Food",
    estimatedTotalCost: "USD 1,050",
    lodging: "Legado Mitico or a Palermo Soho townhouse",
    localAngle: "Parrilla dinners, old cafes, and dance-floor culture",
    paceAngle: "Slow mornings after late shows",
    transitNote: "Use taxis or ride-hailing after evening tango venues and keep daytime walks district-based.",
    safety: "Keep phones discreet outdoors and watch for uneven sidewalks in older neighborhoods.",
    spots: [
      {
        time: "11:00 AM",
        title: "Recoleta Bookshop Drift",
        description: "Wander grand book halls, marble streets, and cafe corners before lunch.",
        locationName: "El Ateneo Grand Splendid",
        cost: "Free",
        latitude: -34.5945,
        longitude: -58.3945
      },
      {
        time: "09:30 PM",
        title: "San Telmo Tango Night",
        description: "Settle into a small tango room with Malbec, close tables, and live bandoneon.",
        locationName: "Plaza Dorrego",
        cost: "USD 75",
        latitude: -34.6214,
        longitude: -58.3712
      }
    ]
  },
  {
    tripName: "Prague Velvet Spires",
    tagline: "Castle lanes, quiet beer halls, and amber bridges over the Vltava.",
    destination: "Prague, Czech Republic",
    durationDays: 3,
    travelStyle: "Relaxed",
    estimatedTotalCost: "CZK 32,000",
    lodging: "Hotel BoHo or a Mala Strana heritage stay",
    localAngle: "Gothic silhouettes, old libraries, and cellar taverns",
    paceAngle: "Unhurried walking with early bridge starts",
    transitNote: "Use trams for hill climbs and walk downhill into the old town.",
    safety: "Crowded bridge approaches attract pickpockets; keep bags zipped and front-facing.",
    spots: [
      {
        time: "07:30 AM",
        title: "Charles Bridge Dawn",
        description: "Cross before the crowds while statues, river mist, and red roofs soften into morning.",
        locationName: "Charles Bridge",
        cost: "Free",
        latitude: 50.0865,
        longitude: 14.4114
      },
      {
        time: "02:00 PM",
        title: "Strahov Library Quiet",
        description: "Step into ornate reading halls, frescoed ceilings, and old-world academic calm.",
        locationName: "Strahov Monastery Library",
        cost: "CZK 150",
        latitude: 50.086,
        longitude: 14.3899
      }
    ]
  },
  {
    tripName: "Vancouver Rainforest Edge",
    tagline: "Harbor paths, cedar bridges, and mountain air minutes from downtown.",
    destination: "Vancouver, Canada",
    durationDays: 3,
    travelStyle: "Adventure",
    estimatedTotalCost: "CAD 1,550",
    lodging: "Fairmont Pacific Rim or a Coal Harbour stay",
    localAngle: "Seawall cycling, cedar forest, and coastal food",
    paceAngle: "Active days with easy city recovery",
    transitNote: "Use bikes around the seawall and shuttles for mountain access.",
    safety: "Rain changes trail footing quickly; carry a shell and check bridge or trail closures.",
    spots: [
      {
        time: "09:00 AM",
        title: "Stanley Park Seawall Ride",
        description: "Cycle past forest, beaches, harbor views, and the city skyline in a clean coastal loop.",
        locationName: "Stanley Park Seawall",
        cost: "CAD 35",
        latitude: 49.3043,
        longitude: -123.1443
      },
      {
        time: "01:00 PM",
        title: "Capilano Cedar Crossing",
        description: "Walk suspension bridges and cedar platforms above a deep green canyon.",
        locationName: "Capilano Suspension Bridge",
        cost: "CAD 70",
        latitude: 49.3429,
        longitude: -123.1149
      }
    ]
  },
  {
    tripName: "Hanoi Lantern Broth",
    tagline: "Old Quarter breakfasts, lake walks, and train-street cafe corners.",
    destination: "Hanoi, Vietnam",
    durationDays: 3,
    travelStyle: "Food",
    estimatedTotalCost: "VND 21,000,000",
    lodging: "Sofitel Legend Metropole or an Old Quarter boutique stay",
    localAngle: "Pho, egg coffee, lakeside calm, and market lanes",
    paceAngle: "Early food starts before humid afternoons",
    transitNote: "Walk the Old Quarter in short loops and use taxis between wider districts.",
    safety: "Cross streets steadily and predictably; scooter flow moves around you.",
    spots: [
      {
        time: "07:30 AM",
        title: "Old Quarter Pho Start",
        description: "Begin with steaming broth, herbs, and a low plastic stool as the district wakes up.",
        locationName: "Pho Gia Truyen Bat Dan",
        cost: "VND 80,000",
        latitude: 21.0341,
        longitude: 105.8462
      },
      {
        time: "04:00 PM",
        title: "Hoan Kiem Coffee Pause",
        description: "Try egg coffee and slow lake views before the evening street-food loop begins.",
        locationName: "Hoan Kiem Lake",
        cost: "VND 120,000",
        latitude: 21.0287,
        longitude: 105.8524
      }
    ]
  },
  {
    tripName: "Vienna Salon Waltz",
    tagline: "Imperial rooms, coffee houses, and evening music in an elegant city tempo.",
    destination: "Vienna, Austria",
    durationDays: 3,
    travelStyle: "Luxury",
    estimatedTotalCost: "EUR 1,750",
    lodging: "Hotel Sacher Wien or a Ringstrasse suite",
    localAngle: "Grand cafes, palaces, and chamber music",
    paceAngle: "Refined days with formal evening plans",
    transitNote: "Use trams along the Ring and reserve evening seats well ahead.",
    safety: "Dress warmly for winter evenings and validate transit passes before boarding.",
    spots: [
      {
        time: "10:00 AM",
        title: "Schonbrunn Palace Rooms",
        description: "Move through gilded halls, garden axes, and Habsburg-era detail with a slow audio route.",
        locationName: "Schonbrunn Palace",
        cost: "EUR 32",
        latitude: 48.1845,
        longitude: 16.3122
      },
      {
        time: "07:30 PM",
        title: "Golden Hall Concert",
        description: "End the day with polished acoustics, formal seating, and a luminous concert hall glow.",
        locationName: "Musikverein",
        cost: "EUR 95",
        latitude: 48.2004,
        longitude: 16.3722
      }
    ]
  },
  {
    tripName: "Athens Marble & Mezze",
    tagline: "Ancient stone, market plates, and hilltop sunsets across the Greek capital.",
    destination: "Athens, Greece",
    durationDays: 3,
    travelStyle: "Food",
    estimatedTotalCost: "EUR 1,050",
    lodging: "Ergon House or a Plaka rooftop stay",
    localAngle: "Archaeology, tavernas, and olive-oil tastings",
    paceAngle: "Early ruins, late dinners",
    transitNote: "Start the Acropolis early, then keep food stops shaded and central.",
    safety: "Carry sun protection and stay alert in packed metro areas.",
    spots: [
      {
        time: "08:00 AM",
        title: "Acropolis Morning Climb",
        description: "Reach marble terraces before heat builds and look across the city from temple height.",
        locationName: "Acropolis of Athens",
        cost: "EUR 20",
        latitude: 37.9715,
        longitude: 23.7257
      },
      {
        time: "07:30 PM",
        title: "Psiri Mezze Evening",
        description: "Share grilled halloumi, tomato fritters, lamb, herbs, and cold white wine in a lively lane.",
        locationName: "Psiri District",
        cost: "EUR 55",
        latitude: 37.9785,
        longitude: 23.7238
      }
    ]
  },
  {
    tripName: "Hong Kong Harbor Layers",
    tagline: "Peak views, neon ferries, dim sum, and dense vertical neighborhoods.",
    destination: "Hong Kong",
    durationDays: 3,
    travelStyle: "Luxury",
    estimatedTotalCost: "HKD 18,500",
    lodging: "The Upper House or a harbor-view suite",
    localAngle: "Dim sum, skyline ferries, and polished hotel bars",
    paceAngle: "Efficient transit with high-energy nights",
    transitNote: "Use the MTR for speed and the Star Ferry for atmosphere between harbor sides.",
    safety: "Typhoon signals can change plans quickly; monitor local alerts during storm season.",
    spots: [
      {
        time: "10:00 AM",
        title: "Victoria Peak Rise",
        description: "Climb above the towers for a compressed view of harbor, hills, and dense city geometry.",
        locationName: "The Peak Tower",
        cost: "HKD 99",
        latitude: 22.2711,
        longitude: 114.1499
      },
      {
        time: "01:00 PM",
        title: "Central Dim Sum Table",
        description: "Settle into steamed baskets, roast meats, jasmine tea, and a refined lunch rhythm.",
        locationName: "Central District",
        cost: "HKD 480",
        latitude: 22.2819,
        longitude: 114.1587
      }
    ]
  },
  {
    tripName: "Edinburgh Stone & Story",
    tagline: "Castle rock, old closes, whisky rooms, and moody hilltop views.",
    destination: "Edinburgh, Scotland",
    durationDays: 3,
    travelStyle: "Relaxed",
    estimatedTotalCost: "GBP 1,050",
    lodging: "The Witchery or a New Town townhouse hotel",
    localAngle: "Old-town stories, whisky tasting, and literary corners",
    paceAngle: "Compact walks with warm indoor pauses",
    transitNote: "Walk the Royal Mile downhill and use buses or taxis for weather breaks.",
    safety: "Stone steps can be slippery; wear stable shoes and layer against sudden wind.",
    spots: [
      {
        time: "10:00 AM",
        title: "Castle Rock Approach",
        description: "Move up the volcanic ridge toward battlements, city views, and centuries of layered history.",
        locationName: "Edinburgh Castle",
        cost: "GBP 22",
        latitude: 55.9486,
        longitude: -3.1999
      },
      {
        time: "04:30 PM",
        title: "Calton Hill Soft Light",
        description: "Watch the city fold into evening from monuments, grass paths, and sea-facing views.",
        locationName: "Calton Hill",
        cost: "Free",
        latitude: 55.9555,
        longitude: -3.1827
      }
    ]
  },
  {
    tripName: "Rio Coastline Pulse",
    tagline: "Sugarloaf views, beach kiosks, samba rooms, and green mountain edges.",
    destination: "Rio de Janeiro, Brazil",
    durationDays: 4,
    travelStyle: "Adventure",
    estimatedTotalCost: "BRL 8,200",
    lodging: "Emiliano Rio or a Leblon beach stay",
    localAngle: "Mountain views, beach culture, and samba evenings",
    paceAngle: "Early outdoor starts, late music nights",
    transitNote: "Use trusted drivers between major sights and avoid long isolated beach walks after dark.",
    safety: "Leave jewelry at the hotel and follow local advice about safe zones and timing.",
    spots: [
      {
        time: "08:30 AM",
        title: "Sugarloaf Cable Morning",
        description: "Ride above blue bays and forested slopes for a clean view of Rio's coastline.",
        locationName: "Sugarloaf Mountain",
        cost: "BRL 185",
        latitude: -22.9486,
        longitude: -43.1565
      },
      {
        time: "07:30 PM",
        title: "Lapa Samba Circuit",
        description: "Follow live percussion, dance floors, and old arches through a classic Rio night.",
        locationName: "Lapa Arches",
        cost: "BRL 120",
        latitude: -22.9122,
        longitude: -43.1796
      }
    ]
  },
  {
    tripName: "Tokyo Quiet Tech Loop",
    tagline: "Design stores, garden calm, and precise dining across the city's softer side.",
    destination: "Tokyo, Japan",
    durationDays: 4,
    travelStyle: "Luxury",
    estimatedTotalCost: "JPY 420,000",
    lodging: "Aman Tokyo or a calm Aoyama design hotel",
    localAngle: "Minimalist retail, gardens, and omakase counters",
    paceAngle: "Precise bookings with quiet reset spaces",
    transitNote: "Use rail for most movement and keep restaurant addresses saved in Japanese.",
    safety: "Mind train etiquette and allow time to navigate large station transfers.",
    spots: [
      {
        time: "09:00 AM",
        title: "Meiji Shrine Forest Walk",
        description: "Step into cedar shade, broad gravel paths, and a quiet ritual atmosphere near Harajuku.",
        locationName: "Meiji Jingu",
        cost: "Free",
        latitude: 35.6764,
        longitude: 139.6993
      },
      {
        time: "07:00 PM",
        title: "Ginza Omakase Counter",
        description: "Settle into a focused tasting sequence with rice warmth, precise knife work, and polished service.",
        locationName: "Ginza District",
        cost: "JPY 38,000",
        latitude: 35.6717,
        longitude: 139.765
      }
    ]
  },
  {
    tripName: "Reykjavik Aurora Ease",
    tagline: "Lava fields, thermal water, and slow northern nights built around sky watching.",
    destination: "Reykjavik, Iceland",
    durationDays: 4,
    travelStyle: "Relaxed",
    estimatedTotalCost: "USD 1,900",
    lodging: "The Reykjavik EDITION or a quiet harbor stay",
    localAngle: "Thermal pools, lava walks, and aurora windows",
    paceAngle: "Late nights balanced with slow mornings",
    transitNote: "Use guided aurora transfers; conditions change too quickly for rigid self-plans.",
    safety: "Roads and sidewalks can ice over; use traction aids in winter and follow weather alerts.",
    spots: [
      {
        time: "11:00 AM",
        title: "Sky Lagoon Thermal Reset",
        description: "Ease into warm mineral water, sea air, and a calm ritual after a late aurora night.",
        locationName: "Sky Lagoon",
        cost: "USD 90",
        latitude: 64.1224,
        longitude: -21.9243
      },
      {
        time: "09:30 PM",
        title: "Aurora Field Watch",
        description: "Leave city glow for dark horizons, hot drinks, and patient northern-light watching.",
        locationName: "Thingvellir National Park",
        cost: "USD 110",
        latitude: 64.2559,
        longitude: -21.1295
      }
    ]
  },
  {
    tripName: "Copenhagen Hygge Harbors",
    tagline: "Design museums, bakery mornings, and clean harbor air in a gentle Nordic rhythm.",
    destination: "Copenhagen, Denmark",
    durationDays: 3,
    travelStyle: "Relaxed",
    estimatedTotalCost: "DKK 10,500",
    lodging: "Hotel Sanders or a Christianshavn apartment hotel",
    localAngle: "Bakeries, design shops, and harbor swimming culture",
    paceAngle: "Bike-first days with cozy indoor pauses",
    transitNote: "Rent bikes only if comfortable in city lanes; otherwise combine metro and walking.",
    safety: "Watch bike traffic before stepping off curbs and dress for wind near the water.",
    spots: [
      {
        time: "09:00 AM",
        title: "Nyhavn Bakery Walk",
        description: "Begin with cardamom buns, colorful harbor facades, and a slow walk along old boats.",
        locationName: "Nyhavn",
        cost: "DKK 120",
        latitude: 55.6798,
        longitude: 12.591
      },
      {
        time: "01:00 PM",
        title: "Danish Design Museum Pause",
        description: "Explore furniture, ceramics, textiles, and calm courtyards with a clean Nordic lens.",
        locationName: "Designmuseum Danmark",
        cost: "DKK 130",
        latitude: 55.6854,
        longitude: 12.5914
      }
    ]
  },
  {
    tripName: "Istanbul Bosphorus Spice",
    tagline: "Mosque courtyards, ferry crossings, and layered food markets between continents.",
    destination: "Istanbul, Turkiye",
    durationDays: 4,
    travelStyle: "Food",
    estimatedTotalCost: "TRY 46,000",
    lodging: "Soho House Istanbul or a Sultanahmet heritage stay",
    localAngle: "Spices, ferries, tea gardens, and meze tables",
    paceAngle: "Historic mornings, waterside evenings",
    transitNote: "Use ferries between European and Asian sides; they are scenic and efficient.",
    safety: "Dress respectfully for mosques and protect valuables in dense market lanes.",
    spots: [
      {
        time: "09:00 AM",
        title: "Suleymaniye Courtyard Morning",
        description: "Step into balanced stone, quiet carpets, and hilltop views over the Golden Horn.",
        locationName: "Suleymaniye Mosque",
        cost: "Free",
        latitude: 41.0162,
        longitude: 28.9638
      },
      {
        time: "02:00 PM",
        title: "Kadikoy Market Tasting",
        description: "Taste pickles, olives, fresh bread, coffee, and meze across the Asian-side market lanes.",
        locationName: "Kadikoy Market",
        cost: "TRY 850",
        latitude: 40.9903,
        longitude: 29.027
      }
    ]
  },
  {
    tripName: "Lima Pacific Pantry",
    tagline: "Ceviche counters, pre-Columbian galleries, and sunset cliffs over the Pacific.",
    destination: "Lima, Peru",
    durationDays: 3,
    travelStyle: "Food",
    estimatedTotalCost: "USD 1,250",
    lodging: "Hotel B Barranco or a Miraflores ocean stay",
    localAngle: "Ceviche, cacao, galleries, and coastal parks",
    paceAngle: "Lunch-focused days with soft evenings",
    transitNote: "Use ride-hailing between districts and keep dinner bookings confirmed.",
    safety: "Stay aware around cliffs and keep valuables low-profile in busy districts.",
    spots: [
      {
        time: "12:30 PM",
        title: "Miraflores Ceviche Lunch",
        description: "Taste bright citrus, cold seafood, corn, and sweet potato in the city's signature lunch hour.",
        locationName: "La Mar Cebicheria",
        cost: "USD 55",
        latitude: -12.1137,
        longitude: -77.0365
      },
      {
        time: "05:30 PM",
        title: "Barranco Bridge Sunset",
        description: "Walk murals, galleries, and the old bridge as the Pacific air cools the district.",
        locationName: "Puente de los Suspiros",
        cost: "Free",
        latitude: -12.1497,
        longitude: -77.0218
      }
    ]
  },
  {
    tripName: "Zanzibar Spice Current",
    tagline: "Stone Town lanes, dhow light, spice farms, and bright Indian Ocean edges.",
    destination: "Zanzibar, Tanzania",
    durationDays: 4,
    travelStyle: "Relaxed",
    estimatedTotalCost: "USD 1,450",
    lodging: "Park Hyatt Zanzibar or a Nungwi beach hideaway",
    localAngle: "Spice farms, carved doors, and dhow sunsets",
    paceAngle: "Slow coastal days with shaded town walks",
    transitNote: "Use arranged transfers between Stone Town and beach areas; roads can be slow.",
    safety: "Dress modestly in town and check tide timing before swimming or reef walking.",
    spots: [
      {
        time: "09:30 AM",
        title: "Stone Town Door Walk",
        description: "Follow carved wooden doors, coral-stone lanes, and shaded market corners.",
        locationName: "Stone Town",
        cost: "USD 20",
        latitude: -6.1622,
        longitude: 39.1921
      },
      {
        time: "04:30 PM",
        title: "Nungwi Dhow Sunset",
        description: "Watch late light hit the water from a beach edge known for gentle evening color.",
        locationName: "Nungwi Beach",
        cost: "USD 35",
        latitude: -5.7263,
        longitude: 39.2987
      }
    ]
  },
  {
    tripName: "Barcelona Modernist Tapas",
    tagline: "Gaudi forms, market counters, and sea-air evenings through Catalonia's capital.",
    destination: "Barcelona, Spain",
    durationDays: 3,
    travelStyle: "Food",
    estimatedTotalCost: "EUR 1,250",
    lodging: "Hotel Neri or an Eixample design stay",
    localAngle: "Modernist architecture, vermouth, and tapas bars",
    paceAngle: "Timed museum entries with late dinners",
    transitNote: "Reserve major Gaudi sites ahead and use metro links between neighborhoods.",
    safety: "Las Ramblas and metro stations require strong pickpocket awareness.",
    spots: [
      {
        time: "09:30 AM",
        title: "Sagrada Familia Light Study",
        description: "Watch colored glass and branching columns transform the basilica interior.",
        locationName: "Sagrada Familia",
        cost: "EUR 26",
        latitude: 41.4036,
        longitude: 2.1744
      },
      {
        time: "07:00 PM",
        title: "El Born Tapas Drift",
        description: "Move through small plates, vermouth, anchovies, tomato bread, and narrow medieval streets.",
        locationName: "El Born",
        cost: "EUR 55",
        latitude: 41.3853,
        longitude: 2.1834
      }
    ]
  },
  {
    tripName: "Sedona Red Rock Reset",
    tagline: "Desert trails, sandstone light, and spa recovery under wide Arizona skies.",
    destination: "Sedona, Arizona, USA",
    durationDays: 3,
    travelStyle: "Relaxed",
    estimatedTotalCost: "USD 1,250",
    lodging: "L'Auberge de Sedona or a creekside casita",
    localAngle: "Red-rock hikes, stargazing, and quiet spa treatments",
    paceAngle: "Cool morning walks and restful afternoons",
    transitNote: "Drive trailheads early to secure parking and avoid midday heat.",
    safety: "Carry more water than expected and avoid exposed trails during heat spikes.",
    spots: [
      {
        time: "07:00 AM",
        title: "Cathedral Rock Morning",
        description: "Climb toward red sandstone shelves while shadows still keep the rock cool.",
        locationName: "Cathedral Rock Trailhead",
        cost: "USD 5",
        latitude: 34.8201,
        longitude: -111.7939
      },
      {
        time: "08:30 PM",
        title: "Desert Star Pause",
        description: "End with dark-sky watching, quiet air, and silhouettes of buttes around town.",
        locationName: "Airport Mesa Viewpoint",
        cost: "Free",
        latitude: 34.8553,
        longitude: -111.7793
      }
    ]
  },
  {
    tripName: "Budapest Thermal Bridges",
    tagline: "Bathhouses, river bridges, and cafe rooms along the Danube.",
    destination: "Budapest, Hungary",
    durationDays: 3,
    travelStyle: "Relaxed",
    estimatedTotalCost: "HUF 390,000",
    lodging: "Aria Hotel Budapest or a Danube-view boutique stay",
    localAngle: "Thermal pools, old cafes, and river architecture",
    paceAngle: "Soak-and-stroll days",
    transitNote: "Use trams along the river and walk bridge crossings when weather is clear.",
    safety: "Bring sandals for baths and keep valuables secured in changing areas.",
    spots: [
      {
        time: "10:00 AM",
        title: "Szechenyi Thermal Soak",
        description: "Ease into mineral pools, yellow courtyards, steam rooms, and old spa rituals.",
        locationName: "Szechenyi Thermal Bath",
        cost: "HUF 12,000",
        latitude: 47.5189,
        longitude: 19.0813
      },
      {
        time: "05:00 PM",
        title: "Chain Bridge Danube Walk",
        description: "Cross between Buda and Pest as the river catches evening light and parliament glows.",
        locationName: "Szechenyi Chain Bridge",
        cost: "Free",
        latitude: 47.4989,
        longitude: 19.0437
      }
    ]
  },
  {
    tripName: "Petra Rose Canyon",
    tagline: "Desert roads, carved stone, and starlit camps around Jordan's ancient wonder.",
    destination: "Petra & Wadi Rum, Jordan",
    durationDays: 4,
    travelStyle: "Adventure",
    estimatedTotalCost: "USD 1,650",
    lodging: "Movenpick Petra plus a Wadi Rum luxury camp",
    localAngle: "Canyon walks, Bedouin tea, and desert night skies",
    paceAngle: "Early archaeological starts with cool evening camp time",
    transitNote: "Use a private driver between Petra and Wadi Rum to keep timing predictable.",
    safety: "Wear sun cover, carry cash for local services, and avoid scrambling off marked routes.",
    spots: [
      {
        time: "06:30 AM",
        title: "Petra Siq Approach",
        description: "Walk the narrowing canyon until the rose-stone Treasury appears in morning light.",
        locationName: "Petra Treasury",
        cost: "JOD 50",
        latitude: 30.3285,
        longitude: 35.4444
      },
      {
        time: "04:30 PM",
        title: "Wadi Rum Jeep Ridge",
        description: "Ride between sandstone cliffs, red dunes, and wide desert silence before camp dinner.",
        locationName: "Wadi Rum Protected Area",
        cost: "JOD 60",
        latitude: 29.5765,
        longitude: 35.4208
      }
    ]
  },
  {
    tripName: "Oaxaca Mole & Mezcal",
    tagline: "Market breakfasts, Zapotec ruins, and smoky agave evenings in southern Mexico.",
    destination: "Oaxaca City, Mexico",
    durationDays: 3,
    travelStyle: "Food",
    estimatedTotalCost: "MXN 24,000",
    lodging: "Casa Antonieta or a quiet Centro courtyard hotel",
    localAngle: "Mole, mezcal, textiles, and archaeological views",
    paceAngle: "Market mornings with slow tasting afternoons",
    transitNote: "Use a driver for Monte Alban and mezcal villages outside the city.",
    safety: "Hydrate at altitude and confirm mezcal tastings include return transport.",
    spots: [
      {
        time: "09:00 AM",
        title: "Mercado Mole Breakfast",
        description: "Taste tamales, chocolate, fresh bread, and layered moles through a compact market walk.",
        locationName: "Mercado 20 de Noviembre",
        cost: "MXN 350",
        latitude: 17.0582,
        longitude: -96.7275
      },
      {
        time: "03:00 PM",
        title: "Monte Alban Hilltop",
        description: "Walk broad stone platforms above the valley where Zapotec geometry meets big sky.",
        locationName: "Monte Alban",
        cost: "MXN 95",
        latitude: 17.0439,
        longitude: -96.7674
      }
    ]
  },
  {
    tripName: "Melbourne Laneway Espresso",
    tagline: "Street art, coffee counters, coastal drives, and polished neighborhood dining.",
    destination: "Melbourne, Australia",
    durationDays: 3,
    travelStyle: "Food",
    estimatedTotalCost: "AUD 1,650",
    lodging: "United Places Botanic Gardens or a CBD design hotel",
    localAngle: "Laneway coffee, galleries, and coastal day trips",
    paceAngle: "Cafe-led mornings and flexible afternoons",
    transitNote: "Use trams in the free central zone and book coastal drives as a full-day commitment.",
    safety: "Weather can turn quickly; keep a layer even in warmer months.",
    spots: [
      {
        time: "08:30 AM",
        title: "Laneway Coffee Crawl",
        description: "Move through espresso bars, murals, pastry counters, and narrow urban lanes.",
        locationName: "Degraves Street",
        cost: "AUD 35",
        latitude: -37.8176,
        longitude: 144.965
      },
      {
        time: "02:00 PM",
        title: "NGV Design Pause",
        description: "Reset indoors with contemporary art, polished galleries, and a calm city pause.",
        locationName: "National Gallery of Victoria",
        cost: "Free",
        latitude: -37.8226,
        longitude: 144.9689
      }
    ]
  },
  {
    tripName: "Munich Alpine Beerline",
    tagline: "Old beer halls, palace gardens, and mountain lakes within reach of the city.",
    destination: "Munich & Bavarian Alps, Germany",
    durationDays: 4,
    travelStyle: "Food",
    estimatedTotalCost: "EUR 1,350",
    lodging: "Cortiina Hotel or a quiet Altstadt stay",
    localAngle: "Beer halls, market plates, and alpine scenery",
    paceAngle: "City tastings with one mountain escape",
    transitNote: "Use regional trains for lake days and keep beer hall evenings close to lodging.",
    safety: "Check train schedules before alpine returns and pace alcohol with full meals.",
    spots: [
      {
        time: "11:30 AM",
        title: "Viktualienmarkt Lunch",
        description: "Build a market meal of sausages, pretzels, cheese, pickles, and local beer garden tables.",
        locationName: "Viktualienmarkt",
        cost: "EUR 35",
        latitude: 48.1351,
        longitude: 11.5766
      },
      {
        time: "09:00 AM",
        title: "Eibsee Alpine Lake Walk",
        description: "Circle turquoise water below Zugspitze with forest shade and mountain reflections.",
        locationName: "Eibsee",
        cost: "EUR 20",
        latitude: 47.2459,
        longitude: 10.9722
      }
    ]
  },
  {
    tripName: "Kerala Backwater Slowboat",
    tagline: "Houseboats, spice gardens, coconut canals, and soft coastal cooking.",
    destination: "Alleppey & Kumarakom, India",
    durationDays: 3,
    travelStyle: "Relaxed",
    estimatedTotalCost: "INR 68,000",
    lodging: "CGH Earth Coconut Lagoon or a private houseboat cabin",
    localAngle: "Backwater canals, spice gardens, and seafood meals",
    paceAngle: "Slow cruising with early humidity-aware starts",
    transitNote: "Arrange transfers from Kochi ahead and keep boat boarding times confirmed.",
    safety: "Use mosquito protection and avoid swimming in unfamiliar canals.",
    spots: [
      {
        time: "11:00 AM",
        title: "Alleppey Houseboat Drift",
        description: "Glide past coconut palms, village edges, and water birds from a shaded deck.",
        locationName: "Alappuzha Backwaters",
        cost: "INR 18,000",
        latitude: 9.4981,
        longitude: 76.3388
      },
      {
        time: "08:00 AM",
        title: "Kumarakom Bird Morning",
        description: "Walk quiet wetland paths while egrets, kingfishers, and lake air set the morning tone.",
        locationName: "Kumarakom Bird Sanctuary",
        cost: "INR 150",
        latitude: 9.6175,
        longitude: 76.4258
      }
    ]
  },
  {
    tripName: "Napa Cellar Gold",
    tagline: "Vineyard lunches, cave tastings, and slow valley roads north of San Francisco.",
    destination: "Napa Valley, California, USA",
    durationDays: 3,
    travelStyle: "Luxury",
    estimatedTotalCost: "USD 2,100",
    lodging: "Auberge du Soleil or a Yountville resort stay",
    localAngle: "Cellar doors, chef menus, and golden hill views",
    paceAngle: "Reservation-led days with no rushed tastings",
    transitNote: "Book a driver for tasting days; do not self-drive between wineries after tastings.",
    safety: "Hydrate between pours and confirm cancellation policies for prepaid reservations.",
    spots: [
      {
        time: "10:30 AM",
        title: "Cave Cellar Tasting",
        description: "Step into cool stone, barrel rooms, and a guided flight of structured valley wines.",
        locationName: "Jarvis Estate",
        cost: "USD 150",
        latitude: 38.3344,
        longitude: -122.2383
      },
      {
        time: "01:30 PM",
        title: "Yountville Long Lunch",
        description: "Stretch into a polished tasting menu with vineyard produce and soft afternoon light.",
        locationName: "Yountville",
        cost: "USD 180",
        latitude: 38.4016,
        longitude: -122.3608
      }
    ]
  },
  {
    tripName: "Dolomites Cloud Roads",
    tagline: "Jagged peaks, alpine rifugios, and high passes through northern Italy.",
    destination: "Dolomites, Italy",
    durationDays: 4,
    travelStyle: "Adventure",
    estimatedTotalCost: "EUR 1,650",
    lodging: "Forestis Dolomites or a Cortina mountain lodge",
    localAngle: "Rifugio lunches, limestone towers, and switchback roads",
    paceAngle: "Early trailheads with weather-aware afternoons",
    transitNote: "Use a rental car or arranged driver; pass roads need careful timing.",
    safety: "Mountain weather moves quickly; carry layers and avoid exposed ridges during storms.",
    spots: [
      {
        time: "08:00 AM",
        title: "Tre Cime Loop",
        description: "Walk a high circuit around sheer limestone towers and open alpine basins.",
        locationName: "Tre Cime di Lavaredo",
        cost: "EUR 30",
        latitude: 46.6187,
        longitude: 12.302
      },
      {
        time: "03:00 PM",
        title: "Lago di Braies Shore",
        description: "Circle clear mountain water framed by forest, boats, and pale peaks.",
        locationName: "Lago di Braies",
        cost: "EUR 12",
        latitude: 46.6943,
        longitude: 12.0859
      }
    ]
  },
  {
    tripName: "Stockholm Island Calm",
    tagline: "Ferries, design shops, cinnamon buns, and museum islands in northern light.",
    destination: "Stockholm, Sweden",
    durationDays: 3,
    travelStyle: "Relaxed",
    estimatedTotalCost: "SEK 13,500",
    lodging: "Ett Hem or a waterfront boutique hotel",
    localAngle: "Archipelago ferries, fika, and clean design",
    paceAngle: "Soft walking days with museum pauses",
    transitNote: "Use ferries between islands when possible; they double as scenic breaks.",
    safety: "Dress for wind near the water and keep transit cards ready for quick transfers.",
    spots: [
      {
        time: "10:00 AM",
        title: "Gamla Stan Slow Walk",
        description: "Move through ochre lanes, old squares, and waterfront edges at an easy pace.",
        locationName: "Gamla Stan",
        cost: "Free",
        latitude: 59.3251,
        longitude: 18.0711
      },
      {
        time: "02:00 PM",
        title: "Vasa Museum Harbor Pause",
        description: "Step into a quiet ship hall around a preserved 17th-century vessel.",
        locationName: "Vasa Museum",
        cost: "SEK 190",
        latitude: 59.328,
        longitude: 18.0914
      }
    ]
  },
  {
    tripName: "Taipei Tea Mountain",
    tagline: "Night markets, temple smoke, and high tea fields above the city.",
    destination: "Taipei, Taiwan",
    durationDays: 3,
    travelStyle: "Food",
    estimatedTotalCost: "TWD 38,000",
    lodging: "Kimpton Da An or a quiet Zhongshan hotel",
    localAngle: "Tea houses, night markets, and temple courtyards",
    paceAngle: "Calm mountain afternoons, lively food nights",
    transitNote: "Use MRT for city movement and taxis for mountain tea-house returns.",
    safety: "Carry cash for market stalls and watch footing on rainy stone steps.",
    spots: [
      {
        time: "03:00 PM",
        title: "Maokong Tea House",
        description: "Ride above the city to tea terraces, mountain air, and slow oolong service.",
        locationName: "Maokong Gondola",
        cost: "TWD 240",
        latitude: 24.9685,
        longitude: 121.588
      },
      {
        time: "08:00 PM",
        title: "Raohe Night Market Run",
        description: "Taste pepper buns, oyster omelets, bubble tea, and grilled snacks under market lights.",
        locationName: "Raohe Street Night Market",
        cost: "TWD 900",
        latitude: 25.0507,
        longitude: 121.5777
      }
    ]
  },
  {
    tripName: "Dubrovnik Stonewater",
    tagline: "City walls, island water, and marble lanes along the Adriatic.",
    destination: "Dubrovnik, Croatia",
    durationDays: 3,
    travelStyle: "Relaxed",
    estimatedTotalCost: "EUR 1,250",
    lodging: "Villa Dubrovnik or an old-town-edge boutique stay",
    localAngle: "Fortified walls, sea kayaks, and island lunches",
    paceAngle: "Early wall walks and shaded afternoons",
    transitNote: "Use boats for island segments and avoid midday wall walks in heat.",
    safety: "Stone steps are polished and steep; wear stable shoes and carry water.",
    spots: [
      {
        time: "08:00 AM",
        title: "Old City Wall Circuit",
        description: "Walk above terracotta roofs, blue water, and fortress corners before the day heats up.",
        locationName: "Dubrovnik City Walls",
        cost: "EUR 35",
        latitude: 42.641,
        longitude: 18.1105
      },
      {
        time: "01:00 PM",
        title: "Lokrum Island Swim Pause",
        description: "Take a short boat to pine shade, rock shelves, and clear Adriatic swimming spots.",
        locationName: "Lokrum Island",
        cost: "EUR 30",
        latitude: 42.6287,
        longitude: 18.1216
      }
    ]
  },
  {
    tripName: "Cusco Sacred Valley Lift",
    tagline: "Highland markets, Inca terraces, and slow altitude-aware movement through the Andes.",
    destination: "Cusco & Sacred Valley, Peru",
    durationDays: 4,
    travelStyle: "Adventure",
    estimatedTotalCost: "USD 1,650",
    lodging: "Inkaterra Hacienda Urubamba or a Cusco heritage hotel",
    localAngle: "Inca stonework, weaving markets, and valley rail",
    paceAngle: "Altitude-conscious starts with generous recovery",
    transitNote: "Spend time in the Sacred Valley before harder climbs to ease altitude adjustment.",
    safety: "Hydrate, avoid alcohol early, and move slowly until altitude feels manageable.",
    spots: [
      {
        time: "10:00 AM",
        title: "Pisac Terrace Walk",
        description: "Climb stone terraces above the valley with wide views and precise Inca geometry.",
        locationName: "Pisac Archaeological Park",
        cost: "PEN 70",
        latitude: -13.4083,
        longitude: -71.8469
      },
      {
        time: "08:00 AM",
        title: "Ollantaytambo Fortress Rise",
        description: "Move up steep terraces and temple stonework while the morning stays cooler.",
        locationName: "Ollantaytambo Archaeological Site",
        cost: "PEN 70",
        latitude: -13.2581,
        longitude: -72.263
      }
    ]
  },
  {
    tripName: "Portland Forest Table",
    tagline: "Coffee, food carts, bookstores, and mossy waterfall air in the Pacific Northwest.",
    destination: "Portland, Oregon, USA",
    durationDays: 3,
    travelStyle: "Food",
    estimatedTotalCost: "USD 1,050",
    lodging: "The Hoxton Portland or a Pearl District stay",
    localAngle: "Food carts, coffee, bookstores, and waterfall drives",
    paceAngle: "Casual city grazing with one nature reset",
    transitNote: "Use transit or rideshare downtown and drive the gorge only with weather confidence.",
    safety: "Waterfall paths can be wet; wear shoes with grip and watch for road closures.",
    spots: [
      {
        time: "10:00 AM",
        title: "Powell's and Coffee Start",
        description: "Pair a bookstore wander with local espresso and a slow downtown morning.",
        locationName: "Powell's City of Books",
        cost: "USD 18",
        latitude: 45.5231,
        longitude: -122.6813
      },
      {
        time: "02:00 PM",
        title: "Multnomah Falls Mist",
        description: "Step into cool spray, mossy stone, and a short bridge view in the Columbia River Gorge.",
        locationName: "Multnomah Falls",
        cost: "USD 5",
        latitude: 45.5762,
        longitude: -122.1158
      }
    ]
  },
  {
    tripName: "Doha Pearl Dunes",
    tagline: "Museum geometry, souk evenings, and refined desert edges on the Gulf.",
    destination: "Doha, Qatar",
    durationDays: 3,
    travelStyle: "Luxury",
    estimatedTotalCost: "QAR 6,800",
    lodging: "Mandarin Oriental Doha or a Pearl waterfront suite",
    localAngle: "Museum architecture, souk lanes, and desert dining",
    paceAngle: "Indoor cultural afternoons with cooler evening walks",
    transitNote: "Use private transfers for desert segments and metro or taxis in the city.",
    safety: "Respect local dress norms and avoid extended outdoor exposure in midday heat.",
    spots: [
      {
        time: "10:00 AM",
        title: "Museum of Islamic Art",
        description: "Study clean geometric galleries, water views, and one of the city's strongest architectural frames.",
        locationName: "Museum of Islamic Art",
        cost: "QAR 50",
        latitude: 25.2955,
        longitude: 51.5392
      },
      {
        time: "06:00 PM",
        title: "Souq Waqif Dinner Walk",
        description: "Move through lantern-lit lanes, spices, falcon shops, and a polished Gulf dinner.",
        locationName: "Souq Waqif",
        cost: "QAR 220",
        latitude: 25.2867,
        longitude: 51.533
      }
    ]
  },
  {
    tripName: "Auckland Island Tempo",
    tagline: "Harbor sails, volcanic cones, and wine islands in an easy coastal rhythm.",
    destination: "Auckland, New Zealand",
    durationDays: 3,
    travelStyle: "Relaxed",
    estimatedTotalCost: "NZD 1,650",
    lodging: "Hotel Britomart or a Waiheke island stay",
    localAngle: "Ferries, vineyards, and volcanic viewpoints",
    paceAngle: "Water-led days with gentle hill walks",
    transitNote: "Use ferries as the backbone and avoid tight island return schedules.",
    safety: "Wind can change ferry comfort; pack layers and check sailing updates.",
    spots: [
      {
        time: "10:00 AM",
        title: "Mount Eden View Loop",
        description: "Walk the volcanic cone for city, harbor, and green crater views.",
        locationName: "Mount Eden",
        cost: "Free",
        latitude: -36.877,
        longitude: 174.7645
      },
      {
        time: "01:00 PM",
        title: "Waiheke Vineyard Lunch",
        description: "Take the ferry to island vines, sea views, and a long relaxed lunch.",
        locationName: "Waiheke Island",
        cost: "NZD 95",
        latitude: -36.8012,
        longitude: 175.0977
      }
    ]
  },
  {
    tripName: "Ladakh High Pass Silence",
    tagline: "Monasteries, lunar roads, and thin-air lakes in the Indian Himalaya.",
    destination: "Leh & Ladakh, India",
    durationDays: 5,
    travelStyle: "Adventure",
    estimatedTotalCost: "INR 95,000",
    lodging: "The Grand Dragon Leh or a serviced highland camp",
    localAngle: "Monasteries, high passes, and cold desert lakes",
    paceAngle: "Acclimatization-first movement",
    transitNote: "Keep the first day light and use experienced drivers for high passes.",
    safety: "Altitude is the core risk; hydrate, rest, and avoid rushing to remote lakes too quickly.",
    spots: [
      {
        time: "10:00 AM",
        title: "Thiksey Monastery Morning",
        description: "Visit layered white buildings, prayer halls, and valley views while acclimatizing gently.",
        locationName: "Thiksey Monastery",
        cost: "INR 50",
        latitude: 34.056,
        longitude: 77.6675
      },
      {
        time: "08:00 AM",
        title: "Pangong Lake Blue Edge",
        description: "Drive into a cold high-altitude landscape where blue water cuts through bare mountains.",
        locationName: "Pangong Tso",
        cost: "INR 5,000",
        latitude: 33.7595,
        longitude: 78.6674
      }
    ]
  },
  {
    tripName: "Seville Orange Courtyards",
    tagline: "Flamenco rooms, orange trees, tiled palaces, and tapas lanes in Andalusia.",
    destination: "Seville, Spain",
    durationDays: 3,
    travelStyle: "Food",
    estimatedTotalCost: "EUR 980",
    lodging: "Hotel Alfonso XIII or a Santa Cruz courtyard stay",
    localAngle: "Tapas, flamenco, patios, and Moorish detail",
    paceAngle: "Slow siesta-aware days",
    transitNote: "Walk central districts early and reserve late dinners after the heat drops.",
    safety: "Carry water in warmer months and keep valuables secure in packed tapas lanes.",
    spots: [
      {
        time: "10:00 AM",
        title: "Alcazar Tile Gardens",
        description: "Move through carved arches, patterned tiles, and shaded orange courtyards.",
        locationName: "Royal Alcazar of Seville",
        cost: "EUR 15",
        latitude: 37.383,
        longitude: -5.9902
      },
      {
        time: "08:30 PM",
        title: "Triana Tapas Evening",
        description: "Cross the river for small plates, ceramics streets, and a warm local dinner rhythm.",
        locationName: "Triana District",
        cost: "EUR 45",
        latitude: 37.3826,
        longitude: -6.0056
      }
    ]
  },
  {
    tripName: "Montreal Jazz Plates",
    tagline: "Old port walks, smoked meat counters, bagels, and late jazz rooms.",
    destination: "Montreal, Canada",
    durationDays: 3,
    travelStyle: "Food",
    estimatedTotalCost: "CAD 1,250",
    lodging: "Hotel William Gray or a Mile End apartment hotel",
    localAngle: "Bagels, markets, jazz, and bilingual street life",
    paceAngle: "Neighborhood grazing with late music",
    transitNote: "Use the metro between food neighborhoods and walk within each district.",
    safety: "Winter sidewalks can ice over; choose boots carefully in cold months.",
    spots: [
      {
        time: "09:00 AM",
        title: "Mile End Bagel Start",
        description: "Taste warm wood-fired bagels and coffee before wandering small shops.",
        locationName: "St-Viateur Bagel",
        cost: "CAD 18",
        latitude: 45.5227,
        longitude: -73.6042
      },
      {
        time: "09:00 PM",
        title: "Downtown Jazz Room",
        description: "End with live jazz, dim tables, and a relaxed nightcap after a food-led day.",
        locationName: "Diese Onze",
        cost: "CAD 45",
        latitude: 45.512,
        longitude: -73.5705
      }
    ]
  },
  {
    tripName: "Seychelles Granite Blue",
    tagline: "Granite coves, reef water, and quiet island transfers in the Indian Ocean.",
    destination: "Mahe & La Digue, Seychelles",
    durationDays: 4,
    travelStyle: "Luxury",
    estimatedTotalCost: "USD 3,200",
    lodging: "Six Senses Zil Pasyon or a Mahe beach villa",
    localAngle: "Granite beaches, reef snorkeling, and private boat days",
    paceAngle: "Slow island transfers with long swim windows",
    transitNote: "Confirm ferry or boat transfers early and avoid tight same-day flight links.",
    safety: "Check sea conditions before snorkeling and use reef-safe sun protection.",
    spots: [
      {
        time: "10:00 AM",
        title: "Anse Source d'Argent",
        description: "Walk between pale sand, sculpted granite, palms, and shallow blue water.",
        locationName: "Anse Source d'Argent",
        cost: "SCR 150",
        latitude: -4.3711,
        longitude: 55.8274
      },
      {
        time: "02:00 PM",
        title: "Morne Blanc Viewpoint",
        description: "Climb into cool forest for a high view over Mahe coastline and layered sea color.",
        locationName: "Morne Blanc Trail",
        cost: "Free",
        latitude: -4.6547,
        longitude: 55.4324
      }
    ]
  },
  {
    tripName: "Ljubljana Emerald Detour",
    tagline: "Castle views, riverside cafes, and a lake-blue day trip into Slovenia.",
    destination: "Ljubljana & Lake Bled, Slovenia",
    durationDays: 3,
    travelStyle: "Relaxed",
    estimatedTotalCost: "EUR 920",
    lodging: "Zlata Ladjica or a quiet riverside boutique stay",
    localAngle: "Cafe bridges, castle paths, and alpine lake calm",
    paceAngle: "Small-city ease with one scenic excursion",
    transitNote: "Use a train or driver for Bled and keep Ljubljana evenings walkable.",
    safety: "Check lake weather before boating and wear stable shoes on castle paths.",
    spots: [
      {
        time: "10:00 AM",
        title: "Dragon Bridge River Walk",
        description: "Follow the Ljubljanica past cafes, bridges, markets, and calm old-town facades.",
        locationName: "Dragon Bridge",
        cost: "Free",
        latitude: 46.0511,
        longitude: 14.5106
      },
      {
        time: "01:00 PM",
        title: "Lake Bled Island View",
        description: "Circle turquoise water, climb for castle views, and pause for cream cake by the shore.",
        locationName: "Lake Bled",
        cost: "EUR 25",
        latitude: 46.3636,
        longitude: 14.0938
      }
    ]
  },
  {
    tripName: "Anchorage Glacier Air",
    tagline: "Tidewater glaciers, rail views, and wild northern scale from Alaska's gateway.",
    destination: "Anchorage & Kenai Fjords, Alaska",
    durationDays: 4,
    travelStyle: "Adventure",
    estimatedTotalCost: "USD 2,250",
    lodging: "Hotel Captain Cook or a Seward harbor lodge",
    localAngle: "Glacier cruises, rail corridors, and wildlife watching",
    paceAngle: "Long daylight days with weather flexibility",
    transitNote: "Plan around rail and boat schedules; weather can reshuffle the order.",
    safety: "Dress in waterproof layers and follow all wildlife distance guidance.",
    spots: [
      {
        time: "08:00 AM",
        title: "Coastal Classic Rail",
        description: "Ride along Turnagain Arm toward mountains, water, and wide open Alaska views.",
        locationName: "Anchorage Depot",
        cost: "USD 120",
        latitude: 61.2217,
        longitude: -149.8904
      },
      {
        time: "11:00 AM",
        title: "Kenai Fjords Glacier Cruise",
        description: "Move past cliffs, seabirds, ice, and cold water toward tidewater glacier faces.",
        locationName: "Seward Boat Harbor",
        cost: "USD 220",
        latitude: 60.1192,
        longitude: -149.4394
      }
    ]
  },
  {
    tripName: "Milan Lake Como Finish",
    tagline: "Design showrooms, aperitivo rooms, and a polished lake escape north of Milan.",
    destination: "Milan & Lake Como, Italy",
    durationDays: 3,
    travelStyle: "Luxury",
    estimatedTotalCost: "EUR 1,950",
    lodging: "Mandarin Oriental Milan or a Bellagio lake villa",
    localAngle: "Fashion, design, aperitivo, and villa gardens",
    paceAngle: "Urban polish followed by lake calm",
    transitNote: "Use trains to Como and private boats only after confirming lake weather.",
    safety: "Watch bags in central stations and use comfortable shoes for cobbled lake towns.",
    spots: [
      {
        time: "10:00 AM",
        title: "Duomo Terrace Walk",
        description: "Step between marble spires with city roofs, glass arcades, and alpine hints beyond.",
        locationName: "Milan Cathedral",
        cost: "EUR 25",
        latitude: 45.4642,
        longitude: 9.1916
      },
      {
        time: "02:00 PM",
        title: "Bellagio Lake Garden",
        description: "Take in cypress paths, ferry views, and villa gardens where the lake splits into blue arms.",
        locationName: "Bellagio",
        cost: "EUR 40",
        latitude: 45.9877,
        longitude: 9.2613
      }
    ]
  },
  {
    tripName: "Hoi An Lantern Drift",
    tagline: "Tailor shops, river lanterns, herb villages, and soft beach mornings.",
    destination: "Hoi An, Vietnam",
    durationDays: 3,
    travelStyle: "Relaxed",
    estimatedTotalCost: "VND 18,000,000",
    lodging: "Anantara Hoi An or a quiet riverfront boutique stay",
    localAngle: "Lantern streets, tailoring, herbs, and gentle coastlines",
    paceAngle: "Warm slow days with evening river light",
    transitNote: "Use bikes for nearby villages only if comfortable with local road flow.",
    safety: "Carry rain cover in wet months and keep valuables dry during boat rides.",
    spots: [
      {
        time: "09:30 AM",
        title: "Ancient Town Tailor Walk",
        description: "Move through ochre walls, timber houses, and small tailor shops before the day gets busy.",
        locationName: "Hoi An Ancient Town",
        cost: "VND 120,000",
        latitude: 15.8801,
        longitude: 108.338
      },
      {
        time: "06:30 PM",
        title: "Thu Bon Lantern Boat",
        description: "Float along the river as lanterns glow across bridges, boats, and market edges.",
        locationName: "Thu Bon River",
        cost: "VND 180,000",
        latitude: 15.8768,
        longitude: 108.329
      }
    ]
  },
  {
    tripName: "Muscat Frankincense Coast",
    tagline: "Fort walls, souks, wadis, and refined coastal calm along the Gulf of Oman.",
    destination: "Muscat, Oman",
    durationDays: 4,
    travelStyle: "Luxury",
    estimatedTotalCost: "OMR 780",
    lodging: "The Chedi Muscat or Al Bustan Palace",
    localAngle: "Frankincense, marble mosques, and wadi water",
    paceAngle: "Elegant city mornings with outdoor day trips",
    transitNote: "Use a driver for wadi and coastal routes; distances take longer than they look.",
    safety: "Dress conservatively at religious sites and carry sun protection for exposed stops.",
    spots: [
      {
        time: "08:30 AM",
        title: "Sultan Qaboos Mosque",
        description: "Walk marble courtyards, arches, and calm prayer halls in the cooler morning window.",
        locationName: "Sultan Qaboos Grand Mosque",
        cost: "Free",
        latitude: 23.5837,
        longitude: 58.3891
      },
      {
        time: "03:00 PM",
        title: "Mutrah Souk Frankincense",
        description: "Follow incense, silver, textiles, and harbor light through old market lanes.",
        locationName: "Mutrah Souk",
        cost: "OMR 25",
        latitude: 23.6204,
        longitude: 58.5624
      }
    ]
  },
  {
    tripName: "Tasmania Wild Coast",
    tagline: "Wineglass bays, eucalyptus trails, and cool-climate food at Australia's edge.",
    destination: "Tasmania, Australia",
    durationDays: 4,
    travelStyle: "Adventure",
    estimatedTotalCost: "AUD 2,050",
    lodging: "Saffire Freycinet or a Hobart waterfront stay",
    localAngle: "Coastal hikes, oysters, and island wilderness",
    paceAngle: "Trail mornings with generous drive buffers",
    transitNote: "Self-drive carefully and keep fuel stops planned between national parks.",
    safety: "Weather changes rapidly; pack warm layers and check park alerts before hikes.",
    spots: [
      {
        time: "08:00 AM",
        title: "Wineglass Bay Lookout",
        description: "Climb through granite and eucalyptus to a bright crescent of beach and blue water.",
        locationName: "Wineglass Bay",
        cost: "AUD 45",
        latitude: -42.1457,
        longitude: 148.3021
      },
      {
        time: "02:00 PM",
        title: "Hobart Waterfront Taste",
        description: "Return to cold-climate seafood, harbor air, and a calm late-afternoon tasting loop.",
        locationName: "Hobart Waterfront",
        cost: "AUD 75",
        latitude: -42.8821,
        longitude: 147.3318
      }
    ]
  }
];

const ADDITIONAL_CURATED_ITINERARIES = ADDITIONAL_CURATED_ITINERARY_SEEDS.map(buildCuratedItinerary);

export const PRE_CURATED_ITINERARIES: Itinerary[] = [
  ...FEATURED_CURATED_ITINERARIES,
  ...ADDITIONAL_CURATED_ITINERARIES
];

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
