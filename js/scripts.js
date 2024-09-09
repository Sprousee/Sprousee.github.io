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


