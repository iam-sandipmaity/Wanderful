import { AnimatePresence, motion } from "motion/react";
import {
  BookOpen,
  Check,
  ChevronDown,
  Coins,
  Compass,
  HeartPulse,
  Search,
  ShieldCheck,
  Sparkles,
  X,
  type LucideIcon
} from "lucide-react";
import { TRAVEL_GUIDES } from "../data";
import { useWanderful } from "../state/WanderfulContext";

const guideFilters = ["All", "Culture", "Wellness", "Logistics"];

const guideThemes: Record<string, { icon: LucideIcon; accent: string; badge: string }> = {
  Culture: {
    icon: Compass,
    accent: "text-cyan-300 border-cyan-400/20 bg-cyan-400/10",
    badge: "text-cyan-300 bg-cyan-400/8 border-cyan-400/20"
  },
  Wellness: {
    icon: HeartPulse,
    accent: "text-emerald-300 border-emerald-400/20 bg-emerald-400/10",
    badge: "text-emerald-300 bg-emerald-400/8 border-emerald-400/20"
  },
  Logistics: {
    icon: Coins,
    accent: "text-purple-300 border-purple-400/20 bg-purple-400/10",
    badge: "text-purple-300 bg-purple-400/8 border-purple-400/20"
  }
};

function getGuideTheme(category: string) {
  if (category.includes("Health") || category.includes("Safety") || category.includes("Wellbeing")) {
    return guideThemes.Wellness;
  }

  if (category.includes("Finance") || category.includes("Logistics") || category.includes("Trade")) {
    return guideThemes.Logistics;
  }

  return guideThemes.Culture;
}

function matchesGuideCategory(activeCategory: string, category: string) {
  if (activeCategory === "All") return true;
  if (activeCategory === "Culture") return category.includes("Culture") || category.includes("Spiritual");
  if (activeCategory === "Wellness") return category.includes("Health") || category.includes("Safety") || category.includes("Wellbeing");
  return category.includes("Finance") || category.includes("Logistics") || category.includes("Trade");
}

export default function GuidesPage() {
  const {
    expandedGuideId,
    guideCategory,
    guideSearch,
    setExpandedGuideId,
    setGuideCategory,
    setGuideSearch
  } = useWanderful();

  const filteredGuides = TRAVEL_GUIDES.filter((guide) => {
    const query = guideSearch.toLowerCase();
    const matchesCategory = matchesGuideCategory(guideCategory, guide.category);
    const matchesSearch =
      guide.title.toLowerCase().includes(query) ||
      guide.subtitle.toLowerCase().includes(query) ||
      guide.fullStory.toLowerCase().includes(query) ||
      guide.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-5xl text-left">
      <section className="mb-8 flex flex-col items-center text-center">
        <span className="px-3 py-1 text-[9px] font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full tracking-widest uppercase mb-3">
          TRAVEL GUIDES
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white font-display">
          Practical context before you go.
        </h2>
        <p className="text-sm text-white/60 max-w-xl mt-3 leading-relaxed font-sans">
          Short, focused notes for etiquette, wellbeing, money, and logistics so each route feels easier to use in the real world.
        </p>
      </section>

      <section className="mb-8 liquid-glass rounded-[24px] p-4 md:p-5 border border-white/5">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {guideFilters.map((cat) => {
              const isActive = guideCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setGuideCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider cursor-pointer transition-all uppercase border ${
                    isActive
                      ? "bg-emerald-500/20 text-emerald-200 border-emerald-400/40 shadow-[0_0_12px_rgba(52,211,153,0.14)]"
                      : "bg-white/[0.01] border-white/5 text-white/50 hover:bg-white/[0.04] hover:text-white/80"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30 pointer-events-none" />
            <input
              type="text"
              placeholder="SEARCH GUIDES"
              value={guideSearch}
              onChange={(e) => setGuideSearch(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 bg-black/40 border border-white/10 rounded-full text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400/50 transition-all font-mono uppercase tracking-wider"
            />
            {guideSearch && (
              <button
                type="button"
                onClick={() => setGuideSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white cursor-pointer p-1 rounded-full hover:bg-white/5 transition-all"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {filteredGuides.length === 0 ? (
        <section className="w-full text-center py-16 px-4 rounded-[28px] bg-white/[0.01] border border-white/5 text-white/40">
          <div className="mx-auto w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-emerald-300">
            <BookOpen className="w-5 h-5" />
          </div>
          <p className="mt-4 text-xs tracking-widest uppercase font-mono">
            No matching guides found
          </p>
          <p className="text-[11px] text-white/35 mt-1 max-w-xs mx-auto font-sans leading-relaxed">
            Adjust the category filter or search by topic, destination context, or travel concern.
          </p>
        </section>
      ) : (
        <section className="space-y-4">
          {filteredGuides.map((guide) => {
            const isExpanded = expandedGuideId === guide.id;
            const theme = getGuideTheme(guide.category);
            const GuideIcon = theme.icon;

            return (
              <article
                key={guide.id}
                className={`liquid-glass rounded-[24px] border transition-all duration-300 overflow-hidden ${
                  isExpanded ? "border-emerald-400/25 bg-white/[0.03]" : "border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setExpandedGuideId(isExpanded ? null : guide.id)}
                  className="w-full p-5 md:p-6 flex items-start justify-between gap-4 cursor-pointer select-none text-left"
                >
                  <div className="flex items-start gap-4 min-w-0">
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0 shadow-md ${theme.accent}`}>
                      <GuideIcon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[9px] font-mono tracking-widest uppercase font-bold px-2.5 py-1 rounded-full border ${theme.badge}`}>
                          {guide.category}
                        </span>
                        <span className="text-[10px] font-mono text-white/35 tracking-widest uppercase">
                          {guide.readTime}
                        </span>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-white tracking-tight font-display mt-2">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-white/45 mt-1 leading-relaxed">
                        {guide.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className={`mt-1 w-9 h-9 rounded-xl border border-white/5 bg-white/[0.02] text-white/50 flex items-center justify-center shrink-0 transition-all ${
                    isExpanded ? "rotate-180 text-emerald-300 border-emerald-400/20 bg-emerald-400/10" : "hover:text-white"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/5 bg-black/40 overflow-hidden"
                    >
                      <div className="p-5 md:p-7 space-y-6">
                        <div className="max-w-3xl">
                          <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-4 h-4 text-emerald-300" />
                            <p className="font-mono text-[10px] text-emerald-300 tracking-widest uppercase font-semibold">
                              Guide brief
                            </p>
                          </div>
                          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                            {guide.fullStory}
                          </p>
                        </div>

                        <div className="space-y-2.5">
                          <span className="text-[10px] font-mono tracking-widest text-white/35 uppercase block font-semibold">
                            Field checklist
                          </span>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {guide.bullets.map((bullet, bulletIdx) => (
                              <div
                                key={bulletIdx}
                                className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3"
                              >
                                <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                                <span className="text-xs text-slate-200 font-sans leading-relaxed">
                                  {bullet}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
}
