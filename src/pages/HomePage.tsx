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
  Sliders,
  Sparkle,
  Sparkles
} from "lucide-react";
import { useWanderful } from "../state/WanderfulContext";

export default function HomePage() {
  const {
    SUPPORTED_CURRENCIES,
    activeCurrency,
    errorStatus,
    handleGenerateTrip,
    handleLoadDemo,
    loading,
    planner,
    setActiveCurrency,
    setPlanner
  } = useWanderful();

  return (
    <>
{/* HUD FLOATING READOUT STATS */}
                  <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-visible">
                    {/* HUD 1 */}
                    <div className="absolute top-[8%] left-[-15%] animate-float">
                      <div className="px-4 py-3 rounded-2xl liquid-glass backdrop-blur-md text-left flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 border border-cyan-400/20">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-white/40 tracking-wider">CONNECTIVITY</p>
                          <p className="text-xs font-bold leading-none mt-0.5">120+ destinations</p>
                        </div>
                      </div>
                    </div>

                    {/* HUD 2 */}
                    <div className="absolute bottom-[20%] left-[-11%] animate-float-reverse">
                      <div className="px-4 py-3 rounded-2xl liquid-glass backdrop-blur-md text-left flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 border border-amber-400/20">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-white/40 tracking-wider">GEN ENGINE</p>
                          <p className="text-xs font-bold leading-none mt-0.5">Plans in under 60 sec</p>
                        </div>
                      </div>
                    </div>

                    {/* HUD 3 */}
                    <div className="absolute top-[35%] right-[-15%] animate-float">
                      <div className="px-4 py-3 rounded-2xl liquid-glass backdrop-blur-md text-left flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-400/10 flex items-center justify-center text-purple-400 border border-purple-400/20">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-white/40 tracking-wider">OS PARALLEL</p>
                          <p className="text-xs font-bold leading-none mt-0.5">Preference Adaptive</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FLOATING TYPOGRAPHY ACCENT FOR TRAVEL OS */}
                  <div className="mb-4">
                    <span 
                      className="inline-block text-[10px] font-mono tracking-[0.25em] text-white/70 uppercase select-none rotate-[-4deg] border-b border-white/20 pb-1"
                      style={{ fontFamily: "'Dirtyline', sans-serif" }}
                    >
                      personalized travel OS
                    </span>
                  </div>

                  {/* TWO-ROW HEADINGS */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-light font-display tracking-tight text-white max-w-4xl leading-[1.1] mb-2 font-semibold">
                    Venture without edges.
                  </h1>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight text-white/55 font-light font-display max-w-4xl leading-[1.1] mb-8 font-semibold">
                    Uncover with keen instinct.
                  </h2>

                  {/* COMPACT LIQUID GLASS SEARCH & PLANNER CARD */}
                  <form 
                    id="planner-anchor-card"
                    onSubmit={handleGenerateTrip}
                    className="w-full max-w-[860px] liquid-glass rounded-[32px] p-5 mb-10 text-left relative focus-within:ring-2 focus-within:ring-white/20 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-3">
                      
                      {/* starting city */}
                      <div className="w-full md:flex-1 relative">
                        <label className="block text-[8px] font-mono tracking-widest text-white/40 uppercase mb-1 px-1">Starting City</label>
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40">
                            <MapPin className="w-3.5 h-3.5" />
                          </span>
                          <input
                            type="text"
                            required
                            placeholder="Starting city"
                            value={planner.startingCity}
                            onChange={(e) => setPlanner({ ...planner, startingCity: e.target.value })}
                            className="w-full bg-white/[0.04] border border-white/5 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-white/30 focus:outline-none focus:bg-white/[0.08] focus:border-white/30 transition-all"
                          />
                        </div>
                      </div>

                      {/* Budget & Currency selection */}
                      <div className="w-full md:w-56 flex gap-1.5 items-end relative">
                        <div className="flex-1 min-w-0">
                          <label className="block text-[8px] font-mono tracking-widest text-white/40 uppercase mb-1 px-1">Budget Goal</label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-xs font-mono">
                              {SUPPORTED_CURRENCIES.find(c => c.code === activeCurrency)?.symbol || "$"}
                            </span>
                            <input
                              type="text"
                              placeholder="Amount"
                              value={planner.budget}
                              onChange={(e) => setPlanner({ ...planner, budget: e.target.value })}
                              className="w-full bg-white/[0.04] border border-white/5 rounded-2xl pl-8 pr-2 py-2.5 text-xs text-white placeholder:text-white/30 focus:outline-none focus:bg-white/[0.08] focus:border-white/30 transition-all"
                            />
                          </div>
                        </div>
                        <div className="w-20 shrink-0">
                          <label className="block text-[8px] font-mono tracking-widest text-white/40 uppercase mb-1 px-1">Currency</label>
                          <select
                            value={activeCurrency}
                            onChange={(e) => setActiveCurrency(e.target.value)}
                            className="w-full bg-black border border-white/5 rounded-2xl px-2 py-2.5 text-xs text-white tracking-wider focus:outline-none focus:border-white/30 transition-all cursor-pointer appearance-none text-center font-mono"
                          >
                            {SUPPORTED_CURRENCIES.map((c) => (
                              <option key={c.code} value={c.code}>
                                {c.code}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Trip Length days */}
                      <div className="w-full md:w-28 relative">
                        <label className="block text-[8px] font-mono tracking-widest text-white/40 uppercase mb-1 px-1">Trip length</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                            <Calendar className="w-3.5 h-3.5" />
                          </span>
                          <select
                            value={planner.days}
                            onChange={(e) => setPlanner({ ...planner, days: e.target.value })}
                            className="w-full bg-black border border-white/5 rounded-2xl pl-9 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 transition-all cursor-pointer appearance-none"
                          >
                            <option value="2">2 Days</option>
                            <option value="3">3 Days</option>
                            <option value="4">4 Days</option>
                            <option value="5">5 Days</option>
                            <option value="7">7 Days</option>
                            <option value="10">10 Days</option>
                          </select>
                        </div>
                      </div>

                      {/* Style drop */}
                      <div className="w-full md:w-36 relative">
                        <label className="block text-[8px] font-mono tracking-widest text-white/40 uppercase mb-1 px-1">Travel Style</label>
                        <div className="relative">
                          <span className="absolute left-3.2 top-1/2 -translate-y-1/2 text-white/40">
                            <Sliders className="w-3.5 h-3.5" />
                          </span>
                          <select
                            value={planner.travelStyle}
                            onChange={(e) => setPlanner({ ...planner, travelStyle: e.target.value })}
                            className="w-full bg-black border border-white/5 rounded-2xl pl-9 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 transition-all cursor-pointer appearance-none"
                          >
                            <option value="Adventure">Adventure</option>
                            <option value="Relaxed">Relaxed</option>
                            <option value="Family">Family</option>
                            <option value="Luxury">Luxury</option>
                            <option value="Backpacking">Backpacking</option>
                            <option value="Food">Food</option>
                            <option value="Nature">Nature</option>
                          </select>
                        </div>
                      </div>

                      {/* Submission */}
                      <div className="w-full md:w-auto pt-3 md:pt-4">
                        <button
                          type="submit"
                          className="w-full md:w-auto px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:scale-105 active:scale-95 transition-all text-xs font-mono tracking-wider cursor-pointer"
                        >
                          Generate my trip
                        </button>
                      </div>

                    </div>
                  </form>

                  {/* PREVIEW LAUNCH TRIGGER */}
                  <div className="flex items-center gap-2 mb-8 select-none">
                    <span className="text-[11px] font-mono text-white/40">Unsure of coordinates?</span>
                    <button
                      type="button"
                      onClick={handleLoadDemo}
                      className="px-3 py-1 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-[10px] rounded-full font-mono tracking-widest transition-all cursor-pointer"
                    >
                      LOAD PRE-LAUNCH ARCHIVE (DEMO)
                    </button>
                  </div>

                  {/* BOTTOM INFORMATION BLOCK */}
                  <div className="max-w-[620px] transition-all duration-1000 delay-300">
                    <p className="text-[14px] md:text-[15px] leading-relaxed">
                      <span className="text-white">Our smart itineraries shape around you — your rhythm, your vibe, your hunger for adventure.</span>
                      <span className="text-white/55"> Each getaway is tailored, seamless, and wholly yours.</span>
                    </p>

                    {/* ATTRIBUTE BARS */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:gap-3">
                      {[
                        "Personalized itineraries",
                        "Budget aware",
                        "Bring your own AI key",
                        "Privacy focused"
                      ].map((chip) => (
                        <span 
                          key={chip}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-white/70 bg-white/[0.02] border border-white/5 rounded-full px-3 py-1 font-display"
                        >
                          <Check className="w-3 h-3 text-cyan-400" />
                          {chip}
                        </span>
                      ))}
                    </div>

                    {/* EXTRA ERROR BOX IF NEEDED */}
                    <AnimatePresence>
                      {errorStatus && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-6 p-4 rounded-xl border border-red-500/15 bg-red-950/20 text-xs text-red-200 text-left flex items-start gap-2.5"
                        >
                          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <div>
                            <strong>Connection Terminated:</strong> {errorStatus}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* BRAND SECURITY RATING */}
                    <div className="mt-8 flex items-center justify-center gap-2 text-white/60">
                      <Lock className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span className="text-[10px] font-mono font-medium tracking-[0.14em]">
                        SECURE BY DESIGN. ZERO DATA LEAKS.
                      </span>
                    </div>

                  </div>
    </>
  );
}
