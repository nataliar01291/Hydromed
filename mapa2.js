// =======================================
// 1. CREAR MAPA BASE
// =======================================

// 🗺️ inicializa mapa centrado en Medellín
const map = L.map('map').setView([6.2442, -75.5812], 12);


// =======================================
// 2. CAPA BASE (OpenStreetMap)
// =======================================

// 🌍 carga tiles del mapa (internet)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Hydromed - OpenStreetMap'
}).addTo(map);


// =======================================
// 3. LEER ENCUESTAS (LOCALSTORAGE)
// =======================================

// 📦 trae datos guardados desde encuesta.html
const encuestas = JSON.parse(localStorage.getItem("encuestas")) || [];


// =======================================
// 4. COORDENADAS POR COMUNA
// =======================================

// 📍 base geográfica de cada comuna
const comunasCoords = {
  "Popular": [6.2934, -75.5360],
  "Santa Cruz": [6.3008, -75.5410],
  "Manrique": [6.2663, -75.5480],
  "Aranjuez": [6.2769, -75.5550],
  "Castilla": [6.2920, -75.5650],
  "Doce de Octubre": [6.2830, -75.5750],
  "Robledo": [6.2760, -75.5850],
  "Villa Hermosa": [6.2400, -75.5550],
  "La Candelaria": [6.2518, -75.5636],
  "Laureles": [6.2447, -75.5900],
  "La América": [6.2510, -75.6020],
  "San Javier": [6.2560, -75.6200],
  "El Poblado": [6.2100, -75.5670],
  "Guayabal": [6.2200, -75.5850],
  "Belén": [6.2300, -75.6000]
};


// =======================================
// 5. PINTAR ENCUESTAS EN EL MAPA
// =======================================

// 🎯 función principal
function cargarEncuestas() {

  // 🔁 recorrer todas las encuestas guardadas
  encuestas.forEach(encuesta => {

    // 📍 buscar coordenadas según comuna
    const coords = comunasCoords[encuesta.comuna];

    // ❌ si la comuna no existe en el mapa, ignorar
    if (!coords) return;

    // 🎨 definir color según estado
    let color = "green";

    if (encuesta.inundada === "si" && encuesta.danificado === "si") {
      color = "red";      // 🔴 crítico
    } else if (encuesta.inundada === "si") {
      color = "orange";   // 🟠 alerta
    }

    // 📍 crear marcador circular
    L.circleMarker(coords, {
      radius: 9,
      color: color,
      fillColor: color,
      fillOpacity: 0.8
    })
    .addTo(map)
    .bindPopup(`
      <b>Comuna:</b> ${encuesta.comuna}<br>
      <b>Inundada:</b> ${encuesta.inundada}<br>
      <b>Damnificado:</b> ${encuesta.danificado}
    `);
  });
}


// =======================================
// 6. EJECUTAR SISTEMA
// =======================================

// 🚀 dibujar todo al cargar
cargarEncuestas();