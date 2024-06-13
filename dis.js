document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".banner");
    const slides = banner.querySelectorAll("img");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Cambia a la siguiente imagen cada 5 segundos (ajusta según sea necesario)
    setInterval(nextSlide, 3000);

    // Muestra la primera imagen al cargar la página
    showSlide(currentSlide);
});

function agendarCita() {
    // Aquí puedes agregar el código para redirigir a la página de agenda de citas o realizar alguna acción específica.
    // Por ejemplo, puedes redirigir a una página de formulario de citas.
    window.location.href = "formulario-citas.html";
}

// Función para manejar la animación cuando el elemento es visible
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active"); // Agrega la clase active cuando el elemento es visible
            observer.unobserve(entry.target); // Deja de observar el elemento después de activar la animación
        }
    });
}

