import React, { useState, useEffect, useRef } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  Compass, 
  Lock, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Sparkles, 
  Check, 
  Loader2, 
  Printer, 
  Briefcase, 
  ShieldCheck, 
  ArrowLeft, 
  X, 
  Layers,
  AlertCircle,
  Eye,
  Sliders,
  Sparkle,
  BookOpen,
  Cpu,
  Clock,
  Coins,
  Share2
} from "lucide-react";
import { Itinerary, PlannerState } from "../types";
import { WanderfulContext } from "../state/WanderfulContext";
import { CachedItinerarySnapshot, loadItinerarySnapshot, saveItinerarySnapshot } from "../services/localItineraryCache";
import HomePage from "../pages/HomePage";
import HowItWorksPage from "../pages/HowItWorksPage";
import ItinerariesPage from "../pages/ItinerariesPage";
import GuidesPage from "../pages/GuidesPage";
import TripPage from "../pages/TripPage";
import { PRE_CURATED_ITINERARIES, TRAVEL_GUIDES } from "../data";
import gsap from "gsap";
import MapView from "../components/MapView";
import VerticalTimeline from "../components/VerticalTimeline";
import PrintableItinerary from "../components/PrintableItinerary";

interface CurrencyConfig {
  code: string;
  symbol: string;
  name: string;
}

const SUPPORTED_CURRENCIES: CurrencyConfig[] = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "CNY", symbol: "元", name: "Chinese Yuan" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham" }
];

// High-fidelity pre-curated itinerary to instantly demonstrate Wanderful Travel OS
const DEMO_ITINERARY: Itinerary = {
  tripName: "Kyoto & Mt. Fuji Sync",
  tagline: "Uncover quiet shrines, legendary hot springs, and multi-course culinary zen.",
  destination: "Honshu Island, Japan",
  durationDays: 4,
  travelStyle: "Luxury",
  estimatedTotalCost: "$2,200",
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
          description: "Board the ultra-smooth bullet train. Sip seasonal sake sake while sliding effortlessly through rural Japan at 320 km/h.",
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
    stays: "$980 USD",
    transport: "$420 USD",
    food: "$500 USD",
    activities: "$300 USD"
  },
  localSafetyAndPaceTips: "Acclimate to high geothermal air shifts with hydration. Wear premium lightweight socks as you will walk barefoot on temple mats. Greet hosts with a light incline bow."
};

const ROUTE_TO_NAV: Record<string, string> = {
  "/": "DISCOVER",
  "/how-it-works": "HOW IT WORKS",
  "/itineraries": "ITINERARIES",
  "/guides": "GUIDES",
  "/trip": "TRIP"
};

function normalizeRoutePath(pathname: string) {
  const normalized = pathname.toLowerCase();
  return ROUTE_TO_NAV[normalized] ? normalized : "/";
}

function routeToNav(pathname: string) {
  return ROUTE_TO_NAV[normalizeRoutePath(pathname)] || "DISCOVER";
}

function navToRoute(nav: string) {
  if (nav === "HOW IT WORKS") return "/how-it-works";
  if (nav === "ITINERARIES") return "/itineraries";
  if (nav === "GUIDES") return "/guides";
  return "/";
}

export default function WanderfulShell() {
  const [routePath, setRoutePath] = useState(() => normalizeRoutePath(window.location.pathname));
  const activeNav = routeToNav(routePath);
  const plannerScrollTimeoutRef = useRef<number | null>(null);

  // Filter States for high-fidelity views
  const [curatedStyle, setCuratedStyle] = useState("All");
  const [curatedSearch, setCuratedSearch] = useState("");
  const [guideCategory, setGuideCategory] = useState("All");
  const [guideSearch, setGuideSearch] = useState("");

  // Interactive Tactical Advisory states for Simulator
  const [simTerrain, setSimTerrain] = useState<"urban" | "alpine" | "volcanic">("urban");
  const [simPace, setSimPace] = useState<"meditative" | "discovery" | "endurance">("discovery");

  // Input states for generating custom trip
  const [planner, setPlanner] = useState<PlannerState>({
    startingCity: "",
    budget: "",
    days: "3",
    startDate: "",
    travelStyle: "Adventure"
  });

  // Currency Selection & Location-aware state
  const [activeCurrency, setActiveCurrency] = useState("USD");

  // API Key & Provider management
  const [aiProvider, setAiProvider] = useState<"gemini" | "openai" | "anthropic" | "groq">("gemini");
  const [providerKeys, setProviderKeys] = useState({
    gemini: "",
    openai: "",
    anthropic: "",
    groq: ""
  });
  const [showApiKeySetting, setShowApiKeySetting] = useState(false);

  const clearPendingPlannerScroll = () => {
    if (plannerScrollTimeoutRef.current !== null) {
      window.clearTimeout(plannerScrollTimeoutRef.current);
      plannerScrollTimeoutRef.current = null;
    }
  };

  const navigateTo = (path: string, options: { scrollTop?: boolean } = {}) => {
    clearPendingPlannerScroll();
    const normalizedPath = normalizeRoutePath(path);
    if (window.location.pathname !== normalizedPath) {
      window.history.pushState({}, "", normalizedPath);
    }
    setRoutePath(normalizedPath);
    if (options.scrollTop !== false) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setRoutePath(normalizeRoutePath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Load keys from localStorage on mount
  useEffect(() => {
    try {
      const savedProvider = localStorage.getItem("wanderful_provider") as any;
      if (savedProvider && ["gemini", "openai", "anthropic", "groq"].includes(savedProvider)) {
        setAiProvider(savedProvider);
      }
      const savedKeys = localStorage.getItem("wanderful_keys");
      if (savedKeys) {
        setProviderKeys(JSON.parse(savedKeys));
      }
    } catch (e) {
      console.warn("Could not retrieve locally saved keys.", e);
    }
  }, []);

  // Core status trackers
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("Synchronizing travel engine...");
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  // Output travel document
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [cachedSnapshot, setCachedSnapshot] = useState<CachedItinerarySnapshot | null>(() => loadItinerarySnapshot());
  const [isOffline, setIsOffline] = useState(() => !navigator.onLine);

  useEffect(() => {
    if (routePath === "/trip" && !itinerary) {
      if (cachedSnapshot?.itinerary) {
        setItinerary(cachedSnapshot.itinerary);
      } else {
        navigateTo("/");
      }
    }
  }, [routePath, itinerary, cachedSnapshot]);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    if (itinerary) {
      setCachedSnapshot(saveItinerarySnapshot(itinerary));
    }
  }, [itinerary]);

  // Active viewing day index in interactive itinerary
  const [activeDayIdx, setActiveDayIdx] = useState(0);

  // Highlighted active activity index for map coordination
  const [activeActivityIdx, setActiveActivityIdx] = useState(0);

  // Checklist items
  const [packedRegistry, setPackedRegistry] = useState<Record<string, boolean>>({});

  // Expanded guide tracker
  const [expandedGuideId, setExpandedGuideId] = useState<string | null>(null);

  // Policy & Term modals
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Share overlay/toast alerts
  const [shareToast, setShareToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });

  // Auto-detect currency base on IP Geolocation
  useEffect(() => {
    const detectLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        if (res.ok) {
          const data = await res.json();
          const code = data.country_code || data.country || "";
          
          if (code === "IN") {
            setActiveCurrency("INR");
          } else if (code === "CN") {
            setActiveCurrency("CNY");
          } else if (code === "JP") {
            setActiveCurrency("JPY");
          } else if (code === "GB") {
            setActiveCurrency("GBP");
          } else if (code === "AU") {
            setActiveCurrency("AUD");
          } else if (code === "CA") {
            setActiveCurrency("CAD");
          } else if (code === "SG") {
            setActiveCurrency("SGD");
          } else if (code === "AE") {
            setActiveCurrency("AED");
          } else if (["DE", "FR", "IT", "ES", "NL", "BE", "PT", "IE", "GR", "AT", "FI", "EE", "LV", "LT", "SK", "SI", "CY", "MT", "LU"].includes(code)) {
            setActiveCurrency("EUR");
          } else {
            setActiveCurrency("USD");
          }
        }
      } catch (e) {
        console.warn("IP Geolocation selector falling back to USD.", e);
      }
    };
    detectLocation();
  }, []);

  // Reset highlighted activity when active day changes
  useEffect(() => {
    setActiveActivityIdx(0);
  }, [activeDayIdx]);

  // Refs for the Parallax background
  const videoBgWrapperRef = useRef<HTMLDivElement | null>(null);

  // Playback Speeder Utility
  const handleVideoMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.playbackRate = 1.25;
  };

  // GSAP Driven Mouse Parallax Animation
  useEffect(() => {
    const videoBg = videoBgWrapperRef.current;
    if (!videoBg) return;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      // Parallax multiplier
      targetX = ((e.clientX - cx) / cx) * 20;
      targetY = ((e.clientY - cy) / cy) * 20;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animFrameId: number;
    const updateParallax = () => {
      // Lerp smoothing factors
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      
      gsap.set(videoBg, { x: currentX, y: currentY });
      animFrameId = requestAnimationFrame(updateParallax);
    };
    animFrameId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  // Multi-message elegant status sequence
  const animateLoadingSteps = () => {
    const engineNames = {
      gemini: "Google Gemini 3.5 Flash",
      openai: "OpenAI GPT-4o-mini",
      anthropic: "Anthropic Claude 3.5 Sonnet",
      groq: "Groq High-Speed Llama 3"
    };
    const engineName = engineNames[aiProvider] || "Wanderful Quantum";
    const sequence = [
      `Initializing deep handshake with ${engineName} matrix...`,
      "Securing satellite connection...",
      "Sieving micro-budgets & local transport rates...",
      "Selecting bespoke vintage lodgings...",
      "Structuring curated hourly plans...",
      "Polishing safety guidelines & packing lists...",
      "Delivering interactive Wanderful booklet..."
    ];
    let idx = 0;
    setLoadingMsg(sequence[0]);
    const timer = setInterval(() => {
      idx++;
      if (idx < sequence.length) {
        setLoadingMsg(sequence[idx]);
      } else {
        clearInterval(timer);
      }
    }, 2000);

    return () => clearInterval(timer);
  };

  // Connect backend to deliver AI trip planner output
  const handleGenerateTrip = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!planner.startingCity.trim()) {
      setErrorStatus("A valid Starting City is required for our coordinates.");
      return;
    }

    setLoading(true);
    setErrorStatus(null);
    setItinerary(null);
    const clearLoader = animateLoadingSteps();

    try {
      const activeApiKey = providerKeys[aiProvider] || "";
      const res = await fetch("/api/generate-itinerary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          startingCity: planner.startingCity,
          budget: planner.budget,
          days: planner.days,
          startDate: planner.startDate,
          travelStyle: planner.travelStyle,
          userApiKey: activeApiKey.trim() || undefined,
          aiProvider: aiProvider,
          currency: activeCurrency
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Generation engine was unable to synthesize the path.");
      }

      setItinerary(data);
      setPackedRegistry({});
      navigateTo("/trip");
      setActiveDayIdx(0);
    } catch (err: any) {
      console.error(err);
      setErrorStatus(err.message || "Network lost. Please verify your connection and API Credentials.");
    } finally {
      clearLoader();
      setLoading(false);
    }
  };

  // Instant demo loading
  const handleLoadDemo = () => {
    setLoading(true);
    setErrorStatus(null);
    setLoadingMsg("Fetching Wanderful standard archive...");
    setTimeout(() => {
      setItinerary(DEMO_ITINERARY);
      setPackedRegistry({});
      navigateTo("/trip");
      setActiveDayIdx(0);
      setLoading(false);
    }, 1200);
  };

  // Curated adventure template loading
  const handleLoadCuratedItinerary = (curated: Itinerary) => {
    setLoading(true);
    setErrorStatus(null);
    setLoadingMsg(`Synchronizing active matrix parameters for ${curated.tripName}...`);
    setTimeout(() => {
      setItinerary(curated);
      setPackedRegistry({});
      navigateTo("/trip");
      setActiveDayIdx(0);
      setLoading(false);
    }, 1200);
  };

  // Share itinerary details using Web Share API or falling back to Clipboard API with elegant toast
  const handleShareItinerary = async () => {
    if (!itinerary) return;

    const shareTitle = `Wanderful - ${itinerary.tripName}`;
    const shareText = `Explore ${itinerary.tripName} in ${itinerary.destination} — a custom ${itinerary.durationDays}-day curated itinerary! Estimated Budget: ${itinerary.estimatedTotalCost}. Crafted with Wanderful Travel OS.`;
    const shareUrl = window.location.href;

    // Check if web sharing is natively supported and not blocked by iframe policies
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        setShareToast({ 
          show: true, 
          message: "Itinerary shared successfully!" 
        });
        setTimeout(() => setShareToast({ show: false, message: "" }), 3500);
        return;
      } catch (err: any) {
        // AbortError is triggered if the user cancels the share, which should be ignored
        if (err.name !== "AbortError") {
          console.warn("Native Web Share failed/blocked, falling back to clipboard copy...", err);
        } else {
          return;
        }
      }
    }

    // Fallback: Copy to clipboard
    const fullSummaryText = `${shareTitle}\n\n"${itinerary.tagline}"\n\n📍 Destination: ${itinerary.destination}\n📅 Duration: ${itinerary.durationDays} Days (${itinerary.travelStyle} Vibe)\n💰 Est. Total Cost: ${itinerary.estimatedTotalCost}\n\nHighlights:\n${itinerary.highlights.map(h => `• ${h}`).join("\n")}\n\nLink to view: ${shareUrl}\n\nGenerated using Wanderful Travel OS`;

    try {
      await navigator.clipboard.writeText(fullSummaryText);
      setShareToast({ 
        show: true, 
        message: "Itinerary summary copied to clipboard!" 
      });
    } catch (err) {
      console.error("Could not copy itinerary summary text:", err);
      setShareToast({ 
        show: true, 
        message: "Failed to auto-copy. Sharing summary format created!" 
      });
    }
    setTimeout(() => setShareToast({ show: false, message: "" }), 4000);
  };

  const togglePackedItem = (item: string) => {
    setPackedRegistry(prev => ({ ...prev, item: !prev[item] }));
  };

  const scrollPlannerIntoView = () => {
    const el = document.getElementById("planner-anchor-card");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const triggerScrollToPlanner = () => {
    clearPendingPlannerScroll();

    if (window.location.pathname !== "/") {
      navigateTo("/", { scrollTop: false });
      plannerScrollTimeoutRef.current = window.setTimeout(() => {
        plannerScrollTimeoutRef.current = null;
        scrollPlannerIntoView();
      }, 180);
      return;
    }

    scrollPlannerIntoView();
  };

  const contextValue = {
    SUPPORTED_CURRENCIES,
    activeActivityIdx,
    activeCurrency,
    activeDayIdx,
    cachedSnapshot,
    curatedSearch,
    curatedStyle,
    errorStatus,
    expandedGuideId,
    guideCategory,
    guideSearch,
    handleGenerateTrip,
    handleLoadCuratedItinerary,
    handleLoadDemo,
    handleShareItinerary,
    itinerary,
    isOffline,
    loading,
    navigateTo,
    packedRegistry,
    planner,
    providerKeys,
    routePath,
    setActiveActivityIdx,
    setActiveCurrency,
    setActiveDayIdx,
    setCuratedSearch,
    setCuratedStyle,
    setExpandedGuideId,
    setGuideCategory,
    setGuideSearch,
    setPlanner,
    setSimPace,
    setSimTerrain,
    simPace,
    simTerrain,
    togglePackedItem
  };

  return (
    <WanderfulContext.Provider value={contextValue}>
    <div 
      className="relative min-h-screen text-white overflow-x-hidden pb-16 flex flex-col justify-between selection:bg-white selection:text-black"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      
      {/* EXPLICIT PRINTABLE PHYSICAL DOSSIER DOCUMENT */}
      <PrintableItinerary itinerary={itinerary} />
      
      {/* BACKGROUND CINEMATIC IMMERSIVE ENGINE */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
        <div 
          ref={videoBgWrapperRef}
          className="absolute inset-0 w-full h-full scale-[1.08] origin-center transition-all duration-700"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            onLoadedMetadata={handleVideoMetadata}
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260510_060007_60275ce7-030c-4668-a160-8f364ec537d3.mp4"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        {/* Soft elegant gradient filters in lieu of tech larp status indicators */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/80" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/30 to-black/95" />
      </div>

      {/* FIXED PREMIUM HEADER ELEMENT */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 flex items-center justify-between border-b border-white/5 backdrop-blur-xl">
        {/* Left: Brand logo */}
        <div 
          className="flex items-center gap-1.5 cursor-pointer group"
          onClick={() => navigateTo("/")}
        >
          <span className="text-[17px] font-semibold tracking-tight uppercase font-display text-glow group-hover:text-cyan-400 transition-colors">
            Wanderful
          </span>
          <sup className="text-[8px] tracking-normal text-white/50 font-mono">TM</sup>
        </div>

        {/* Center: Glass navigation bar */}
        <nav className="hidden md:flex items-center gap-1.5 liquid-glass rounded-full px-2 py-1.5 shadow-xl">
          {["DISCOVER", "HOW IT WORKS", "ITINERARIES", "GUIDES"].map((nav) => (
            <button
              key={nav}
              onClick={() => {
                navigateTo(navToRoute(nav));
                if (nav === "DISCOVER") {
                  setTimeout(triggerScrollToPlanner, 100);
                }
              }}
              className={`text-[11px] font-mono font-medium tracking-[0.12em] px-4 py-1.5 rounded-full transition-all duration-300 ${
                activeNav === nav
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {nav}
            </button>
          ))}
        </nav>

        {/* Right: Key config and Get Started */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowApiKeySetting(!showApiKeySetting)}
            title="Configure Custom Keys"
            className={`p-2 rounded-full border text-xs transition-all cursor-pointer ${
              providerKeys[aiProvider]
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={triggerScrollToPlanner}
            className="liquid-glass rounded-full px-5 py-2 text-[11px] font-mono font-medium tracking-[0.12em] text-white/95 hover:text-white cursor-pointer hover:scale-105 active:scale-95 transition-all"
          >
            START PLANNING
          </button>
        </div>
      </header>

      {/* MOBILE NAVIGATION BAR */}
      <nav className="fixed top-[73px] left-0 right-0 z-40 md:hidden px-4 py-2 border-b border-white/5 bg-black/45 backdrop-blur-xl overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          {["DISCOVER", "HOW IT WORKS", "ITINERARIES", "GUIDES"].map((nav) => (
            <button
              key={nav}
              onClick={() => {
                navigateTo(navToRoute(nav));
                if (nav === "DISCOVER") {
                  setTimeout(triggerScrollToPlanner, 100);
                }
              }}
              className={`text-[10px] font-mono font-medium tracking-[0.12em] px-3.5 py-1.5 rounded-full transition-all duration-300 border ${
                activeNav === nav
                  ? "bg-white/10 text-white border-white/10"
                  : "bg-white/[0.02] border-white/5 text-white/60"
              }`}
            >
              {nav}
            </button>
          ))}
        </div>
      </nav>

      {/* FLYOUT SETTINGS DRAWER FOR API KEY */}
      <AnimatePresence>
        {showApiKeySetting && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-[74px] left-0 right-0 z-40 bg-black/95 border-b border-white/5 backdrop-blur-2xl"
          >
            <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col gap-5">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-white uppercase flex items-center gap-2">
                    <Lock className="w-3 h-3 text-cyan-400" />
                    Wanderful AI Engine Setup (Optional)
                  </h4>
                  <p className="text-xs text-white/50 mt-1">
                    Select your preferred AI engine and supply your own API key. If left blank, server-side system keys are used when available.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowApiKeySetting(false)}
                    className="px-4 py-1.5 bg-white text-black hover:bg-white/90 text-xs rounded-full font-mono transition-all font-semibold cursor-pointer"
                  >
                    Close Settings
                  </button>
                </div>
              </div>

              {/* Providers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {[
                  { id: "gemini", name: "Google Gemini", model: "gemini-3.5-flash", placeholder: "Paste your Gemini API key..." },
                  { id: "openai", name: "OpenAI ChatGPT", model: "gpt-4o-mini", placeholder: "Paste your OpenAI API key..." },
                  { id: "anthropic", name: "Anthropic Claude", model: "claude-3-5-sonnet", placeholder: "Paste your Anthropic API key..." },
                  { id: "groq", name: "Groq High-Speed", model: "llama-3.3-70b", placeholder: "Paste your Groq API key..." }
                ].map((item) => (
                  <div 
                    key={item.id}
                    className={`p-3.5 rounded-2xl border transition-all ${
                      aiProvider === item.id 
                        ? "bg-white/[0.04] border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.05)]" 
                        : "bg-white/[0.01] border-white/5 hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div>
                        <span className="text-xs font-semibold text-white block">{item.name}</span>
                        <span className="text-[9px] font-mono text-white/40">{item.model}</span>
                      </div>
                      <button
                        onClick={() => {
                          setAiProvider(item.id as any);
                          localStorage.setItem("wanderful_provider", item.id);
                        }}
                        className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-wider transition-all uppercase cursor-pointer ${
                          aiProvider === item.id
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-semibold"
                            : "bg-white/5 text-white/50 hover:text-white"
                        }`}
                      >
                        {aiProvider === item.id ? "Active" : "Select"}
                      </button>
                    </div>

                    <div className="relative mt-2">
                      <input
                        type="password"
                        placeholder={item.placeholder}
                        value={providerKeys[item.id as keyof typeof providerKeys] || ""}
                        onChange={(e) => {
                          const val = e.target.value;
                          setProviderKeys(prev => {
                            const next = { ...prev, [item.id]: val };
                            localStorage.setItem("wanderful_keys", JSON.stringify(next));
                            return next;
                          });
                        }}
                        className="bg-black/40 border border-white/10 rounded-lg px-2.5 py-1 text-[10px] font-mono text-white placeholder:text-white/25 focus:outline-none focus:border-cyan-400/30 w-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LOADING OVERLAY SCREEN */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-3xl flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="max-w-md w-full flex flex-col items-center">
              <div className="relative mb-6">
                <Compass className="w-12 h-12 text-cyan-400 animate-spin" style={{ animationDuration: "3s" }} />
                <Sparkle className="w-5 h-5 text-purple-400 absolute bottom-0 right-0 animate-pulse" />
              </div>

              <h3 className="text-xl font-bold font-display uppercase tracking-widest text-glow mb-1">
                WANDERFUL TRAVEL OS
              </h3>
              <p className="text-xs text-white/50 font-mono tracking-widest uppercase mb-6">
                generating your custom matrix
              </p>

              {/* Loader feedback message */}
              <div className="px-5 py-3 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 font-mono min-h-[44px] flex items-center justify-center">
                {loadingMsg}
              </div>

              <div className="mt-8 flex items-center gap-2 text-[10px] text-white/30 font-mono">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                SECURE BY DESIGN. ZERO DATA LEAKS.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* APP WORKSPACE FRAME CONTAINER */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-40 md:pt-28 px-4 md:px-10">

        <AnimatePresence mode="wait">
          
          {/* HERO VIEW */}
          {routePath !== "/trip" && (
            <motion.div
              key={routePath}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1 }}
              className="max-w-7xl mx-auto w-full flex flex-col items-center text-center relative"
            >
              
              {routePath === "/" && <HomePage />}

              {/* HOW IT WORKS VIEW */}
              {routePath === "/how-it-works" && <HowItWorksPage />}

              {/* ITINERARIES VIEW */}
              {routePath === "/itineraries" && <ItinerariesPage />}

              {/* GUIDES VIEW */}
              {routePath === "/guides" && <GuidesPage />}

            </motion.div>
          )}

          {/* DYNAMIC COMPREHENSIVE ITINERARY BOOKLET */}
          {routePath === "/trip" && itinerary && <TripPage />}

        </AnimatePresence>
      </div>

      {/* FOOTER METRICS AND PLATFORM ACKNOWLEDGEMENT */}
      <footer className="relative z-10 px-6 mt-16 pt-8 pb-12 border-t border-white/5 max-w-4xl mx-auto w-full flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] font-mono text-white/35 tracking-widest uppercase">
            WANDERFUL TRAVEL OS © 2026. ALL RIGHTS RESERVED.
          </span>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-mono text-white/40 tracking-wider">
            <button 
              onClick={() => setShowPrivacy(true)}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              PRIVACY POLICY
            </button>
            <span className="text-white/10">•</span>
            <button 
              onClick={() => setShowTerms(true)}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              TERMS AND CONDITIONS
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-white/30 tracking-wider pt-4 border-t border-white/[0.02]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Designed for boundless journeys</span>
          </div>

          <div>
            MADE BY{" "}
            <a 
              href="https://sandipmaity.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-cyan-400 transition-all font-semibold hover:border-b border-cyan-400/30 pb-0.5 tracking-widest"
            >
              SANDIPMAITY.ME
            </a>
          </div>
        </div>
      </footer>

      {/* PRIVACY POLICY MODAL OVERLAY */}
      <AnimatePresence>
        {showPrivacy && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setShowPrivacy(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-2xl bg-black/95 border border-white/10 rounded-[28px] overflow-hidden p-6 sm:p-8 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative light flare */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
              
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                <div>
                  <span className="text-[9px] font-mono text-cyan-400 tracking-widest uppercase">
                    SECURITY LEDGER
                  </span>
                  <h3 className="text-xl font-semibold text-white tracking-tight font-display mt-0.5">
                    Privacy Protection Directive
                  </h3>
                </div>
                <button 
                  onClick={() => setShowPrivacy(false)}
                  className="p-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 text-xs text-white/70 leading-relaxed max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
                <p>
                  At <strong className="text-white font-semibold">Wanderful Travel OS</strong>, privacy is not a feature—it is our absolute engineering baseline. We are committed to leaving zero footprint of your personal travel intentions, coordinates, or finances.
                </p>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase block font-semibold">
                    1. ZERO CLIENT STORAGE CACHING
                  </span>
                  <p className="text-[11px] text-white/60">
                    We do not track, catalog, store, or sell your search starting points, targeted budgets, days of travel, or style preferences. All curated pathways mapped onto the OpenStreetMap framework are generated purely inside session memory.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase block font-semibold">
                    2. SECURE API CONNECTIONS
                  </span>
                  <p className="text-[11px] text-white/60">
                    If you configure a custom Gemini API key locally inside the system settings, it is assigned strictly to your own browser's client-side local storage. Your credentials never traverse outside your direct network sandbox.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase block font-semibold">
                    3. GEOMETRIC INDEPENDENCE
                  </span>
                  <p className="text-[11px] text-white/60">
                    Map renders are supported via public OpenStreetMap raster tiles, meaning your physical live location coordinates remain protected behind static query boundaries, shielding your real-world coordinates from commercial data brokerage.
                  </p>
                </div>

                <p className="text-[11px] text-white/40 mt-4 font-mono text-center">
                  LAST UPDATED: JUNE 2026 • DIRECTIVE 1.4-SECURE
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 text-right">
                <button 
                  onClick={() => setShowPrivacy(false)}
                  className="px-5 py-2 bg-white text-black text-xs font-semibold rounded-full font-mono tracking-wider hover:bg-white/90 active:scale-95 transition-all cursor-pointer"
                >
                  ACKNOWLEDGE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TERMS & CONDITIONS MODAL OVERLAY */}
      <AnimatePresence>
        {showTerms && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setShowTerms(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-2xl bg-black/95 border border-white/10 rounded-[28px] overflow-hidden p-6 sm:p-8 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative light flare */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
              
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                <div>
                  <span className="text-[9px] font-mono text-cyan-400 tracking-widest uppercase">
                    LEGAL MATRIX
                  </span>
                  <h3 className="text-xl font-semibold text-white tracking-tight font-display mt-0.5">
                    Terms & Spatial Conditions
                  </h3>
                </div>
                <button 
                  onClick={() => setShowTerms(false)}
                  className="p-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 text-xs text-white/70 leading-relaxed max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
                <p>
                  Welcome to <strong className="text-white font-semibold">Wanderful Travel OS</strong>. Accessing our dynamic layout configurations, vector maps, or pre-curated classical guidelines constitutes formal compliance with these procedural boundaries.
                </p>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase block font-semibold">
                    1. ADVISORY SCOPE
                  </span>
                  <p className="text-[11px] text-white/60">
                    All coordinates, historical notes, local rates, hotel listings, and path suggestions are curated and structured for general reference or entertainment only. Real-world path changes, weather conditions, border safety limits, and temporal fluctuations dictate actual passage safety.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase block font-semibold">
                    2. TRAVEL RESPONSIBILITY
                  </span>
                  <p className="text-[11px] text-white/60">
                    Ultimate control remains inside your control parameters. Savoring local tofu in temple walls, trekking active basalt volcanoes, or boarding high-speed bullet trains must be undertaken based on private physical and intuitive judgements.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase block font-semibold">
                    3. OPEN-SOURCE LIBRARIES
                  </span>
                  <p className="text-[11px] text-white/60">
                    This platform integrates OpenStreetMap matrices and Leaflet projection standards. Real-time spatial tracking or distance vectors remain subject to the accuracy limits of external decentralized GIS operators.
                  </p>
                </div>

                <p className="text-[11px] text-white/40 mt-4 font-mono text-center">
                  REVISION CODE: 2026.06A • ZERO LIABILITY STANDARD
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 text-right">
                <button 
                  onClick={() => setShowTerms(false)}
                  className="px-5 py-2 bg-white text-black text-xs font-semibold rounded-full font-mono tracking-wider hover:bg-white/90 active:scale-95 transition-all cursor-pointer"
                >
                  I AGREE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GLOBAL SHARE TOAST ALERTS */}
      <AnimatePresence>
        {shareToast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-black/95 border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.25)] flex items-center gap-3 max-w-sm text-left"
          >
            <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
              <Share2 className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-semibold">
                SYSTEM COMMUNICATOR
              </span>
              <p className="text-xs text-white/90 font-medium leading-relaxed mt-0.5">
                {shareToast.message}
              </p>
            </div>
            <button
              onClick={() => setShareToast({ show: false, message: "" })}
              className="text-white/40 hover:text-white p-1 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
    </WanderfulContext.Provider>
  );
}
