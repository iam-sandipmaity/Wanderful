import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Activity } from "../types";

// Setup custom map icons or circular markers matching the glowing vector design
const createGlowingMarker = (title: string, index: number, isCurrent: boolean) => {
  return L.divIcon({
    className: "custom-leaflet-marker",
    html: `
      <div class="relative flex items-center justify-center">
        <!-- Pulse effect -->
        <div class="absolute w-6 h-6 rounded-full bg-cyan-400/30 animate-ping" style="animation-duration: 2s"></div>
        <!-- Active Dot -->
        <div class="w-3.5 h-3.5 rounded-full ${isCurrent ? 'bg-cyan-400 border-2 border-white' : 'bg-purple-500 border-2 border-white'} shadow-lg relative z-10 flex items-center justify-center text-[7px] font-mono font-bold text-black select-none">
          ${index + 1}
        </div>
        <!-- Label tooltip shown inline -->
        <div class="absolute left-6 whitespace-nowrap bg-black/90 border border-white/10 px-2 py-0.5 rounded text-[10px] font-mono tracking-wide text-white/95 pointer-events-none shadow-xl">
          ${title}
        </div>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
};

interface MapViewProps {
  activities: Activity[];
  currentActivityIdx: number;
}

export default function MapView({ activities, currentActivityIdx }: MapViewProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const polylineRef = useRef<L.Polyline | null>(null);

  // Filter out activities that lack clean coordinates
  const validPoints = activities.filter(
    (act) => typeof act.latitude === "number" && typeof act.longitude === "number"
  ) as Array<Activity & { latitude: number; longitude: number }>;

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map if it doesn't exist
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current, {
        zoomControl: false, // Customized positioning or default none
        attributionControl: false,
        scrollWheelZoom: false // Keep parent page scrolls natural
      }).setView([35.6762, 139.6503], 6); // Default Japan scale if empty

      // Add zoom control to bottom right for premium styling
      L.control.zoom({
        position: 'bottomright'
      }).addTo(mapRef.current);

      // CartoDB Dark Matter - gorgeous futuristic look
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19
      }).addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Update markers, lines, and viewport dynamic bounds when activities adjust
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Clear previous markers
    markersRef.current.forEach((marker) => map.removeLayer(marker));
    markersRef.current = [];

    if (polylineRef.current) {
      map.removeLayer(polylineRef.current);
      polylineRef.current = null;
    }

    if (validPoints.length === 0) return;

    const latLngs: L.LatLngTuple[] = [];

    // Map new pins
    validPoints.forEach((act, idx) => {
      const position: L.LatLngTuple = [act.latitude, act.longitude];
      latLngs.push(position);

      const isCurrent = idx === currentActivityIdx;
      const markerIcon = createGlowingMarker(act.title, idx, isCurrent);

      const marker = L.marker(position, { icon: markerIcon })
        .addTo(map)
        .bindPopup(`
          <div style="background-color:#000; color:#fff; font-family:sans-serif; padding:10px; border-radius:12px; font-size:11px; max-width:200px;">
            <p style="font-weight:700; color:#22d3ee; margin:0 0 4px 0;">${act.title}</p>
            <p style="margin:0 0 6px 0; color:#d1d5db; font-size:10px;">${act.locationName}</p>
            <p style="margin:0; font-family:monospace; color:#10b981;">Est: ${act.cost}</p>
          </div>
        `, {
          className: "custom-leaflet-popup"
        });

      markersRef.current.push(marker);
    });

    // Draw glowing curved geodesic or standard direct lines between sequence
    if (latLngs.length > 1) {
      polylineRef.current = L.polyline(latLngs, {
        color: "#22d3ee",
        weight: 2,
        opacity: 0.8,
        dashArray: "5, 10",
        interactive: false
      }).addTo(map);
    }

    // Auto-adjust viewport bounding boxes to neatly wrap all planned markers
    try {
      const group = L.featureGroup(markersRef.current);
      map.fitBounds(group.getBounds(), {
        padding: [45, 45],
        maxZoom: 13,
        animate: true,
        duration: 0.8
      });
    } catch (e) {
      // Fallback center for individual single activity items
      if (latLngs.length > 0) {
        map.setView(latLngs[0], 12);
      }
    }

  }, [activities, currentActivityIdx, validPoints.length]);

  return (
    <div className="relative w-full rounded-[24px] overflow-hidden border border-white/5 bg-black/40">
      
      {/* Map visual background slot */}
      <div 
        ref={mapContainerRef} 
        className="w-full h-[320px] md:h-[400px] relative z-10" 
        style={{ background: "#06060c" }}
      />
      
      {/* Interactive Legend Overlay */}
      <div className="absolute top-4 left-4 z-20 px-3.5 py-2.5 rounded-xl bg-black/90 border border-white/10 backdrop-blur-md flex flex-col gap-2 shadow-2xl pointer-events-none">
        <span className="text-[9px] font-mono tracking-widest text-cyan-400 uppercase">
          Wanderful OSM Engine v1.0
        </span>
        <div className="flex items-center gap-4 text-[10px] text-white/70 font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Active Point</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span>Planned Retreats</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 z-20 pointer-events-none text-[8.5px] font-mono text-white/30 tracking-wider">
        MAP POWERED BY OPENSTREETMAP © CARTO DARK MATTER
      </div>
    </div>
  );
}
