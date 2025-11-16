// import { useEffect } from "react";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
// import "leaflet-routing-machine";

// export default function MyMap() {
//   useEffect(() => {
  
//     const map = L.map("map").setView([30.0444, 31.2357], 13); // Default Cairo center

    
//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution: '&copy; OpenStreetMap contributors',
//     }).addTo(map);

    
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         const userLatLng = L.latLng(pos.coords.latitude, pos.coords.longitude);

//         // Example: static destination (say, Tahrir Square)
//         const staticLatLng = L.latLng(30.0444, 31.2357);

//         // Add markers
//         L.marker(userLatLng).addTo(map).bindPopup("You are here").openPopup();
//         L.marker(staticLatLng).addTo(map).bindPopup("Destination");

//         // Fit map to show both points
//         const group = L.featureGroup([
//           L.marker(userLatLng),
//           L.marker(staticLatLng),
//         ]);
//         map.fitBounds(group.getBounds(), { padding: [50, 50] });

//         // Add route between them
//         L.Routing.control({
//           waypoints: [userLatLng, staticLatLng],
//           routeWhileDragging: false,
//           showAlternatives: false,
//         }).addTo(map);
//       },
//       (err) => {
//         console.error("Could not get location:", err);
//       }
//     );

//     return () => {
//       map.remove();
//     };
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Find Your Way</h2>
//       <div id="map"  className="w-full h-screen  width-[100%] rounded-[10px]"></div>
//     </div>
//   );
// }
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import Navbar from "@/components/HomePage/Navbar";
import "@/pages/Map/Map.css";
export default function MyMap() {
  useEffect(() => {
    const map = L.map("map").setView([30.0444, 31.2357], 13); // Cairo center

    // Tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // Get user location
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLatLng = L.latLng(pos.coords.latitude, pos.coords.longitude);

        // Static destination (Tahrir Square example)
        const staticLatLng = L.latLng(30.0444, 31.2357);


        // User marker
        L.marker(userLatLng).addTo(map).bindPopup("You are here").openPopup();

        // Destination marker
        L.marker(staticLatLng).addTo(map).bindPopup("Destination");

        // Fit both points
        const group = L.featureGroup([
          L.marker(userLatLng),
          L.marker(staticLatLng),
        ]);
        map.fitBounds(group.getBounds(), { padding: [50, 50] });

        // 🧨 Remove the default side card
        const routingControl = L.Routing.control({
          waypoints: [userLatLng, staticLatLng],
          routeWhileDragging: false,
          showAlternatives: false,
          addWaypoints: false,
          draggableWaypoints: false,
        });

        routingControl.addTo(map);
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
    <div className="w-full ">
      <div
        id="map"
        className="w-full h-screen "
      ></div>
      <div className ="z-1000 fixed top-1 mt-5 p-2 pb-[.5px] mb-1 bg-white w-[80%] flex justify-center ms-[10%] items-center overflow-hidden  rounded-3xl ">
        <Navbar />
      </div>
      
    </div>
  );
}
