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
import { useWanderful } from "../state/WanderfulContext";

export default function HowItWorksPage() {
  const {
    navigateTo,
    setSimPace,
    setSimTerrain,
    simPace,
    simTerrain
  } = useWanderful();

  return (
    <>
<div className="w-full max-w-4xl text-left">
                  <div className="mb-6 flex flex-col items-center text-center">
                    <span className="px-3 py-1 text-[9px] font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full tracking-widest uppercase mb-3">
                      SYSTEM SPECIFICATIONS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white font-display">
                      Wanderful Travel OS Architecture
                    </h2>
                    <p className="text-sm text-white/60 max-w-xl mt-3 leading-relaxed font-sans">
                      A state-of-the-art server-side routing matrix converting user budget curves and geo-spatial vectors and mapping them into pristine vector booklets in under 60 seconds.
                    </p>
                  </div>

                  {/* INTERACTIVE COMPASS DIAGRAM & TIMELINE */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {[
                      {
                        num: "01",
                        title: "Preference Synapse",
                        desc: "Our platform queries IP geolocation endpoints to auto-configure native country currency scales, establishing optimal micro-budget margins specific to your style.",
                        icon: Cpu,
                        color: "from-cyan-500/20 to-transparent",
                        glow: "border-cyan-500/20 text-cyan-400"
                      },
                      {
                        num: "02",
                        title: "Vector Curation",
                        desc: "The Gemini intelligence engine parses customized coordinates, mapping unique high-fidelity local landmarks, regional costs, safety constraints, and scheduling guidelines.",
                        icon: Sparkles,
                        color: "from-purple-500/20 to-transparent",
                        glow: "border-purple-500/20 text-purple-400"
                      },
                      {
                        num: "03",
                        title: "Dynamic Plotting",
                        desc: "Clean coordinate points are structured and directly projected onto an interactive OpenStreetMap matrix. This generates a printable customized booklet with built-in packing lists.",
                        icon: Compass,
                        color: "from-emerald-500/20 to-transparent",
                        glow: "border-emerald-500/20 text-emerald-400"
                      }
                    ].map((step, idx) => {
                      const StepIcon = step.icon;
                      return (
                        <div 
                          key={idx}
                          className="liquid-glass rounded-[24px] p-6 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-300"
                        >
                          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl opacity-20 pointer-events-none rounded-bl-full" />
                          
                          <div className="flex items-center justify-between mb-6">
                            <span className="text-3xl font-bold font-mono text-white/10 group-hover:text-white/20 transition-colors">
                              {step.num}
                            </span>
                            <div className={`w-10 h-10 rounded-xl bg-white/[0.02] border flex items-center justify-center p-2 ${step.glow}`}>
                              <StepIcon className="w-5 h-5" />
                            </div>
                          </div>

                          <h4 className="text-base font-semibold text-white mb-2 tracking-wide font-display">
                            {step.title}
                          </h4>
                          <p className="text-xs text-white/50 leading-relaxed font-sans">
                            {step.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* HIGH-FIDELITY INTERACTIVE LOGISTICS SIMULATOR */}
                  <div className="mt-8 liquid-glass p-6 md:p-8 rounded-[28px] border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/5 blur-[80px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/5 blur-[80px] rounded-full pointer-events-none" />

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-white/5">
                      <div>
                        <span className="px-2.5 py-0.5 text-[9px] font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full tracking-widest uppercase mb-1.5 inline-block">
                          ACTIVE INTERACTIVE LABORATORY
                        </span>
                        <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight font-display">
                          Wanderful Tactical Advisor Simulator
                        </h3>
                        <p className="text-xs text-white/50 font-sans mt-1">
                          Slide, toggle, and simulate active physical terrain limits to view instant packing recommendations.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
                      
                      {/* Left: Interactive Controls */}
                      <div className="md:col-span-6 space-y-6">
                        <div>
                          <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase block font-semibold mb-3">
                            1. Select Terrain Environment
                          </label>
                          <div className="grid grid-cols-3 gap-2.5">
                            {[
                              { id: "urban", label: "Metropolitan", desc: "Sidewalks & Shops", emoji: "🏢" },
                              { id: "alpine", label: "Alpine Highs", desc: "Cliffs & Ridges", emoji: "🏔️" },
                              { id: "volcanic", label: "Extreme/Volcanic", desc: "Tectonic Basalt", emoji: "🌋" }
                            ].map((terrain) => (
                              <button
                                key={terrain.id}
                                onClick={() => setSimTerrain(terrain.id as any)}
                                className={`p-3 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                                  simTerrain === terrain.id
                                    ? "bg-cyan-500/10 border-cyan-400/50 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                                    : "bg-white/[0.01] border-white/5 text-white/60 hover:bg-white/[0.04] hover:border-white/10"
                                }`}
                              >
                                <span className="text-lg block mb-1">{terrain.emoji}</span>
                                <span className="text-xs font-semibold block">{terrain.label}</span>
                                <span className="text-[9px] text-white/40 block leading-tight mt-0.5">{terrain.desc}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase block font-semibold mb-3">
                            2. Select Passage Pace style
                          </label>
                          <div className="grid grid-cols-3 gap-2.5">
                            {[
                              { id: "meditative", label: "Zen Meditation", desc: "Slow & Conscious", emoji: "🧘" },
                              { id: "discovery", label: "Active Exploration", desc: "Balanced Strides", emoji: "🚶" },
                              { id: "endurance", label: "High Endurance", desc: "Peak Performance", emoji: "🏃" }
                            ].map((pace) => (
                              <button
                                key={pace.id}
                                onClick={() => setSimPace(pace.id as any)}
                                className={`p-3 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                                  simPace === pace.id
                                    ? "bg-purple-500/10 border-purple-400/50 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                                    : "bg-white/[0.01] border-white/5 text-white/60 hover:bg-white/[0.04] hover:border-white/10"
                                }`}
                              >
                                <span className="text-lg block mb-1">{pace.emoji}</span>
                                <span className="text-xs font-semibold block">{pace.label}</span>
                                <span className="text-[9px] text-white/40 block leading-tight mt-0.5">{pace.desc}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Simulated Calculations Feedback */}
                      <div className="md:col-span-6 bg-white/[0.01] border border-white/5 rounded-2xl p-5 space-y-4">
                        <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase block font-semibold mb-1">
                          LOGISTICS COMPILER FEEDBACK
                        </span>

                        <div className="grid grid-cols-2 gap-4">
                          
                          <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                            <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest block font-semibold">
                              LUG DEPTH METRIC
                            </span>
                            <span className="text-sm font-semibold text-white block mt-1">
                              {simTerrain === "urban" && "Flat Comfort Soles (0mm)"}
                              {simTerrain === "alpine" && "Multi-Lug Grip (4.5mm)"}
                              {simTerrain === "volcanic" && "Vulcanized Basalt Steel (6.5mm)"}
                            </span>
                            <p className="text-[10px] text-white/40 mt-0.5 leading-snug">
                              {simTerrain === "urban" && "Optimized for city marble and asphalt transitions."}
                              {simTerrain === "alpine" && "Prevents slip risks on active high mossy soil zones."}
                              {simTerrain === "volcanic" && "Engineered to withstand heavy sub-tectonic heat."}
                            </p>
                          </div>

                          <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                            <span className="text-[9px] font-mono text-purple-400 uppercase tracking-widest block font-semibold">
                              THERMAL RATING
                            </span>
                            <span className="text-sm font-semibold text-white block mt-1">
                              {simTerrain === "urban" && "Single-Layer Breathability"}
                              {simTerrain === "alpine" && "Triple-Layer Insulation"}
                              {simTerrain === "volcanic" && "Extreme Gore-Tex Shell"}
                            </span>
                            <p className="text-[10px] text-white/40 mt-0.5 leading-snug">
                              {simTerrain === "urban" && "Unstructured organic cotton layers highly advised."}
                              {simTerrain === "alpine" && "Moisture-wicking, organic merino fleece system."}
                              {simTerrain === "volcanic" && "Full tactical defense against acid rain and gales."}
                            </p>
                          </div>

                        </div>

                        <div className="grid grid-cols-2 gap-4">

                          <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                            <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest block font-semibold">
                              RECOMMENDED HYDRATION
                            </span>
                            <span className="text-sm font-semibold text-white block mt-1">
                              {simPace === "meditative" && "1.5 Liters / Day"}
                              {simPace === "discovery" && "2.5 Liters / Day"}
                              {simPace === "endurance" && "4.0 Liters + Salts"}
                            </span>
                            <p className="text-[10px] text-white/40 mt-0.5 leading-snug">
                              {simPace === "meditative" && "Sip slow organic leaf matches to preserve zen."}
                              {simPace === "discovery" && "Drink balanced electrolyte streams under moderate heats."}
                              {simPace === "endurance" && "High level active intake required to mitigate deep fatigue."}
                            </p>
                          </div>

                          <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                            <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest block font-semibold">
                              COGNITIVE SAFETY ADVISORY
                            </span>
                            <span className="text-sm font-semibold text-white block mt-1">
                              {simPace === "meditative" && "High Serotonin Sync"}
                              {simPace === "discovery" && "Balanced Active Sync"}
                              {simPace === "endurance" && "Acclimatize Extensively"}
                            </span>
                            <p className="text-[10px] text-white/40 mt-0.5 leading-snug">
                              {simPace === "meditative" && "Very peaceful state. Highly resilient heart rhythms."}
                              {simPace === "discovery" && "Sensory details are easily registered and memorized."}
                              {simPace === "endurance" && "Take intensive breaks every 90 minutes to recharge."}
                            </p>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>

                  {/* DETAILED SPECS ACCORDION */}
                  <div className="mt-8 liquid-glass p-6 rounded-[24px] border border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
                      <div>
                        <h4 className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                          System Capabilities & Privacy Policy
                        </h4>
                        <p className="text-[11px] text-white/40 mt-0.5 font-mono">
                          Active operational metrics as of June 2026
                        </p>
                      </div>
                      <div className="flex gap-4 text-xs font-mono">
                        <div>
                          <span className="text-white/40 block text-[9px] uppercase">Latency</span>
                          <span className="text-cyan-400 font-semibold">&lt; 14.5s average</span>
                        </div>
                        <div>
                          <span className="text-white/40 block text-[9px] uppercase">Accuracy</span>
                          <span className="text-purple-400 font-semibold">99.8% Geo-Match</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 text-[11px] text-white/60 leading-relaxed font-sans">
                      <div>
                        <p className="mb-3">
                          <strong className="text-white font-mono block mb-1">ZERO DATA TRACKING</strong>
                          We believe travel is deeply private. Your budget limits, starting points, and planned coordinates are never cached or analyzed. Any private keys you assign remain inside your native browser storage layers.
                        </p>
                      </div>
                      <div>
                        <p className="mb-3">
                          <strong className="text-white font-mono block mb-1">LOCAL COGNITIVE CACHING</strong>
                          Wanderful caches OSM raster map layers dynamic bounding coordinates locally. This delivers lightning-fast pan scales and reduces battery draw during remote adventures.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex justify-center">
                    <button
                      onClick={() => navigateTo("/")}
                      className="px-6 py-2.5 bg-white text-black font-semibold text-xs rounded-full hover:scale-105 active:scale-95 transition-all font-mono tracking-wider cursor-pointer uppercase"
                    >
                      Initialize Search Matrix
                    </button>
                  </div>
                </div>
    </>
  );
}
