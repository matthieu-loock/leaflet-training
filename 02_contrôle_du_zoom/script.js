/* eslint-disable no-undef */
/**
 * Changement du contrôle du zoom
 */

// Config de la carte
let config = {
  minZoom: 7,
  maxZoom: 18,
  zoomControl: false, // Zoom on
};
// Grossisement de départ
const zoom = 18;
// co-ordinates
const lat = 49.9652;
const lng = 2.4415;

// calling map
const map = L.map("map", config).setView([lat, lng], zoom);

// Used to load and display tile layers on the map
// Most tile servers require attribution, which you can set under `Layer`
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// reactivate zoom at the desired location
// [topleft, topright, bottomleft, bottomright]
L.control.zoom({ position: "bottomright" }).addTo(map);
