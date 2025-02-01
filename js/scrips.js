        // Función para manejar el envío del formulario de contacto
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Te responderé pronto.');
            document.getElementById('contact-form').reset();
        });

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