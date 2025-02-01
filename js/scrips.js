const $form = document.getElementById('contact-form');

// Escuchamos el evento de "submit" en el formulario
$form.addEventListener('submit', handlesubmit);

async function handlesubmit(event) {
    event.preventDefault(); // Prevenimos el envío tradicional del formulario

    const form = new FormData(this); // Creamos un objeto FormData con los datos del formulario

    // Enviamos los datos usando fetch sin redirigir
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json',
        }
    });

    // Verificamos si la respuesta fue exitosa
    if (response.ok) {
        // Mostrar el mensaje de agradecimiento
        const thankYouMessage = document.getElementById('thank-you-message');
        thankYouMessage.style.display = 'block';

        // Ocultar el mensaje después de 3 segundos
        setTimeout(function() {
            thankYouMessage.style.display = 'none';
        }, 3000);

        // Reiniciar el formulario
        this.reset();
    } else {
        // Si la respuesta no es exitosa, podríamos mostrar un mensaje de error
        alert('Hubo un problema al enviar el formulario. Por favor, intenta de nuevo.');
    }
}



// Seleccionar todos los enlaces de navegación
const navLinks = document.querySelectorAll('nav a');

// Añadir un evento de clic a cada enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Eliminar la clase 'active' de todos los enlaces
        navLinks.forEach(link => link.classList.remove('active'));
        // Añadir la clase 'active' al enlace clickeado
        link.classList.add('active');
    });
});

// Opcional: si deseas resaltar la sección al hacer scroll, puedes agregar este código:

// Función para resaltar el enlace de la sección visible en pantalla
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 50) {
            current = section.getAttribute('id');
        }
    });

    // Remover la clase 'active' de todos los enlaces
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

function openModal(title, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('projectModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}