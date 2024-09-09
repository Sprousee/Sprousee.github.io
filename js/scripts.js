<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    // Manejo del menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

// --- Interactividad avanzada: Transición suave en botones ---
const buttons = document.querySelectorAll('.btn');
buttons.forEach(function(button) {
    button.addEventListener('mouseover', function() {
        button.style.transform = 'translateY(-5px)';
        button.style.backgroundColor = '#0056b3';
    });
    button.addEventListener('mouseout', function() {
        button.style.transform = 'translateY(0)';
        button.style.backgroundColor = '';
    });
});

 // Carrusel de imágenes
document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    let autoSlideInterval;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;

        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        const carouselInner = document.querySelector('.carousel-inner');
        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000); // Cambiar de imagen cada 3 segundos
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Iniciar el carrusel
    showSlide(currentSlide);
    startAutoSlide();

    // Manejadores de eventos para los botones
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Pausar/Reanudar carrusel al pasar el mouse
    const carouselElement = document.querySelector('.carousel');
    if (carouselElement) {
        carouselElement.addEventListener('mouseenter', stopAutoSlide);
        carouselElement.addEventListener('mouseleave', startAutoSlide);
    }
});