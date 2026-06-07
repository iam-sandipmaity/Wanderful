import {
  Activity,
  ArrowRight,
  Building2,
  CalendarCheck,
  Check,
  ClipboardCheck,
  Compass,
  Cpu,
  DollarSign,
  Droplets,
  Flame,
  Footprints,
  Layers,
  Lock,
  MapPinned,
  Mountain,
  Printer,
  Route,
  ShieldCheck,
  Sparkles,
  type LucideIcon
} from "lucide-react";
import { useWanderful } from "../state/WanderfulContext";

type TerrainId = "urban" | "alpine" | "volcanic";
type PaceId = "meditative" | "discovery" | "endurance";

interface SelectOption<T extends string> {
  id: T;
  label: string;
  desc: string;
  icon: LucideIcon;
}

const journeySteps: Array<{
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  accent: string;
}> = [
  {
    num: "01",
    title: "Tell Wanderful your constraints",
    desc: "Start with city, budget, trip length, date, and travel style. The planner uses those details as real boundaries, not loose suggestions.",
    icon: ClipboardCheck,
    accent: "text-cyan-300 border-cyan-400/25 bg-cyan-400/10"
  },
  {
    num: "02",
    title: "Generate a route with local context",
    desc: "The engine balances timing, pace, costs, highlights, safety notes, and map-ready coordinates into a day-by-day route.",
    icon: Route,
    accent: "text-purple-300 border-purple-400/25 bg-purple-400/10"
  },
  {
    num: "03",
    title: "Use it as a travel booklet",
    desc: "Review the itinerary, open mapped stops, tick packing items, print a clean copy, or share the plan when the route feels right.",
    icon: Printer,
    accent: "text-emerald-300 border-emerald-400/25 bg-emerald-400/10"
  }
];

const terrainOptions: Array<SelectOption<TerrainId>> = [
  { id: "urban", label: "City Grid", desc: "Transit, cafes, light walking", icon: Building2 },
  { id: "alpine", label: "High Trail", desc: "Slope, wind, uneven ground", icon: Mountain },
  { id: "volcanic", label: "Rough Terrain", desc: "Heat, dust, exposed paths", icon: Flame }
];

const paceOptions: Array<SelectOption<PaceId>> = [
  { id: "meditative", label: "Slow", desc: "Longer pauses and gentler days", icon: Footprints },
  { id: "discovery", label: "Balanced", desc: "Active, flexible exploration", icon: Compass },
  { id: "endurance", label: "Intense", desc: "Full days and higher output", icon: Activity }
];

export default function HowItWorksPage() {
  const {
    navigateTo,
    setSimPace,
    setSimTerrain,
    simPace,
    simTerrain
  } = useWanderful();

  const terrainCopy = {
    urban: {
      footwear: "Cushioned city shoes",
      footwearNote: "Best for stations, museums, markets, and long pavement stretches.",
      layers: "One breathable layer",
      layersNote: "Keep the kit light and leave room for evening weather shifts."
    },
    alpine: {
      footwear: "Trail grip soles",
      footwearNote: "Built for loose paths, wet rock, and uneven ascent sections.",
      layers: "Warm modular layers",
      layersNote: "Pack a wind shell and insulation that can come on and off quickly."
    },
    volcanic: {
      footwear: "Closed rugged boots",
      footwearNote: "Protects against sharp ground, dust, heat pockets, and exposed trails.",
      layers: "Sun and grit protection",
      layersNote: "Use covered layers, eye protection, and a light outer shell."
    }
  }[simTerrain as TerrainId];

  const paceCopy = {
    meditative: {
      hydration: "1.5 liters per day",
      hydrationNote: "Comfortable for slower movement with frequent rest stops.",
      recovery: "Unhurried buffer time",
      recoveryNote: "Ideal for scenic detours, slow meals, and quieter mornings."
    },
    discovery: {
      hydration: "2.5 liters per day",
      hydrationNote: "Enough for steady walking, short climbs, and warm afternoons.",
      recovery: "Balanced rest rhythm",
      recoveryNote: "Keeps the day energetic without turning every hour into a sprint."
    },
    endurance: {
      hydration: "4 liters plus salts",
      hydrationNote: "Useful for exposed routes, full-day movement, and heavy heat.",
      recovery: "Breaks every 90 minutes",
      recoveryNote: "Protects attention, knees, and mood on long active days."
    }
  }[simPace as PaceId];

  return (
    <div className="w-full max-w-6xl text-left">
      <section className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-10 items-stretch">
        <div className="flex flex-col justify-center">
          <span className="w-fit px-3 py-1 text-[9px] font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full tracking-widest uppercase mb-4">
            HOW WANDERFUL WORKS
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white font-display leading-[1.05]">
            From rough idea to trip-ready route.
          </h2>
          <p className="text-sm md:text-base text-white/58 max-w-2xl mt-5 leading-relaxed font-sans">
            Wanderful turns a few practical choices into a usable itinerary with mapped stops, cost-aware pacing, packing guidance, and a printable travel booklet.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {[
              { label: "Budget aware", icon: DollarSign },
              { label: "Map ready", icon: MapPinned },
              { label: "Privacy first", icon: Lock },
              { label: "Printable", icon: Printer }
            ].map((chip) => {
              const ChipIcon = chip.icon;
              return (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.025] border border-white/5 px-3 py-1.5 text-[11px] text-white/70 font-mono tracking-wider uppercase"
                >
                  <ChipIcon className="w-3.5 h-3.5 text-cyan-300" />
                  {chip.label}
                </span>
              );
            })}
          </div>
        </div>

        <div className="liquid-glass rounded-[28px] p-5 md:p-6 border border-white/5 overflow-hidden">
          <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/5">
            <div>
              <span className="text-[9px] font-mono text-white/35 tracking-widest uppercase">
                Live route output
              </span>
              <h3 className="mt-1 text-xl font-semibold text-white font-display tracking-tight">
                What you receive
              </h3>
            </div>
            <div className="h-11 w-11 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-300">
              <Layers className="w-5 h-5" />
            </div>
          </div>

          <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: "Daily plan", text: "Morning-to-evening structure with time windows.", icon: CalendarCheck },
              { title: "Mapped stops", text: "Coordinates ready for the interactive map.", icon: MapPinned },
              { title: "Budget cues", text: "Cost estimates kept visible while you review.", icon: DollarSign },
              { title: "Safety notes", text: "Pace, terrain, and packing guidance in one place.", icon: ShieldCheck }
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl bg-white/[0.02] border border-white/5 p-4">
                  <ItemIcon className="w-4 h-4 text-white/55 mb-3" />
                  <h4 className="text-sm font-semibold text-white font-display">{item.title}</h4>
                  <p className="mt-1 text-[11px] text-white/45 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {journeySteps.map((step) => {
          const StepIcon = step.icon;
          return (
            <div
              key={step.num}
              className="liquid-glass rounded-[24px] p-5 md:p-6 border border-white/5 relative overflow-hidden group hover:border-white/15 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <span className="text-3xl font-bold font-mono text-white/10 group-hover:text-white/20 transition-colors">
                  {step.num}
                </span>
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${step.accent}`}>
                  <StepIcon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-base md:text-lg font-semibold text-white tracking-tight font-display">
                {step.title}
              </h3>
              <p className="text-xs text-white/50 leading-relaxed font-sans mt-2">
                {step.desc}
              </p>
            </div>
          );
        })}
      </section>

      <section className="mt-8 liquid-glass p-5 md:p-7 rounded-[28px] border border-white/5 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-6 border-b border-white/5">
          <div>
            <span className="px-2.5 py-0.5 text-[9px] font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full tracking-widest uppercase inline-block">
              INTERACTIVE PACKING PREVIEW
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight font-display mt-3">
              See how terrain and pace change the advice.
            </h3>
            <p className="text-xs md:text-sm text-white/50 font-sans mt-2 max-w-2xl leading-relaxed">
              This preview shows the kind of practical recommendations Wanderful includes once a route is generated.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-white/35 tracking-widest uppercase">
            <Cpu className="w-3.5 h-3.5 text-cyan-300" />
            Updates instantly
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 pt-6">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase block font-semibold mb-3">
                Terrain
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
                {terrainOptions.map((terrain) => {
                  const TerrainIcon = terrain.icon;
                  const isActive = simTerrain === terrain.id;
                  return (
                    <button
                      key={terrain.id}
                      type="button"
                      onClick={() => setSimTerrain(terrain.id)}
                      className={`min-h-[76px] p-3 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                        isActive
                          ? "bg-cyan-500/10 border-cyan-400/45 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.12)]"
                          : "bg-white/[0.01] border-white/5 text-white/62 hover:bg-white/[0.04] hover:border-white/10"
                      }`}
                    >
                      <span className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${
                        isActive ? "border-cyan-400/35 bg-cyan-400/10 text-cyan-300" : "border-white/5 bg-white/[0.02] text-white/42"
                      }`}>
                        <TerrainIcon className="w-5 h-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="text-xs font-semibold block">{terrain.label}</span>
                        <span className="text-[10px] text-white/42 block leading-tight mt-1">{terrain.desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase block font-semibold mb-3">
                Pace
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
                {paceOptions.map((pace) => {
                  const PaceIcon = pace.icon;
                  const isActive = simPace === pace.id;
                  return (
                    <button
                      key={pace.id}
                      type="button"
                      onClick={() => setSimPace(pace.id)}
                      className={`min-h-[76px] p-3 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                        isActive
                          ? "bg-purple-500/10 border-purple-400/45 text-purple-100 shadow-[0_0_18px_rgba(168,85,247,0.12)]"
                          : "bg-white/[0.01] border-white/5 text-white/62 hover:bg-white/[0.04] hover:border-white/10"
                      }`}
                    >
                      <span className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${
                        isActive ? "border-purple-400/35 bg-purple-400/10 text-purple-300" : "border-white/5 bg-white/[0.02] text-white/42"
                      }`}>
                        <PaceIcon className="w-5 h-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="text-xs font-semibold block">{pace.label}</span>
                        <span className="text-[10px] text-white/42 block leading-tight mt-1">{pace.desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-[24px] bg-white/[0.015] border border-white/5 p-4 md:p-5">
            <div className="flex items-center justify-between gap-3 mb-5">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase block font-semibold">
                  Recommendation preview
                </span>
                <h4 className="text-lg font-semibold text-white font-display mt-1">
                  Packing and pace notes
                </h4>
              </div>
              <Sparkles className="w-5 h-5 text-purple-300" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  label: "Footwear",
                  value: terrainCopy.footwear,
                  note: terrainCopy.footwearNote,
                  icon: Footprints,
                  accent: "text-cyan-300"
                },
                {
                  label: "Layers",
                  value: terrainCopy.layers,
                  note: terrainCopy.layersNote,
                  icon: Layers,
                  accent: "text-purple-300"
                },
                {
                  label: "Hydration",
                  value: paceCopy.hydration,
                  note: paceCopy.hydrationNote,
                  icon: Droplets,
                  accent: "text-emerald-300"
                },
                {
                  label: "Recovery",
                  value: paceCopy.recovery,
                  note: paceCopy.recoveryNote,
                  icon: ShieldCheck,
                  accent: "text-amber-300"
                }
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.label} className="rounded-2xl bg-white/[0.02] border border-white/5 p-4 min-h-[148px]">
                    <div className="flex items-center gap-2 mb-3">
                      <ItemIcon className={`w-4 h-4 ${item.accent}`} />
                      <span className="text-[9px] font-mono text-white/35 uppercase tracking-widest">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-white block">
                      {item.value}
                    </span>
                    <p className="text-[11px] text-white/45 mt-2 leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-5">
        <div className="liquid-glass p-5 md:p-6 rounded-[24px] border border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white font-display">
                Privacy by default
              </h4>
              <p className="text-[10px] text-white/35 font-mono tracking-widest uppercase">
                Keep your trip intent close
              </p>
            </div>
          </div>
          <p className="text-xs text-white/55 leading-relaxed">
            Wanderful does not need an account to plan. Provider keys are stored in your browser when you add them, and trip planning data is used to generate your itinerary.
          </p>
        </div>

        <div className="liquid-glass p-5 md:p-6 rounded-[24px] border border-white/5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Plan", value: "Minute-level days", icon: CalendarCheck },
              { label: "Navigate", value: "Open map stops", icon: MapPinned },
              { label: "Carry", value: "Packing checklist", icon: Check }
            ].map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label} className="flex items-start gap-3">
                  <div className="mt-0.5 w-8 h-8 rounded-xl bg-white/[0.03] border border-white/5 text-white/55 flex items-center justify-center shrink-0">
                    <StatIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-white/35 font-mono tracking-widest uppercase block">
                      {stat.label}
                    </span>
                    <span className="text-sm text-white font-semibold block mt-1">
                      {stat.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => navigateTo("/")}
          className="px-6 py-2.5 bg-white text-black font-semibold text-xs rounded-full hover:scale-105 active:scale-95 transition-all font-mono tracking-wider cursor-pointer uppercase inline-flex items-center gap-2"
        >
          Start planning
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
