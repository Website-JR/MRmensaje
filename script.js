// Cargar imágenes para el efecto de aparición y desaparición
const imagePaths = ['image1.png', 'image2.png', 'image3.png']; // Cambia a las rutas correctas
const confettiCount = 50; // Número de imágenes que aparecerán simultáneamente

window.onload = function () {
    createConfetti();
};

function createConfetti() {
    for (let i = 0; i < confettiCount; i++) {
        let confetti = document.createElement('img');
        confetti.src = imagePaths[Math.floor(Math.random() * imagePaths.length)];
        confetti.classList.add('confetti');
        setRandomPosition(confetti);
        document.body.appendChild(confetti);
        setInterval(() => setRandomPosition(confetti), Math.random() * 3000 + 2000); // Cambiar posición aleatoriamente cada 2-5 segundos
    }
}

function setRandomPosition(element) {
    // Posicionar aleatoriamente en la pantalla
    element.style.left = `${Math.random() * 100}vw`;
    element.style.top = `${Math.random() * 100}vh`;
}

// Función para redirigir a la segunda ventana
function showImage() {
    window.location.href = "showImage.html"; // Redirige a la segunda página
}

