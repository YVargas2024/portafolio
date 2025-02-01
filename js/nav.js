// Obtener los elementos
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('nav');

// Agregar evento de clic en el menú hamburguesa
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('navbar-active');
});