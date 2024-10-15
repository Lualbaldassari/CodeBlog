let menuIcon = document.querySelector("#menu-icon");
let closeIcon = document.querySelector("#close-icon");
let showMenu = document.querySelector(".menu");

// Mostrar el menú y ocultar el icono de hamburguesa
menuIcon.onclick = () => {
    showMenu.classList.toggle("show");
};

// Ocultar el menú cuando se haga clic en el icono de cierre
closeIcon.onclick = () => {
    showMenu.classList.remove("show");
};

// Expandir/colapsar preguntas en la sección FAQ
document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const questionButton = item.querySelector(".faq-question");

        questionButton.addEventListener("click", function() {
            const answer = item.querySelector(".faq-answer");

            // Alternar clase 'active' y visibilidad de la respuesta
            item.classList.toggle("active");

            if (item.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
});

// Funcionalidad del carrusel para el Social Proof
document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".carousel-track");
    const items = Array.from(track.children);
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
    const itemWidth = items[0].getBoundingClientRect().width;
    let currentIndex = 0;

    // Establecer la posición inicial de cada ítem del carrusel
    items.forEach((item, index) => {
        item.style.left = itemWidth * index + "px";
    });

    // Función para mover al siguiente ítem
    const moveToNextItem = () => {
        if (currentIndex === items.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        const amountToMove = itemWidth * currentIndex;
        track.style.transform = "translateX(-" + amountToMove + "px)";
    };

    // Función para mover al ítem anterior
    const moveToPrevItem = () => {
        if (currentIndex === 0) {
            currentIndex = items.length - 1;
        } else {
            currentIndex--;
        }
        const amountToMove = itemWidth * currentIndex;
        track.style.transform = "translateX(-" + amountToMove + "px)";
    };

    // Mover al siguiente ítem cuando se hace clic en el botón "siguiente"
    nextButton.addEventListener("click", moveToNextItem);

    // Mover al ítem anterior cuando se hace clic en el botón "anterior"
    prevButton.addEventListener("click", moveToPrevItem);
});

window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(50, 50, 50, 0.5)";
    } else {
        header.style.background = "rgba(50, 50, 50, 1)";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los enlaces del menú de navegación
    const navLinks = document.querySelectorAll(".nav-links a");

    // Recorrer cada enlace y agregar un evento de clic
    navLinks.forEach((link) => {
        link.addEventListener("click", function(e) {
            // Prevenir el comportamiento por defecto del enlace
            e.preventDefault();

            // Obtener el destino (el id de la sección) a la que se quiere navegar
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            // Desplazamiento suave hasta el elemento destino
            window.scrollTo({
                top: targetElement.offsetTop - 85,
                behavior: "smooth", // Desplazamiento suave
            });
        });
    });
});