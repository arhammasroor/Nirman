import React, { useEffect } from 'react';
import L from "leaflet";
import "leaflet.heat";
import { complaints } from '../../data/data';



function HeatMap() {
    useEffect(() => {
        const mapContainer = document.getElementById("map");
        if (!mapContainer) return;

        const map = L.map("map").setView([20.5937, 78.9629], 5);

         L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

        const maxComplaints = Math.max(...complaints.map(p => p[2]));
        const timeout = setTimeout(() => {
            const heatLayer = L.heatLayer(
                complaints.map(p => [p[0], p[1], p[2] / maxComplaints]),
                {
                    radius: 3,
                    blur: 2,
                    minOpacity: 0.1,
                    gradient: {
                        0.1: "#ffcccc",
                        0.3: "#ff6666",
                        0.5: "#ff0000",
                        0.7: "#cc0000",
                        1.0: "#990000",
                    },
                }
            ).addTo(map);

            const updateHeat = () => {
                const zoom = map.getZoom();

                // Gradually scale radius between zoom 5 and 10
                const minZoom = 5;
                const maxZoom = 10;
                const scale = (zoom - minZoom) / (maxZoom - minZoom); // 0 → 1
                const clampedScale = Math.max(0, Math.min(1, scale));

                const newRadius = 5 + clampedScale * 10;       // radius 5 → 15
                const newMinOpacity = 0.15 + clampedScale * 0.45; // minOpacity 0.15 → 0.6

                const normalized = complaints.map(p => [
                    p[0],
                    p[1],
                    (p[2] / maxComplaints) * (0.3 + clampedScale * 0.7), // smoothly scale intensity
                ]);

                heatLayer.setLatLngs(normalized);
                heatLayer.setOptions({
                    radius: newRadius,
                    minOpacity: newMinOpacity,
                });
            };

            map.on("zoomend", updateHeat);
            updateHeat();
        }, 0); // 0ms delay ensures map div has size

        return () => {
            clearTimeout(timeout);
            map.remove();
        };
    }, []);

    return (
        <div id="map" style={{ height: "50vh", width: "100%" }}></div>
    );
}

export default HeatMap;