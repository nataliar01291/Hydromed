//
// =====================================
// 🌦️ SIATA JS - CONTROL DE CLIMA DINÁMICO
// =====================================
// Este archivo controla:
// - actualización del clima en la card
// - redirección a página SIATA
// - simulación de datos en tiempo real
//

// ================================
// 🚀 FUNCIÓN: IR A PÁGINA SIATA
// ================================
function irSiata() {
    // 👉 redirige a la página de noticias SIATA
    window.location.href = "siata.html";
}

// ================================
// 🌦️ CUANDO CARGA LA PÁGINA
// ================================
window.addEventListener("DOMContentLoaded", () => {

    // ================================
    // 🔄 FUNCIÓN ACTUALIZAR CLIMA
    // ================================
    function actualizarSIATA() {

        // 🌦️ posibles estados del clima (simulación)
        const estados = [
            "🌧️ Lluvias moderadas",
            "⛈️ Tormenta eléctrica",
            "🌤️ Clima estable",
            "⚠️ Alerta por lluvias fuertes"
        ];

        // 🎲 seleccionar estado aleatorio
        const estado = estados[Math.floor(Math.random() * estados.length)];

        // 📌 obtener elementos del HTML
        const status = document.getElementById("siata-status");
        const img = document.getElementById("siata-img");

        // 🛡️ evitar errores si no existen
        if (status) {
            status.innerText = estado;
        }

        if (img) {
            img.src = "siata200Challenge.png";
        }
    }

    // ================================
    // ▶️ EJECUCIÓN INICIAL
    // ================================
    actualizarSIATA();

    // ================================
    // 🔁 ACTUALIZAR CADA 60 SEGUNDOS
    // ================================
    setInterval(actualizarSIATA, 60000);

});