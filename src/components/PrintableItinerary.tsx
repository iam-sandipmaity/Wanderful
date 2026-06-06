import React from "react";
import { Itinerary } from "../types";

interface PrintableItineraryProps {
  itinerary: Itinerary | null;
}

export default function PrintableItinerary({ itinerary }: PrintableItineraryProps) {
  if (!itinerary) return null;

  return (
    <div className="print-only hidden font-sans text-stone-900 bg-white p-8 max-w-4xl mx-auto leading-relaxed">
      
      {/* Top Header Badge */}
      <div className="border-b-4 border-stone-900 pb-4 mb-6 flex justify-between items-end">
        <div>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-stone-500 block mb-1">
            WANDERFUL TRAVEL OS • OFFICAL EXPEDITION DOSSIER
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900">
            {itinerary.tripName}
          </h1>
          <p className="text-sm italic text-stone-600 mt-1 font-serif">
            "{itinerary.tagline}"
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono font-bold uppercase text-stone-700 block">
            GEN-ID: {Math.random().toString(36).substring(2, 8).toUpperCase()}
          </span>
          <span className="text-xs text-stone-500">
            Date Generated: {new Date().toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Main Metadata Matrix */}
      <div className="grid grid-cols-4 gap-4 border border-stone-200 bg-stone-50 p-4 rounded-xl mb-6 text-sm">
        <div>
          <span className="block text-[10px] uppercase font-mono tracking-wider text-stone-500">Destination</span>
          <strong className="text-stone-800">{itinerary.destination}</strong>
        </div>
        <div>
          <span className="block text-[10px] uppercase font-mono tracking-wider text-stone-500">Duration</span>
          <strong className="text-stone-800">{itinerary.durationDays} Days</strong>
        </div>
        <div>
          <span className="block text-[10px] uppercase font-mono tracking-wider text-stone-500">Vibe Theme</span>
          <strong className="text-stone-800">{itinerary.travelStyle}</strong>
        </div>
        <div>
          <span className="block text-[10px] uppercase font-mono tracking-wider text-stone-500">Estimated Cost</span>
          <strong className="text-emerald-700 font-bold">{itinerary.estimatedTotalCost}</strong>
        </div>
      </div>

      {/* Highlights & Packing Grid */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="border border-stone-200 p-4 rounded-xl">
          <h4 className="text-xs font-mono font-bold tracking-widest text-stone-800 uppercase border-b border-stone-100 pb-1.5 mb-2">
            CURATOR COGNITIVE HIGHLIGHTS
          </h4>
          <ul className="space-y-1.5 text-xs text-stone-700">
            {itinerary.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-stone-400 font-bold font-mono">✓</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-stone-200 p-4 rounded-xl">
          <h4 className="text-xs font-mono font-bold tracking-widest text-stone-800 uppercase border-b border-stone-100 pb-1.5 mb-2">
            ESSENTIAL PACKING PROTOCOL
          </h4>
          <ul className="space-y-1.5 text-xs text-stone-700">
            {itinerary.packingList.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-stone-400 font-mono font-bold">□</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Daily Sequenced Steps */}
      <div className="mb-8">
        <h4 className="text-sm font-mono font-bold tracking-widest text-stone-800 uppercase border-b-2 border-stone-300 pb-1 mb-4">
          DAY-BY-DAY EXPEDITION PATHWAY
        </h4>

        <div className="space-y-6">
          {itinerary.days.map((day, dIdx) => (
            <div key={dIdx} className="border-b border-stone-100 pb-5 last:border-0 last:pb-0">
              <div className="flex items-center justify-between mb-2">
                <h5 className="text-base font-bold text-stone-900">
                  Day {day.dayNumber || (dIdx + 1)}: {day.title}
                </h5>
                <span className="text-xs font-mono text-stone-500 uppercase bg-stone-100 px-2 py-0.5 rounded">
                  {day.accommodations || "Ambient Stay Selection"}
                </span>
              </div>

              {day.tips && (
                <div className="mb-3 p-2 text-xs italic bg-amber-50/70 border-l-4 border-amber-500 rounded text-stone-700">
                  <strong className="font-mono text-[10px] uppercase font-bold text-amber-800 not-italic mr-1">Curator Tip:</strong>
                  {day.tips}
                </div>
              )}

              {/* Day Activities Checklist */}
              <div className="space-y-2 mt-3 pl-2">
                {day.activities?.map((act, aIdx) => (
                  <div key={aIdx} className="flex items-start text-xs border-l-2 border-stone-200 pl-3 py-1">
                    <span className="font-mono font-semibold text-stone-500 w-20 shrink-0 block">
                      {act.time}
                    </span>
                    <div className="flex-1">
                      <strong className="text-stone-900 text-xs block font-semibold">
                        {act.title} <span className="text-stone-500 font-normal">({act.locationName})</span> — <span className="text-emerald-700 font-mono text-[11px]">{act.cost}</span>
                      </strong>
                      <p className="text-stone-600 font-sans leading-relaxed mt-0.5">
                        {act.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Matrix Breakdown & Local Warnings */}
      <div className="grid grid-cols-2 gap-6 pt-6 border-t border-stone-200">
        <div>
          <h4 className="text-xs font-mono font-bold tracking-widest text-stone-800 uppercase border-b border-stone-100 pb-1.5 mb-2">
            FINANCIAL ALLOCATION MATRIX
          </h4>
          <table className="w-full text-xs text-stone-700">
            <tbody>
              {Object.entries(itinerary.budgetBreakdown || {}).map(([category, amt], index) => (
                <tr key={category} className="border-b border-stone-100 last:border-0 py-1 font-mono">
                  <td className="py-1 capitalize text-stone-500">{category}</td>
                  <td className="py-1 text-right font-bold text-stone-800">{amt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h4 className="text-xs font-mono font-bold tracking-widest text-stone-800 uppercase border-b border-stone-100 pb-1.5 mb-2">
            LOCAL SECURITY & HEALTH NOTES
          </h4>
          <p className="text-xs text-stone-600 leading-relaxed font-sans bg-stone-50 p-2.5 rounded-lg border border-stone-100">
            {itinerary.localSafetyAndPaceTips}
          </p>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-12 pt-4 border-t border-stone-200 text-center text-[9px] font-mono text-stone-400">
        Processed and compiled natively via Wanderful Travel Operating System (Space Edition © 2026).
      </div>
      
    </div>
  );
}
