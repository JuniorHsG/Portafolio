let menuVisible = false;

// Mostrar/Ocultar menú
function mostrarOcultarMenu(){
    const nav = document.getElementById("nav");
    nav.classList = menuVisible ? "" : "responsive";
    menuVisible = !menuVisible;
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Animaciones de habilidades
function efectoHabilidades(){
    const skills = document.getElementById("skills");
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        const habilidades = document.getElementsByClassName("progreso");
        const clases = [
            "javascript", "htmlcss", "photoshop", "wordpress", "drupal",
            "comunicacion", "trabajo", "creatividad", "dedicacion", "proyect"
        ];
        for (let i = 0; i < habilidades.length; i++) {
            habilidades[i].classList.add(clases[i]);
        }
    }
}

// Aplicar animación de habilidades al hacer scroll
window.onscroll = function(){
    efectoHabilidades();
}

// ✅ Funciones para múltiples modales
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "block";
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
}

// ✅ Cierre de cualquier modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modales = document.getElementsByClassName("modal");
    for (let modal of modales) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

// ✅ Carrusel por grupo
let slideIndices = {};

function changeSlide(group, step) {
    const slides = document.querySelectorAll(`.carousel-slide.${group}`);
    if (!slides.length) return;

    if (!slideIndices[group]) slideIndices[group] = 0;

    slideIndices[group] = (slideIndices[group] + step + slides.length) % slides.length;

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === slideIndices[group]);
    });
}

