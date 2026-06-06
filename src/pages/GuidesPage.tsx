import { AnimatePresence, motion } from "motion/react";
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
import { TRAVEL_GUIDES } from "../data";
import { useWanderful } from "../state/WanderfulContext";

export default function GuidesPage() {
  const {
    expandedGuideId,
    guideCategory,
    guideSearch,
    setExpandedGuideId,
    setGuideCategory,
    setGuideSearch
  } = useWanderful();

  return (
    <>
<div className="w-full max-w-4xl text-left">
                  <div className="mb-10 flex flex-col items-center text-center">
                    <span className="px-3 py-1 text-[9px] font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full tracking-widest uppercase mb-3">
                      TRAVEL INTELLIGENCE LEDGER
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white font-display">
                      Custom Cultural & Spatial Guides
                    </h2>
                    <p className="text-sm text-white/60 max-w-lg mt-3 leading-relaxed font-sans">
                      Adapt seamlessly to regional environments. Deconstruct local spiritual protocols, physical safety tips, onsen etiquette, and trade models.
                    </p>
                  </div>

                  {/* SEARCH & CATEGORY FILTER BAR */}
                  <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-[20px]">
                    <div className="flex flex-wrap gap-2 w-full md:w-auto">
                      {["All", "Culture", "Wellness", "Logistics"].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setGuideCategory(cat)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider cursor-pointer transition-all uppercase ${
                            guideCategory === cat
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 shadow-[0_0_10px_rgba(52,211,153,0.15)]"
                              : "bg-white/[0.01] border border-white/5 text-white/50 hover:bg-white/[0.04] hover:text-white/80"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    <div className="relative w-full md:w-72">
                      <span className="absolute inset-y-0 left-3.5 flex items-center text-white/30 text-xs">
                        🔍
                      </span>
                      <input
                        type="text"
                        placeholder="SEARCH INTEL LEDGERS..."
                        value={guideSearch}
                        onChange={(e) => setGuideSearch(e.target.value)}
                        className="w-full pl-9 pr-8 py-2 bg-black/40 border border-white/10 rounded-full text-xs text-white placeholder-white/30 focus:outline-none focus:border-emerald-400/50 transition-all font-mono uppercase tracking-wider"
                      />
                      {guideSearch && (
                        <button
                          onClick={() => setGuideSearch("")}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-white/40 hover:text-white cursor-pointer"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>

                  {(() => {
                    const filteredGuides = TRAVEL_GUIDES.filter((guide) => {
                      const matchesCategory = guideCategory === "All" ||
                        (guideCategory === "Culture" && (guide.category.includes("Culture") || guide.category.includes("Spiritual"))) ||
                        (guideCategory === "Wellness" && (guide.category.includes("Health") || guide.category.includes("Safety") || guide.category.includes("Wellbeing"))) ||
                        (guideCategory === "Logistics" && (guide.category.includes("Finance") || guide.category.includes("Logistics") || guide.category.includes("Trade")));

                      const matchesSearch = guide.title.toLowerCase().includes(guideSearch.toLowerCase()) ||
                        guide.subtitle.toLowerCase().includes(guideSearch.toLowerCase()) ||
                        guide.fullStory.toLowerCase().includes(guideSearch.toLowerCase()) ||
                        guide.category.toLowerCase().includes(guideSearch.toLowerCase());

                      return matchesCategory && matchesSearch;
                    });

                    if (filteredGuides.length === 0) {
                      return (
                        <div className="w-full text-center py-16 px-4 rounded-3xl bg-white/[0.01] border border-white/5 text-white/40 font-mono text-sm">
                          <div>📚</div>
                          <p className="mt-3 text-xs tracking-widest uppercase">
                            No Matching Intelligence Ledger Found
                          </p>
                          <p className="text-[11px] text-white/30 mt-1 max-w-xs mx-auto font-sans">
                            Adjust your active category filter pills or type a different travel query string.
                          </p>
                        </div>
                      );
                    }

                    return (
                      <div className="space-y-4">
                        {filteredGuides.map((guide) => {
                          const isExpanded = expandedGuideId === guide.id;
                          return (
                            <div 
                              key={guide.id}
                              className={`liquid-glass rounded-[24px] border transition-all duration-300 overflow-hidden ${
                                isExpanded ? "border-cyan-400/30 bg-white/[0.03]" : "border-white/5 hover:border-white/10"
                              }`}
                            >
                              {/* COLLAPSED HEADER PANEL */}
                              <div 
                                onClick={() => setExpandedGuideId(isExpanded ? null : guide.id)}
                                className="p-6 flex items-center justify-between gap-6 cursor-pointer select-none"
                              >
                                <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-cyan-400 shadow-md">
                                    {(guide.category.includes("Spiritual") || guide.category.includes("Culture")) && <Compass className="w-5 h-5" />}
                                    {(guide.category.includes("Health") || guide.category.includes("Safety") || guide.category.includes("Wellbeing")) && <ShieldCheck className="w-5 h-5" />}
                                    {(guide.category.includes("Finance") || guide.category.includes("Logistics") || guide.category.includes("Trade")) && <Coins className="w-5 h-5" />}
                                  </div>
                                  <div>
                                    <span className="text-[9px] font-mono text-cyan-400/70 tracking-widest uppercase font-bold">
                                      {guide.category} • {guide.readTime}
                                    </span>
                                    <h3 className="text-base md:text-lg font-semibold text-white tracking-wide font-display mt-0.5">
                                      {guide.title}
                                    </h3>
                                    <p className="text-xs text-white/40 mt-0.5">
                                      {guide.subtitle}
                                    </p>
                                  </div>
                                </div>

                                <button className="text-xs font-mono text-cyan-400 hover:text-cyan-300">
                                  {isExpanded ? "COLLAPSE [-]" : "READ LEDGER [+]"}
                                </button>
                              </div>

                              {/* EXPANDED CONTENT STORY */}
                              <AnimatePresence initial={false}>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="border-t border-white/5 bg-black/40 overflow-hidden"
                                  >
                                    <div className="p-6 md:p-8 space-y-6">
                                      <div className="text-xs text-slate-300 leading-relaxed font-sans max-w-2xl">
                                        <p className="font-semibold text-white text-sm mb-3">Protocol Narrative</p>
                                        {guide.fullStory}
                                      </div>

                                      <div className="space-y-2.5">
                                        <span className="text-[10px] font-mono tracking-widest text-cyan-400/90 uppercase block font-semibold">
                                          Tactical Checklists
                                        </span>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                          {guide.bullets.map((b, bIdx) => (
                                            <div 
                                              key={bIdx}
                                              className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3"
                                            >
                                              <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                                              <span className="text-xs text-slate-200 font-sans leading-relaxed">
                                                {b}
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
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
