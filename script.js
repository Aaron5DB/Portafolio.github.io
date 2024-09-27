// Scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Función de descargar CV (cambia 'ruta-al-cv.pdf' con tu archivo)
document.querySelector('.btn').addEventListener('click', function() {
    window.open('ruta-al-cv.pdf', '_blank');
});

