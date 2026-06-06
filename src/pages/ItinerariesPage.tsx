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
import { PRE_CURATED_ITINERARIES } from "../data";
import { useWanderful } from "../state/WanderfulContext";

export default function ItinerariesPage() {
  const {
    curatedSearch,
    curatedStyle,
    handleLoadCuratedItinerary,
    setCuratedSearch,
    setCuratedStyle
  } = useWanderful();

  return (
    <>
<div className="w-full text-left">
                  <div className="mb-10 flex flex-col items-center text-center">
                    <span className="px-3 py-1 text-[9px] font-mono text-purple-400 bg-purple-400/10 border border-purple-400/20 rounded-full tracking-widest uppercase mb-3">
                      CURATED CLASSICS ARCHIVE
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white font-display">
                      Pre-Curated Luxury Escapes
                    </h2>
                    <p className="text-sm text-white/60 max-w-lg mt-3 leading-relaxed font-sans">
                      Skip generation and instantly synchronize your platform with legendary expert-made travel matrices, complete with interactive OSM vectors and coordinates.
                    </p>
                  </div>
                    {/* SEARCH & STYLE FILTER BAR */}
                  <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-[20px]">
                    <div className="flex flex-wrap gap-2 w-full md:w-auto">
                      {["All", "Luxury", "Adventure", "Relaxed", "Food"].map((style) => (
                        <button
                          key={style}
                          onClick={() => setCuratedStyle(style)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider cursor-pointer transition-all uppercase ${
                            curatedStyle === style
                              ? "bg-purple-500/20 text-purple-300 border border-purple-400/40 shadow-[0_0_10px_rgba(168,85,247,0.15)]"
                              : "bg-white/[0.01] border border-white/5 text-white/50 hover:bg-white/[0.04] hover:text-white/80"
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>

                    <div className="relative w-full md:w-72">
                      <span className="absolute inset-y-0 left-3.5 flex items-center text-white/30 text-xs">
                        🔍
                      </span>
                      <input
                        type="text"
                        placeholder="SEARCH ARCHIVE CODES..."
                        value={curatedSearch}
                        onChange={(e) => setCuratedSearch(e.target.value)}
                        className="w-full pl-9 pr-8 py-2 bg-black/40 border border-white/10 rounded-full text-xs text-white placeholder-white/30 focus:outline-none focus:border-purple-400/50 transition-all font-mono uppercase tracking-wider"
                      />
                      {curatedSearch && (
                        <button
                          onClick={() => setCuratedSearch("")}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-white/40 hover:text-white cursor-pointer"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>

                  {(() => {
                    const filteredCuratedList = PRE_CURATED_ITINERARIES.filter((item) => {
                      const matchesStyle = curatedStyle === "All" || item.travelStyle === curatedStyle;
                      const matchesSearch = item.tripName.toLowerCase().includes(curatedSearch.toLowerCase()) ||
                                            item.destination.toLowerCase().includes(curatedSearch.toLowerCase()) ||
                                            item.tagline.toLowerCase().includes(curatedSearch.toLowerCase());
                      return matchesStyle && matchesSearch;
                    });

                    if (filteredCuratedList.length === 0) {
                      return (
                        <div className="w-full text-center py-16 px-4 rounded-3xl bg-white/[0.01] border border-white/5 text-white/40 font-mono text-sm">
                          <div>🛰️</div>
                          <p className="mt-3 text-xs tracking-widest uppercase">
                            No Matching Curated Matrices Located
                          </p>
                          <p className="text-[11px] text-white/30 mt-1 max-w-xs mx-auto font-sans">
                            Adjust your active style filters or enter a different spatial keyword parameter.
                          </p>
                        </div>
                      );
                    }

                    return (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredCuratedList.map((item, idx) => {
                          // Custom borders and tags according to travel style
                          let glowTheme = "border-cyan-400/10 hover:border-cyan-400/30 text-cyan-300 bg-cyan-400/5";
                          if (item.travelStyle === "Luxury") {
                            glowTheme = "border-amber-400/10 hover:border-amber-400/30 text-amber-300 bg-amber-400/5";
                          } else if (item.travelStyle === "Food") {
                            glowTheme = "border-purple-400/10 hover:border-purple-400/30 text-purple-300 bg-purple-400/5";
                          } else if (item.travelStyle === "Relaxed") {
                            glowTheme = "border-emerald-400/10 hover:border-emerald-400/30 text-emerald-300 bg-emerald-400/5";
                          }

                          return (
                            <div 
                              key={idx}
                              className="liquid-glass rounded-[28px] p-6 border border-white/5 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 group"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-4 mb-4">
                                  <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${glowTheme}`}>
                                    {item.travelStyle} STYLE
                                  </span>
                                  <div className="flex items-center gap-1 text-[11px] font-mono text-white/40">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>{item.durationDays} Days</span>
                                  </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight font-display mb-2 group-hover:text-glow transition-all">
                                  {item.tripName}
                                </h3>
                                
                                <p className="text-xs text-white/50 mb-3 font-mono">
                                  📍 {item.destination} — Estimated: <span className="text-emerald-400 font-bold">{item.estimatedTotalCost}</span>
                                </p>

                            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                              {item.tagline}
                            </p>

                            {/* HOURLY SPOTLIGHT PILLS */}
                            <div className="space-y-2.5 mb-6">
                              <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase block font-semibold">
                                Journey Highlights
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {item.highlights.map((h, hIdx) => (
                                  <span 
                                    key={hIdx} 
                                    className="text-[10.5px] bg-white/[0.02] border border-white/5 px-2.5 py-1 rounded-lg text-white/70 block font-sans"
                                  >
                                    ✨ {h}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-white/5">
                            <button
                              onClick={() => handleLoadCuratedItinerary(item)}
                              className="w-full py-2.5 bg-white text-black hover:bg-white/90 text-xs font-semibold rounded-full font-mono tracking-widest transition-all cursor-pointer uppercase flex items-center justify-center gap-1.5"
                            >
                              <Sparkle className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "5s" }} />
                              Launch Retreat Path
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    </div>
                  );
                })()}
                </div>
    </>
  );
}
