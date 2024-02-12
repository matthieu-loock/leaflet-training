/* eslint-disable no-undef */
/**
 * Changement du contrôle du zoom
 */

// Config de la carte
let config = {
  minZoom: 7,
  maxZoom: 18,
  zoomControl: false, // Zoom on/off
};
// Grossisement de départ
const zoom = 18;
// coordonées
const lat = 49.9652;
const lng = 2.4415;

// Appel de la map
const map = L.map("map", config).setView([lat, lng], zoom);

// utiliser pour afficher les tuiles de la map
// la plupart des serveurs de tuiles demandent une source que l'on peut ajouter après "attribution"
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Contrôle du zoom
// [topleft, topright, bottomleft, bottomright]
L.control.zoom({ position: "bottomright" }).addTo(map);
