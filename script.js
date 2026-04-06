document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("action-btn");
  if (!button) return;

  button.addEventListener("click", () => {
    alert("Mahe Guessr starter template is ready!");
  });
});
13.131126789696053, 77.58778377525103

var map = L.map('map', {
    center: [13.131126789696053, 77.58778377525103],
    zoom: 10
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);