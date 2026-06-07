import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  Compass,
  Crown,
  Flame,
  Globe2,
  MapPinned,
  Search,
  Sparkles,
  Utensils,
  Waves,
  X,
  type LucideIcon
} from "lucide-react";
import { PRE_CURATED_ITINERARIES } from "../data";
import { useWanderful } from "../state/WanderfulContext";

const styleFilters = ["All", "Luxury", "Adventure", "Relaxed", "Food"];
const regionFilters = ["All", "Europe", "Asia", "Americas", "Africa", "Oceania"];
const PAGE_SIZE = 12;

const styleThemes: Record<string, { icon: LucideIcon; badge: string; iconWrap: string }> = {
  Luxury: {
    icon: Crown,
    badge: "border-amber-400/20 text-amber-300 bg-amber-400/8",
    iconWrap: "border-amber-400/20 text-amber-300 bg-amber-400/10"
  },
  Adventure: {
    icon: Flame,
    badge: "border-cyan-400/20 text-cyan-300 bg-cyan-400/8",
    iconWrap: "border-cyan-400/20 text-cyan-300 bg-cyan-400/10"
  },
  Relaxed: {
    icon: Waves,
    badge: "border-emerald-400/20 text-emerald-300 bg-emerald-400/8",
    iconWrap: "border-emerald-400/20 text-emerald-300 bg-emerald-400/10"
  },
  Food: {
    icon: Utensils,
    badge: "border-purple-400/20 text-purple-300 bg-purple-400/8",
    iconWrap: "border-purple-400/20 text-purple-300 bg-purple-400/10"
  },
  default: {
    icon: Compass,
    badge: "border-white/10 text-white/65 bg-white/[0.03]",
    iconWrap: "border-white/10 text-white/55 bg-white/[0.03]"
  }
};

function getItineraryRegion(destination: string) {
  const value = destination.toLowerCase();

  if (
    [
      "canada",
      "usa",
      "california",
      "arizona",
      "alaska",
      "oregon",
      "chile",
      "argentina",
      "brazil",
      "mexico",
      "peru"
    ].some((needle) => value.includes(needle))
  ) {
    return "Americas";
  }

  if (
    [
      "morocco",
      "south africa",
      "egypt",
      "tanzania",
      "zanzibar"
    ].some((needle) => value.includes(needle))
  ) {
    return "Africa";
  }

  if (
    [
      "australia",
      "tasmania",
      "new zealand"
    ].some((needle) => value.includes(needle))
  ) {
    return "Oceania";
  }

  if (
    [
      "japan",
      "india",
      "indonesia",
      "bali",
      "south korea",
      "korea",
      "thailand",
      "uae",
      "dubai",
      "qatar",
      "oman",
      "vietnam",
      "singapore",
      "hong kong",
      "taiwan",
      "jordan",
      "turkiye"
    ].some((needle) => value.includes(needle))
  ) {
    return "Asia";
  }

  return "Europe";
}

export default function ItinerariesPage() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const {
    curatedSearch,
    curatedStyle,
    handleLoadCuratedItinerary,
    setCuratedSearch,
    setCuratedStyle
  } = useWanderful();

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeRegion, curatedSearch, curatedStyle]);

  const filteredCuratedList = useMemo(() => {
    return PRE_CURATED_ITINERARIES.filter((item) => {
      const query = curatedSearch.toLowerCase();
      const region = getItineraryRegion(item.destination);
      const matchesStyle = curatedStyle === "All" || item.travelStyle === curatedStyle;
      const matchesRegion = activeRegion === "All" || region === activeRegion;
      const matchesSearch =
        item.tripName.toLowerCase().includes(query) ||
        item.destination.toLowerCase().includes(query) ||
        item.tagline.toLowerCase().includes(query) ||
        region.toLowerCase().includes(query);

      return matchesStyle && matchesRegion && matchesSearch;
    });
  }, [activeRegion, curatedSearch, curatedStyle]);

  const visibleCuratedList = filteredCuratedList.slice(0, visibleCount);
  const hasMoreRoutes = visibleCount < filteredCuratedList.length;

  return (
    <div className="w-full text-left">
      <section className="mb-8 flex flex-col items-center text-center">
        <span className="px-3 py-1 text-[9px] font-mono text-purple-400 bg-purple-400/10 border border-purple-400/20 rounded-full tracking-widest uppercase mb-3">
          CURATED ITINERARIES
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white font-display">
          Ready-made routes with polish.
        </h2>
        <p className="text-sm text-white/60 max-w-xl mt-3 leading-relaxed font-sans">
          Browse expert-made journeys with mapped stops, budget cues, daily structure, and highlights you can launch instantly.
        </p>
      </section>

      <section className="mb-8 liquid-glass rounded-[24px] p-4 md:p-5 border border-white/5">
        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {styleFilters.map((style) => {
                const isActive = curatedStyle === style;
                return (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setCuratedStyle(style)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider cursor-pointer transition-all uppercase border ${
                      isActive
                        ? "bg-purple-500/20 text-purple-200 border-purple-400/40 shadow-[0_0_12px_rgba(168,85,247,0.14)]"
                        : "bg-white/[0.01] border-white/5 text-white/50 hover:bg-white/[0.04] hover:text-white/80"
                    }`}
                  >
                    {style}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30 pointer-events-none" />
              <input
                type="text"
                placeholder="SEARCH ROUTES"
                value={curatedSearch}
                onChange={(e) => setCuratedSearch(e.target.value)}
                className="w-full pl-9 pr-9 py-2.5 bg-black/40 border border-white/10 rounded-full text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400/50 transition-all font-mono uppercase tracking-wider"
              />
              {curatedSearch && (
                <button
                  type="button"
                  onClick={() => setCuratedSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white cursor-pointer p-1 rounded-full hover:bg-white/5 transition-all"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex flex-col xl:flex-row gap-4 xl:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {regionFilters.map((region) => {
                const isActive = activeRegion === region;
                return (
                  <button
                    key={region}
                    type="button"
                    onClick={() => setActiveRegion(region)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider cursor-pointer transition-all uppercase border inline-flex items-center gap-1.5 ${
                      isActive
                        ? "bg-cyan-500/15 text-cyan-200 border-cyan-400/35 shadow-[0_0_12px_rgba(34,211,238,0.12)]"
                        : "bg-white/[0.01] border-white/5 text-white/50 hover:bg-white/[0.04] hover:text-white/80"
                    }`}
                  >
                    <Globe2 className="w-3.5 h-3.5" />
                    {region}
                  </button>
                );
              })}
            </div>

            <div className="text-[10px] font-mono text-white/35 tracking-widest uppercase">
              Showing {Math.min(visibleCount, filteredCuratedList.length)} of {filteredCuratedList.length} routes
            </div>
          </div>
        </div>
      </section>

      {filteredCuratedList.length === 0 ? (
        <section className="w-full text-center py-16 px-4 rounded-[28px] bg-white/[0.01] border border-white/5 text-white/40">
          <div className="mx-auto w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-purple-300">
            <Search className="w-5 h-5" />
          </div>
          <p className="mt-4 text-xs tracking-widest uppercase font-mono">
            No matching routes found
          </p>
          <p className="text-[11px] text-white/35 mt-1 max-w-xs mx-auto font-sans leading-relaxed">
            Adjust the style or region filter, or search by a destination, route name, or travel mood.
          </p>
        </section>
      ) : (
        <>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleCuratedList.map((item, idx) => {
              const theme = styleThemes[item.travelStyle] || styleThemes.default;
              const StyleIcon = theme.icon;

              return (
                <article
                  key={`${item.tripName}-${idx}`}
                  className="liquid-glass rounded-[28px] p-5 md:p-6 border border-white/5 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0 ${theme.iconWrap}`}>
                          <StyleIcon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border inline-flex ${theme.badge}`}>
                            {item.travelStyle} style
                          </span>
                          <div className="mt-2 flex items-center gap-1.5 text-[11px] font-mono text-white/40">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{item.durationDays} days</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight font-display mb-3 group-hover:text-glow transition-all">
                      {item.tripName}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50 mb-4 font-mono">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPinned className="w-3.5 h-3.5 text-cyan-300" />
                        {item.destination}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="w-3.5 h-3.5 text-emerald-300" />
                        Estimated <span className="text-emerald-300 font-bold">{item.estimatedTotalCost}</span>
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                      {item.tagline}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase block font-semibold">
                        Journey highlights
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.highlights.map((highlight, highlightIdx) => (
                          <span
                            key={highlightIdx}
                            className="text-[10.5px] bg-white/[0.02] border border-white/5 px-2.5 py-1 rounded-lg text-white/70 inline-flex items-center gap-1.5 font-sans"
                          >
                            <Check className="w-3 h-3 text-purple-300 shrink-0" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => handleLoadCuratedItinerary(item)}
                      className="w-full py-2.5 bg-white text-black hover:bg-white/90 text-xs font-semibold rounded-full font-mono tracking-widest transition-all cursor-pointer uppercase flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Launch route
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </section>

          {hasMoreRoutes && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-white hover:bg-white/[0.08] hover:border-white/20 text-xs font-semibold font-mono tracking-widest uppercase transition-all cursor-pointer inline-flex items-center gap-2"
              >
                Load more routes
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
