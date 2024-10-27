// Selecciona los elementos necesarios
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Alternar entre formularios
registerBtn.addEventListener('click', () => {
    container.classList.add("active"); // Activa el formulario de registro
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active"); // Activa el formulario de inicio de sesión
});

// Manejo del formulario de inicio de sesión
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir la recarga de la página
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    // Validación simple
    if (!email || !password) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Aquí deberías enviar los datos al backend
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Inicio de sesión exitoso");
            // Redirigir o manejar la respuesta aquí
        } else {
            alert(data.message || "Error al iniciar sesión");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error en la conexión al servidor");
    });
});

// Manejo del formulario de registro
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir la recarga de la página
    const name = registerForm.name.value;
    const lastname = registerForm.lastname.value;
    const dni = registerForm.dni.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    const role = registerForm.role.value;

    // Validación simple
    if (!name || !lastname || !dni || !email || !password || !role) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Aquí deberías enviar los datos al backend
    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, lastname, dni, email, password, role }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Registro exitoso");
            // Redirigir o manejar la respuesta aquí
        } else {
            alert(data.message || "Error al registrar");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error en la conexión al servidor");
    });
});

