//
// =====================================
//  ZONA.JS - CLIMA POR COMUNA
// =====================================

// obtener comuna guardada
const zona = localStorage.getItem("zonaUsuario");

// mostrar comuna
document.getElementById("zona").innerText = zona;

// ================================
//  CLIMA SIMULADO
// ================================
function obtenerClima(){

    const estados = [
        "🌧️ Lluvia fuerte",
        "⛈️ Tormenta",
        "🌤️ Soleado",
        "🌥️ Nublado"
    ];

    return estados[Math.floor(Math.random() * estados.length)];
}

// mostrar clima
document.getElementById("clima").innerText = obtenerClima();