document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    // Manejo del registro
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevenir el envío normal del formulario

        const formData = new FormData(registerForm);
        const data = Object.fromEntries(formData); // Convertir FormData a un objeto

        try {
            const response = await fetch('../boletin/Backend/auth.js', { // Cambia la ruta a tu backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Convertir objeto a JSON
            });

            const result = await response.json();
            if (response.ok) {
                alert('Registro exitoso!');
                // Aquí puedes redirigir o hacer otra acción
            } else {
                alert(`Error: ${result.message}`); // Mostrar mensaje de error
            }
        } catch (error) {
            console.error('Error en el registro:', error);
            alert('Error en el registro. Intenta nuevamente más tarde.');
        }
    });

    // Manejo del inicio de sesión
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevenir el envío normal del formulario

        const formData = new FormData(loginForm);
        const data = Object.fromEntries(formData); // Convertir FormData a un objeto

        try {
            const response = await fetch('../boletin/Backend/auth.js', { // Cambia la ruta a tu backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Convertir objeto a JSON
            });

            const result = await response.json();
            if (response.ok) {
                alert('Inicio de sesión exitoso!');
                // Aquí puedes redirigir al usuario a la página principal o al dashboard
            } else {
                alert(`Error: ${result.message}`); // Mostrar mensaje de error
            }
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            alert('Error en el inicio de sesión. Intenta nuevamente más tarde.');
        }
    });
});
