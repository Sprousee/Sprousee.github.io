
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-empresa-item');
const totalItems = items.length;

function showSlide(index) {
    const inner = document.querySelector('.carousel-empresa-inner');
    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }
    inner.style.transform = `translateX(-${currentIndex * 25}%)`; // Mueve el carrusel
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Auto-play (opcional)
setInterval(() => {
    nextSlide();
}, 3000); // Cambia de imagen cada 3 segundos
