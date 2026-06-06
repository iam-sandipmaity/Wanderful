import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  AlertCircle,
  ArrowLeft,
  BookOpen,
  Briefcase,
  Calendar,
  Check,
  Clock,
  Coins,
  Compass,
  Cpu,
  DollarSign,
  Eye,
  Layers,
  Loader2,
  Lock,
  MapPin,
  Printer,
  Share2,
  ShieldCheck,
  Sparkle,
  Sparkles
} from "lucide-react";
import MapView from "../components/MapView";
import VerticalTimeline from "../components/VerticalTimeline";
import { downloadItineraryIcs } from "../services/calendar";
import { describeWeatherCode, fetchWeatherForecast, WeatherForecast } from "../services/weather";
import { useWanderful } from "../state/WanderfulContext";

export default function TripPage() {
  const {
    activeActivityIdx,
    activeDayIdx,
    cachedSnapshot,
    handleShareItinerary,
    itinerary,
    isOffline,
    navigateTo,
    packedRegistry,
    setActiveActivityIdx,
    setActiveDayIdx,
    togglePackedItem
  } = useWanderful();
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast | null>(null);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [weatherError, setWeatherError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadWeather = async () => {
      if (!itinerary) return;

      setWeatherLoading(true);
      setWeatherError(null);

      try {
        const forecast = await fetchWeatherForecast(itinerary);
        if (!cancelled) {
          setWeatherForecast(forecast);
        }
      } catch (error: any) {
        if (!cancelled) {
          setWeatherError(error.message || "Weather forecast unavailable.");
        }
      } finally {
        if (!cancelled) {
          setWeatherLoading(false);
        }
      }
    };

    if (!isOffline) {
      loadWeather();
    }

    return () => {
      cancelled = true;
    };
  }, [itinerary, isOffline]);

  if (!itinerary) return null;

  const plannedDays = itinerary.days?.length || 0;
  const totalDays = Math.max(itinerary.durationDays || plannedDays || 1, 1);
  const plannedPercent = Math.min(100, Math.round((plannedDays / totalDays) * 100));
  const activeProgressPercent = Math.min(100, Math.round(((activeDayIdx + 1) / totalDays) * 100));
  const activeWeather = weatherForecast?.days[activeDayIdx] || weatherForecast?.days[0];

  return (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-6xl mx-auto w-full flex flex-col gap-8 pb-10"
            >
              
              {/* BACK CONTROLS */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => navigateTo("/")}
                  className="flex items-center gap-2 text-xs font-mono tracking-widest text-white/60 hover:text-white p-2 rounded-lg bg-white/5 border border-white/5 w-fit"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  RESET TRIP MATRIX
                </button>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-emerald-500/10 text-emerald-300 text-[10px] font-mono tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    OS Sync Perfect
                  </span>
                  <button
                    onClick={handleShareItinerary}
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold text-xs rounded-full hover:scale-105 active:scale-95 transition-all font-mono cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    SHARE ITINERARY
                  </button>
                  <button
                    onClick={() => downloadItineraryIcs(itinerary)}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold text-xs rounded-full hover:scale-105 active:scale-95 transition-all font-mono cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    EXPORT CALENDAR
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black font-semibold text-xs rounded-full hover:scale-105 active:scale-95 transition-all font-mono cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    PRINT DEEP VOUCHERS
                  </button>
                </div>
              </div>

              {/* OVERALL TRIP SPECIFICATION HEADER CARD */}
              <div className="liquid-glass rounded-[28px] p-6 md:p-8 border border-white/10 flex flex-col md:flex-row justify-between gap-6 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-white/80 text-[9px] font-mono tracking-wider uppercase">
                      {itinerary.travelStyle} VIBE
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-white/80 text-[9px] font-mono tracking-wider uppercase">
                      {itinerary.durationDays} DAYS INCLUDED
                    </span>
                    {itinerary.startDate && (
                      <span className="px-2 py-0.5 rounded bg-white/10 text-white/80 text-[9px] font-mono tracking-wider uppercase">
                        START {new Date(`${itinerary.startDate}T12:00:00`).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl md:text-4xl font-semibold tracking-tight uppercase font-display mb-2">
                    {itinerary.tripName}
                  </h2>
                  <p className="text-xs md:text-sm text-white/60 italic max-w-xl font-serif">
                    "{itinerary.tagline}"
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-left shrink-0 max-w-fit">
                  <span className="block text-[8px] font-mono text-white/40 tracking-widest uppercase">BUDGET GOAL TARGET</span>
                  <span className="text-xl md:text-2xl font-bold font-mono text-emerald-400 mt-0.5 block">
                    {itinerary.estimatedTotalCost}
                  </span>
                  <span className="text-[9px] text-white/30 block mt-0.5 leading-none">Includes local transfers and core retreats</span>
                </div>
              </div>

              {/* TRIP COMPLETION AND OFFLINE STATUS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-8 p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-left">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-[10px] font-mono tracking-[0.14em] text-cyan-400 uppercase flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5" />
                        JOURNEY PROGRESS MATRIX
                      </h4>
                      <p className="text-[10px] text-white/40 font-mono mt-1">
                        Day {Math.min(activeDayIdx + 1, totalDays)} of {totalDays} active · {plannedDays} day plans compiled
                      </p>
                    </div>
                    <span className="text-xs font-mono text-white/70">
                      {plannedPercent}% planned
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-black/50 border border-white/5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 transition-all duration-500"
                      style={{ width: `${activeProgressPercent}%` }}
                    />
                  </div>
                </div>

                <div className={`lg:col-span-4 p-5 rounded-2xl text-left border ${
                  isOffline
                    ? "bg-amber-400/[0.04] border-amber-400/20"
                    : "bg-emerald-400/[0.03] border-emerald-400/15"
                }`}>
                  <h4 className={`text-[10px] font-mono tracking-[0.14em] uppercase flex items-center gap-2 ${
                    isOffline ? "text-amber-300" : "text-emerald-300"
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${isOffline ? "bg-amber-300" : "bg-emerald-300 animate-pulse"}`} />
                    {isOffline ? "OFFLINE VIEW ACTIVE" : "LIVE NETWORK ACTIVE"}
                  </h4>
                  <p className="text-[11px] text-white/55 font-sans leading-relaxed mt-2">
                    {cachedSnapshot
                      ? `Current itinerary is locally cached from ${new Date(cachedSnapshot.cachedAt).toLocaleString()}. App shell and static assets are available through the service worker.`
                      : "App shell caching is active. Generate or load a trip to cache itinerary details locally."}
                  </p>
                </div>
              </div>

              {/* GRID INFORMATION SHEET */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* LEFT AT-A-GLANCE SUMMARY COLUMN (5/12) */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  
                  {/* VERTICAL TIMELINE ROADMAP CHECKPOINTS */}
                  <VerticalTimeline
                    itinerary={itinerary}
                    activeDayIdx={activeDayIdx}
                    setActiveDayIdx={setActiveDayIdx}
                  />

                  {/* Local weather forecast */}
                  <div className="p-5 rounded-2xl bg-sky-400/[0.02] border border-sky-400/10 text-left">
                    <h4 className="text-[10px] font-mono tracking-[0.14em] text-sky-300 uppercase mb-2 flex items-center gap-2">
                      <Compass className="w-3.5 h-3.5" />
                      LOCAL WEATHER CONDITIONS
                    </h4>
                    {weatherLoading && (
                      <div className="flex items-center gap-2 text-xs text-white/50 font-mono">
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Syncing forecast grid...
                      </div>
                    )}
                    {!weatherLoading && weatherError && (
                      <p className="text-xs text-amber-300/80 leading-relaxed">
                        {weatherError}
                      </p>
                    )}
                    {!weatherLoading && !weatherError && activeWeather && (
                      <div>
                        <div className="flex items-end justify-between gap-3 border-b border-white/5 pb-3 mb-3">
                          <div>
                            <span className="block text-[9px] font-mono text-white/40 uppercase">
                              {weatherForecast?.locationName}
                            </span>
                            <span className="text-lg font-semibold text-white font-display">
                              {describeWeatherCode(activeWeather.weatherCode)}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="block text-xl font-bold font-mono text-sky-300">
                              {Math.round(activeWeather.maxTemp)}°C
                            </span>
                            <span className="text-[9px] text-white/40 font-mono">
                              LOW {Math.round(activeWeather.minTemp)}°C
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                          <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                            <span className="text-white/40 block uppercase">Rain Chance</span>
                            <span className="text-white">{Math.round(activeWeather.precipitationProbability)}%</span>
                          </div>
                          <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                            <span className="text-white/40 block uppercase">Wind Max</span>
                            <span className="text-white">{Math.round(activeWeather.windSpeed)} km/h</span>
                          </div>
                        </div>
                        <p className="text-[10px] text-white/35 font-mono mt-3">
                          Forecast updated {weatherForecast ? new Date(weatherForecast.fetchedAt).toLocaleTimeString() : ""}
                        </p>
                      </div>
                    )}
                    {!weatherLoading && !weatherError && !activeWeather && (
                      <p className="text-xs text-white/45 leading-relaxed">
                        Weather requires itinerary coordinates. This trip does not include a mapped forecast anchor.
                      </p>
                    )}
                  </div>
                  
                  {/* Highlights section */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-left">
                    <h4 className="text-[10px] font-mono tracking-[0.14em] text-cyan-400 uppercase mb-3 flex items-center gap-2 border-b border-white/5 pb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      EXPEDITION HIGHLIGHTS
                    </h4>
                    <div className="space-y-2">
                      {itinerary.highlights?.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-white/80 shrink-0">
                          <Check className="w-3.5 h-3.5 text-cyan-300 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Budget distribution */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-left">
                    <h4 className="text-[10px] font-mono tracking-[0.14em] text-emerald-400 uppercase mb-3 flex items-center gap-2 border-b border-white/5 pb-2">
                      <DollarSign className="w-3.5 h-3.5" />
                      ESTIMATED BREAKDOWN
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                        <span className="block text-[9px] font-mono text-white/40 mb-1">Stays & Lodges</span>
                        <span className="block text-xs font-mono text-white">{itinerary.budgetBreakdown.stays}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                        <span className="block text-[9px] font-mono text-white/40 mb-1">Transit cost</span>
                        <span className="block text-xs font-mono text-white">{itinerary.budgetBreakdown.transport}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                        <span className="block text-[9px] font-mono text-white/40 mb-1">Dining quota</span>
                        <span className="block text-xs font-mono text-white">{itinerary.budgetBreakdown.food}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                        <span className="block text-[9px] font-mono text-white/40 mb-1">Retreats</span>
                        <span className="block text-xs font-mono text-white">{itinerary.budgetBreakdown.activities}</span>
                      </div>
                    </div>
                  </div>

                  {/* Packing Check */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-left">
                    <h4 className="text-[10px] font-mono tracking-[0.14em] text-purple-400 uppercase mb-1 flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5" />
                      ESSENTIAL PACKING REQUISITE
                    </h4>
                    <p className="text-[10px] text-white/40 mb-3 font-mono">Check items as you stash them</p>
                    <div className="space-y-1.5">
                      {itinerary.packingList?.map((p, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => togglePackedItem(p)}
                          className="w-full flex items-center gap-2.5 p-2 rounded-xl bg-black/20 hover:bg-black/40 border border-white/5 text-left transition-all"
                        >
                          <div className="w-4 h-4 rounded border border-white/20 flex items-center justify-center shrink-0">
                            {packedRegistry[p] && <Check className="w-3 h-3 text-cyan-400" />}
                          </div>
                          <span className={`text-xs ${packedRegistry[p] ? "text-white/40 line-through" : "text-white/90"}`}>
                            {p}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Protection and safety feedback */}
                  <div className="p-5 rounded-2xl bg-red-400/[0.02] border border-red-500/10 text-left">
                    <h4 className="text-[10px] font-mono tracking-[0.14em] text-red-400 uppercase mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      CULTURAL PACE & HEALTH PROMPTS
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed font-sans">
                      {itinerary.localSafetyAndPaceTips}
                    </p>
                  </div>

                </div>

                {/* RIGHT CHRONOLOGICAL PATHS COLUMN (7/12) */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  
                  {/* Day tabs indicator */}
                  <div className="p-2 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-1.5 overflow-x-auto">
                    {itinerary.days?.map((d, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveDayIdx(index)}
                        className={`px-4.5 py-2 rounded-xl text-xs font-mono tracking-widest transition-all ${
                          activeDayIdx === index
                            ? "bg-white text-black font-semibold shadow-lg"
                            : "text-white/55 hover:text-white hover:bg-white/5 btn"
                        }`}
                      >
                        DAY {d.dayNumber || index + 1}
                      </button>
                    ))}
                  </div>

                  {/* Detailing active day card */}
                  {itinerary.days && itinerary.days[activeDayIdx] && (
                    <motion.div
                      key={activeDayIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="liquid-glass rounded-[28px] p-6 text-left border border-white/10"
                    >
                      <div className="border-b border-white/5 pb-4 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <span className="block text-[8px] font-mono tracking-widest text-cyan-400 uppercase mb-0.5">
                            Active Itinerary Stage
                          </span>
                          <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-tight text-white font-display">
                            {itinerary.days[activeDayIdx].title}
                          </h3>
                        </div>
                        <div className="px-3.5 py-2 rounded-xl bg-black/40 border border-white/5">
                          <span className="block text-[8px] font-mono text-white/40 uppercase">Retreat Station</span>
                          <span className="text-xs font-bold text-white block mt-0.5">{itinerary.days[activeDayIdx].accommodations}</span>
                        </div>
                      </div>

                      {itinerary.days[activeDayIdx].tips && (
                        <div className="p-3 rounded-xl bg-cyan-400/[0.04] border border-cyan-400/10 text-cyan-300 text-xs leading-relaxed mb-6 flex items-start gap-2.5">
                          <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <p>
                            <span className="font-semibold text-cyan-200">Local Guide Alert:</span> {itinerary.days[activeDayIdx].tips}
                          </p>
                        </div>
                      )}

                      {/* Daily Activities sequence */}
                      <div className="space-y-6">
                        {itinerary.days[activeDayIdx].activities?.map((act, aIdx) => (
                          <div 
                            key={aIdx} 
                            onMouseEnter={() => setActiveActivityIdx(aIdx)}
                            onClick={() => setActiveActivityIdx(aIdx)}
                            className={`group relative pl-6 border-l-2 transition-all cursor-pointer py-2 rounded-r-xl ${
                              activeActivityIdx === aIdx 
                                ? "border-cyan-400 bg-white/[0.03] pl-8" 
                                : "border-white/10 hover:border-cyan-400/40"
                            }`}
                          >
                            <div className={`absolute left-[-5px] top-4.5 w-2 h-2 rounded-full bg-black border transition-all ${
                              activeActivityIdx === aIdx
                                ? "bg-cyan-400 border-cyan-400 scale-125"
                                : "border-white/30 group-hover:bg-cyan-400 group-hover:border-cyan-400"
                            }`} />
                            
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                              <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-mono text-white/60">
                                  {act.time}
                                </span>
                                <h5 className="font-bold text-sm text-white group-hover:text-cyan-400 transition-colors font-display">
                                  {act.title}
                                </h5>
                              </div>
                              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded self-start sm:self-auto">
                                Est. {act.cost}
                              </span>
                            </div>

                            <p className="text-xs text-white/60 leading-relaxed font-light mb-1 border-b border-transparent">
                              {act.description}
                            </p>

                            <div className="flex items-center gap-1.5 text-[10px] text-white/40 font-mono">
                              <MapPin className="w-3 h-3 text-cyan-400" />
                              <span>{act.locationName}</span>
                            </div>

                          </div>
                        ))}
                      </div>

                      {/* OpenStreetMap Integration */}
                      <div className="mt-8 border-t border-white/5 pt-6 hidden-print">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                              OSM Satellite Projection
                            </h4>
                            <p className="text-[10px] text-white/50 font-mono mt-0.5">
                              Real-time interactive matrix plot of targeted retreats for Day {activeDayIdx + 1}
                            </p>
                          </div>
                          
                          <div className="text-[10px] font-mono text-cyan-300 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20 animate-pulse">
                            Interactive Map Mode
                          </div>
                        </div>

                        <MapView 
                          activities={itinerary.days[activeDayIdx].activities} 
                          currentActivityIdx={activeActivityIdx} 
                        />
                      </div>

                    </motion.div>
                  )}

                </div>

              </div>

            </motion.div>
  );
}
