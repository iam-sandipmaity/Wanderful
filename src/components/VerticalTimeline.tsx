import React from "react";
import { 
  motion 
} from "motion/react";
import { 
  Calendar, 
  MapPin, 
  TrendingUp, 
  Activity, 
  Compass, 
  Check 
} from "lucide-react";
import { Itinerary } from "../types";

interface VerticalTimelineProps {
  itinerary: Itinerary;
  activeDayIdx: number;
  setActiveDayIdx: (idx: number) => void;
}

export default function VerticalTimeline({ 
  itinerary, 
  activeDayIdx, 
  setActiveDayIdx 
}: VerticalTimelineProps) {
  const { days, durationDays } = itinerary;

  // Calculate overall metrics
  const totalActivities = days.reduce((acc, d) => acc + (d.activities?.length || 0), 0);
  const avgActivitiesPerDay = durationDays > 0 ? (totalActivities / durationDays).toFixed(1) : "0";

  // Determine overall trip pace category
  let overallPaceLabel = "Balanced";
  let overallPaceColor = "text-emerald-400 border-emerald-500/20 bg-emerald-500/5";
  const numAvg = parseFloat(avgActivitiesPerDay);
  if (numAvg >= 3.5) {
    overallPaceLabel = "High Intensity (Packed)";
    overallPaceColor = "text-rose-400 border-rose-500/20 bg-rose-500/5";
  } else if (numAvg <= 2.0) {
    overallPaceLabel = "Leisurely / Relaxed";
    overallPaceColor = "text-cyan-400 border-cyan-500/20 bg-cyan-500/5";
  }

  // Get days' activities for pacing details
  const getDayPaceBadge = (activityCount: number) => {
    if (activityCount >= 4) {
      return {
        label: "Packed Pace",
        color: "text-rose-400 bg-rose-500/5 border-rose-400/20"
      };
    } else if (activityCount >= 2.5) {
      return {
        label: "Steady Pace",
        color: "text-amber-400 bg-amber-500/5 border-amber-400/20"
      };
    } else {
      return {
        label: "Relaxed Pace",
        color: "text-cyan-400 bg-cyan-500/5 border-cyan-400/20"
      };
    }
  };

  // Compute progress line height percentage
  // If there's only 1 day, complete progress of 100%
  // Progress line connects from start (Center of first bubble) to end (Center of last bubble)
  const progressPercent = days.length > 1 
    ? (activeDayIdx / (days.length - 1)) * 100 
    : 100;

  return (
    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-left flex flex-col gap-5">
      
      {/* Header section with Pace Tracker badge */}
      <div className="flex flex-col gap-1 border-b border-white/5 pb-3">
        <div className="flex items-center justify-between gap-2.5">
          <h4 className="text-[10px] font-mono tracking-[0.14em] text-cyan-400 uppercase flex items-center gap-2">
            <Compass className="w-3.5 h-3.5" />
            EXPEDITION PATHWAY & PACE
          </h4>
          <span className={`text-[8px] font-mono border uppercase tracking-wider px-2 py-0.5 rounded-full ${overallPaceColor}`}>
            {overallPaceLabel}
          </span>
        </div>
        <p className="text-[10px] font-sans text-white/50 leading-relaxed mt-1">
          Dynamic progress map across itinerary checkpoints. Select any day checkpoint below to jump.
        </p>
      </div>

      {/* Speedometer mini stats */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="p-2 ml-0 rounded-xl bg-black/40 border border-white/[0.03] flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400 shrink-0" />
          <div>
            <span className="block text-[8px] font-mono text-white/35 uppercase">Total stops</span>
            <span className="text-xs font-mono font-bold text-white leading-none mt-0.5 block">{totalActivities} stops</span>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-black/40 border border-white/[0.03] flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-purple-400 shrink-0" />
          <div>
            <span className="block text-[8px] font-mono text-white/35 uppercase">Density / day</span>
            <span className="text-xs font-mono font-bold text-white leading-none mt-0.5 block">{avgActivitiesPerDay} avg</span>
          </div>
        </div>
      </div>

      {/* Main Vertical Timeline Visualizer container */}
      <div className="relative pl-2.5 pr-1 py-1.5 flex flex-col gap-6">
        
        {/* Track Line background */}
        <div className="absolute left-[21px] top-6 bottom-6 w-[2px] bg-white/5 rounded-full" />

        {/* Dynamic Progress Fill Bar */}
        <div 
          className="absolute left-[21px] top-6 bottom-6 w-[2px] pointer-events-none"
        >
          <motion.div 
            className="w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-indigo-500 rounded-full"
            style={{ 
              originY: 0,
              boxShadow: "0 0 10px rgba(34, 211, 238, 0.4)"
            }}
            initial={{ height: 0 }}
            animate={{ height: `${progressPercent}%` }}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
          />
        </div>

        {/* Days loop */}
        {days.map((day, idx) => {
          const isActive = activeDayIdx === idx;
          const isCompleted = idx < activeDayIdx;
          const activityCount = day.activities?.length || 0;
          const paceInfo = getDayPaceBadge(activityCount);

          return (
            <div 
              key={idx}
              onClick={() => setActiveDayIdx(idx)}
              className={`group flex items-start gap-4 cursor-pointer relative transition-all ${
                isActive 
                  ? "opacity-100" 
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              
              {/* Left Column: Progress Bubble Checkpoint */}
              <div className="relative shrink-0 w-6.5 h-6.5 flex items-center justify-center z-10">
                {/* Visual pulse for current active day */}
                {isActive && (
                  <motion.div 
                    layoutId="timeline-pulse"
                    className="absolute -inset-1.5 rounded-full bg-cyan-400/20 blur-sm"
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  />
                )}

                {/* Main bubble */}
                <span 
                  className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-mono transition-all duration-300 ${
                    isActive 
                      ? "bg-black border-cyan-400 text-cyan-300 font-bold shadow-[0_0_12px_rgba(34,211,238,0.35)] scale-110" 
                      : isCompleted
                        ? "bg-cyan-500 border-cyan-500 text-black font-semibold"
                        : "bg-black border-white/10 text-white/40 group-hover:border-white/30"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : (
                    day.dayNumber || (idx + 1)
                  )}
                </span>
              </div>

              {/* Right Column: Detailed Card content */}
              <div 
                className={`flex-1 min-w-0 p-3 rounded-xl border transition-all ${
                  isActive 
                    ? "bg-white/[0.04] border-white/10 shadow-lg translate-x-1" 
                    : "bg-transparent border-transparent group-hover:bg-white/[0.01]"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 mb-1">
                  <span className={`text-[10px] font-mono tracking-wider font-semibold uppercase ${
                    isActive ? "text-cyan-400" : "text-white/70"
                  }`}>
                    DAY {day.dayNumber || (idx + 1)} CHECKPOINT
                  </span>
                  
                  {/* Pace and length category indicators */}
                  <span className={`text-[8px] font-mono border px-1.5 py-0.5 rounded ${paceInfo.color}`}>
                    {paceInfo.label} ({activityCount} {activityCount === 1 ? "stop" : "stops"})
                  </span>
                </div>

                <h5 className={`text-xs font-semibold truncate ${
                  isActive ? "text-white font-medium" : "text-white/60 group-hover:text-white/80"
                }`}>
                  {day.title}
                </h5>

                {/* Collapse summaries */}
                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[8px] font-mono text-white/30">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-cyan-400/60" />
                    <span className="truncate max-w-[130px]" title={day.accommodations}>
                      {day.accommodations || "Ambient Stay"}
                    </span>
                  </div>
                  {day.activities && day.activities.length > 0 && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-2.5 h-2.5 text-purple-400/60" />
                      <span>Starts with {day.activities[0].title.slice(0, 16)}...</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}
