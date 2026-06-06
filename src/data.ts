import { Itinerary } from "./types";

export const PRE_CURATED_ITINERARIES: Itinerary[] = [
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
