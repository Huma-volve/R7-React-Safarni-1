import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

export default function MyMap() {
  useEffect(() => {
  
    const map = L.map("map").setView([30.0444, 31.2357], 13); // Default Cairo center

    
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLatLng = L.latLng(pos.coords.latitude, pos.coords.longitude);

        // Example: static destination (say, Tahrir Square)
        const staticLatLng = L.latLng(30.0444, 31.2357);

        // Add markers
        L.marker(userLatLng).addTo(map).bindPopup("You are here").openPopup();
        L.marker(staticLatLng).addTo(map).bindPopup("Destination");

        // Fit map to show both points
        const group = L.featureGroup([
          L.marker(userLatLng),
          L.marker(staticLatLng),
        ]);
        map.fitBounds(group.getBounds(), { padding: [50, 50] });

        // Add route between them
        L.Routing.control({
          waypoints: [userLatLng, staticLatLng],
          routeWhileDragging: false,
          showAlternatives: false,
        }).addTo(map);
      },
      (err) => {
        console.error("Could not get location:", err);
      }
    );

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Find Your Way</h2>
      <div id="map"  className="w-full h-screen" style={{ height: "500px", width: "100%", borderRadius: "10px"}}></div>
    </div>
  );
}
