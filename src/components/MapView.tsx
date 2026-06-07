import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Activity } from "../types";

type MapStyleId = "dark" | "light" | "street" | "satellite";

const MAP_STYLES: Array<{
  id: MapStyleId;
  label: string;
  url: string;
  attribution: string;
  maxZoom: number;
}> = [
  {
    id: "dark",
    label: "Dark",
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: "OPENSTREETMAP + CARTO DARK",
    maxZoom: 19
  },
  {
    id: "light",
    label: "Light",
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution: "OPENSTREETMAP + CARTO LIGHT",
    maxZoom: 19
  },
  {
    id: "street",
    label: "Street",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "OPENSTREETMAP STREET",
    maxZoom: 19
  },
  {
    id: "satellite",
    label: "Satellite",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "ESRI WORLD IMAGERY",
    maxZoom: 19
  }
];

const createGlowingMarker = (title: string, index: number, isCurrent: boolean) => {
  return L.divIcon({
    className: "custom-leaflet-marker",
    html: `
      <div class="relative flex items-center justify-center">
        <div class="absolute w-6 h-6 rounded-full bg-cyan-400/30 animate-ping" style="animation-duration: 2s"></div>
        <div class="w-3.5 h-3.5 rounded-full ${isCurrent ? "bg-cyan-400 border-2 border-white" : "bg-purple-500 border-2 border-white"} shadow-lg relative z-10 flex items-center justify-center text-[7px] font-mono font-bold text-black select-none">
          ${index + 1}
        </div>
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
  const [activeMapStyle, setActiveMapStyle] = useState<MapStyleId>("dark");
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const polylineRef = useRef<L.Polyline | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  const validPoints = activities.filter(
    (act) => typeof act.latitude === "number" && typeof act.longitude === "number"
  ) as Array<Activity & { latitude: number; longitude: number }>;

  const activeStyle = MAP_STYLES.find((item) => item.id === activeMapStyle) || MAP_STYLES[0];

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current, {
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false
      }).setView([35.6762, 139.6503], 6);

      L.control.zoom({
        position: "bottomright"
      }).addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        tileLayerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }

    tileLayerRef.current = L.tileLayer(activeStyle.url, {
      maxZoom: activeStyle.maxZoom
    }).addTo(map);
    tileLayerRef.current.bringToBack();
  }, [activeStyle.maxZoom, activeStyle.url]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    markersRef.current.forEach((marker) => map.removeLayer(marker));
    markersRef.current = [];

    if (polylineRef.current) {
      map.removeLayer(polylineRef.current);
      polylineRef.current = null;
    }

    if (validPoints.length === 0) return;

    const latLngs: L.LatLngTuple[] = [];

    validPoints.forEach((act, idx) => {
      const position: L.LatLngTuple = [act.latitude, act.longitude];
      latLngs.push(position);

      const marker = L.marker(position, {
        icon: createGlowingMarker(act.title, idx, idx === currentActivityIdx)
      })
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

    if (latLngs.length > 1) {
      polylineRef.current = L.polyline(latLngs, {
        color: "#22d3ee",
        dashArray: "5, 10",
        interactive: false,
        opacity: 0.8,
        weight: 2
      }).addTo(map);
    }

    try {
      const group = L.featureGroup(markersRef.current);
      map.fitBounds(group.getBounds(), {
        animate: true,
        duration: 0.8,
        maxZoom: 13,
        padding: [45, 45]
      });
    } catch (e) {
      if (latLngs.length > 0) {
        map.setView(latLngs[0], 12);
      }
    }
  }, [activities, currentActivityIdx, validPoints.length]);

  return (
    <div className="relative w-full rounded-[24px] overflow-hidden border border-white/5 bg-black/40">
      <div
        ref={mapContainerRef}
        className="w-full h-[320px] md:h-[400px] relative z-10"
        style={{ background: "#06060c" }}
      />

      <div className="absolute top-4 left-4 z-20 max-w-[calc(100%-164px)] px-3.5 py-2.5 rounded-xl bg-black/90 border border-white/10 backdrop-blur-md flex flex-col gap-2 shadow-2xl pointer-events-none">
        <span className="text-[9px] font-mono tracking-widest text-cyan-400 uppercase">
          Wanderful Map Engine
        </span>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-white/70 font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Active Point</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span>Planned Stops</span>
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 z-20 rounded-xl bg-black/85 border border-white/10 backdrop-blur-md p-1.5 shadow-2xl">
        <div className="grid grid-cols-2 gap-1">
          {MAP_STYLES.map((style) => (
            <button
              key={style.id}
              type="button"
              onClick={() => setActiveMapStyle(style.id)}
              className={`px-2.5 py-1.5 rounded-lg text-[9px] font-mono tracking-widest uppercase transition-all cursor-pointer ${
                activeMapStyle === style.id
                  ? "bg-cyan-400 text-black font-bold"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              {style.label}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-4 z-20 pointer-events-none text-[8.5px] font-mono text-white/30 tracking-wider">
        MAP LAYER: {activeStyle.attribution}
      </div>
    </div>
  );
}
