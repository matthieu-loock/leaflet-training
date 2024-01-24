/* eslint-disable no-undef */
/**
 * Simple carte
 */

// config de la map
let config = {
  minZoom: 7,
  maxZoom: 18,
};
// zoom de départ
const zoom = 18;
// coordonnées de Fréchencourt
const lat = 49.9652;
const lng = 2.4415;

// appel de la map
const map = L.map("map", config).setView([lat, lng], zoom);

// utiliser pour afficher les tuiles de la map
// la plupart des serveurs de tuiles demandent une source que l'on peut ajouter après "attribution"
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
