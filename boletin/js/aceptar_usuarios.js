//FUNCION EXTRA QUE NO LOGRÉ QUE ME FUNCIONE entonces lo dejé aparte como futura actualización
// Cargar usuarios pendientes desde el backend
async function loadPendingUsers() {
    const pendingUsersList = document.getElementById('pending-users-list');
    pendingUsersList.innerHTML = ''; // Limpiar la tabla

    try {
        // Realizar una solicitud GET al backend para obtener los usuarios pendientes
        const response = await fetch('/api/solicitudes-registro'); // Ajusta la ruta según tu backend
        const pendingUsers = await response.json(); // Suponiendo que el backend devuelve los usuarios como JSON

        pendingUsers.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.dni}</td>
                <td>${user.nombre}</td>
                <td>${user.apellido}</td>
                <td>${user.email}</td>
                <td>${user.rol}</td>
                <td>
                    <button class="btn-accept" onclick="handleUserApproval('${user.email}', true)">Aceptar</button>
                    <button class="btn-reject" onclick="handleUserApproval('${user.email}', false)">Rechazar</button>
                </td>
            `;
            pendingUsersList.appendChild(row);
        });
    } catch (error) {
        console.error('Error al cargar los usuarios pendientes:', error);
        alert('Hubo un problema al cargar los usuarios pendientes.');
    }
}

// Función para manejar la aprobación o rechazo de usuarios
async function handleUserApproval(email, isApproved) {
    try {
        // Enviar la solicitud al backend para aprobar o rechazar el usuario
        const response = await fetch('/api/solicitudes-registro/estado', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                aprobado: isApproved
            }),
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message); // Mostrar el mensaje devuelto por el backend
            loadPendingUsers(); // Volver a cargar la lista de usuarios
        } else {
            throw new Error('No se pudo actualizar el estado del usuario.');
        }
    } catch (error) {
        console.error('Error al manejar la aprobación o rechazo del usuario:', error);
        alert('Hubo un problema al actualizar el estado del usuario.');
    }
}

// Llamar a la función cuando se cargue la página
window.onload = loadPendingUsers;

//AUTH.JS
import express from 'express';
import pool from './db.js'; // Asegúrate de que esta línea importe correctamente tu pool de conexión a la base de datos

const router = express.Router(); // Crea un nuevo router de Express para manejar las rutas de login y registro

// Función que envuelve `pool.query` en una promesa para poder usar async/await
function queryDatabase(query, params) {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (error, results) => {
            if (error) return reject(error); // Rechaza la promesa si hay un error en la consulta
            resolve(results); // Resuelve la promesa con los resultados si la consulta es exitosa
        });
    });
}

// Ruta POST para el inicio de sesión de usuario
router.post('/login', async (req, res) => {
    const { dni, password } = req.body; // Extrae el DNI y la contraseña del cuerpo de la solicitud

    try {
        console.log("Iniciando sesión para el usuario:", dni);

        // Consulta para verificar si el usuario existe en la tabla `usuarios`
        const rows = await queryDatabase('SELECT * FROM usuarios WHERE dni = ?', [dni]);

        if (rows.length > 0) { // Si se encontró al usuario
            const user = rows[0]; // Obtiene el primer registro encontrado
            if (password === user.password) { // Verifica si la contraseña es correcta
                console.log("Contraseña correcta, redirigiendo...");

                // URL de redirección basada en el rol del usuario
                let redirectUrl = '/usuario_comun/index.html'; // URL por defecto para usuarios comunes
                if (user.rol === 'administrador') { // Redirección si el usuario es administrador
                    redirectUrl = '/admin/index.html';
                } else if (user.rol === 'encargado') { // Redirección si el usuario es del departamento de alumnado
                    redirectUrl = '/dept_notas/index.html';
                }

                // Responde con éxito y envía la URL de redirección
                return res.json({ success: true, redirectUrl });
            } else {
                // Responde con error si la contraseña es incorrecta
                return res.status(401).json({ success: false, message: 'DNI o contraseña incorrectos' });
            }
        } else {
            // Responde con error si el usuario no se encontró
            return res.status(401).json({ success: false, message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error("Error en el servidor:", error); // Muestra el error en la consola
        return res.status(500).json({ success: false, message: 'Error en el servidor' }); // Responde con error del servidor
    }
});

// Ruta POST para enviar solicitud de registro de usuario
router.post('/register', async (req, res) => {
    const { dni, name, lastname, email, role } = req.body; // Extrae los datos necesarios del cuerpo de la solicitud

    try {
        // Verifica si ya existe un usuario con el mismo DNI
        const existingUser = await queryDatabase('SELECT * FROM usuarios WHERE dni = ?', [dni]);
        if (existingUser.length > 0) { // Si ya existe, responde con error
            return res.status(400).json({ success: false, message: 'El usuario ya existe' });
        }

        // Inserta la solicitud en la tabla `solicitudes_registro` con el estado inicial "pendiente"
        await queryDatabase('INSERT INTO solicitudes_registro (nombre, apellido, email, rol, estado) VALUES (?, ?, ?, ?, "pendiente")',
            [name, lastname, email, role]);

        // Responde con éxito si la solicitud se envió correctamente
        res.json({ success: true, message: 'Solicitud enviada. Esperando aprobación del administrador.' });
    } catch (error) {
        console.log("Error en el servidor:", error); // Muestra el error en la consola
        return res.status(500).json({ success: false, message: 'Error en el servidor' }); // Responde con error del servidor
    }
});

// Ruta GET para obtener las solicitudes de registro pendientes (accesible solo por el administrador)
router.get('/pending-users', async (req, res) => {
    try {
        console.log("Solicitando usuarios pendientes...");
        // Consulta las solicitudes en estado "pendiente"
        const pendingUsers = await queryDatabase('SELECT * FROM solicitudes_registro WHERE estado = "pendiente"');
        
        if (pendingUsers.length === 0) {
            console.log("No hay solicitudes pendientes.");
            return res.json({ success: false, message: 'No hay usuarios pendientes.' });
        }

        console.log("Usuarios pendientes encontrados:", pendingUsers);
        res.json({ success: true, data: pendingUsers }); // Devuelve la lista de solicitudes pendientes
    } catch (error) {
        console.error("Error al obtener los usuarios pendientes:", error); // Muestra el error en la consola
        res.status(500).json({ success: false, message: 'Error al obtener los usuarios pendientes del servidor' }); // Responde con error del servidor
    }
});


// Ruta POST para aprobar o rechazar una solicitud de registro de usuario
router.post('/approve-user', async (req, res) => {
    const { email, isApproved } = req.body; // Extrae el email de la solicitud y el estado de aprobación

    try {
        if (isApproved) {
            // Si se aprueba, se obtiene la solicitud desde `solicitudes_registro`
            const [solicitud] = await queryDatabase('SELECT * FROM solicitudes_registro WHERE email = ?', [email]);

            // Inserta el usuario en la tabla `usuarios` con una contraseña temporal
            await queryDatabase(
                'INSERT INTO usuarios (dni, nombre, apellido, email, rol, password) VALUES (?, ?, ?, ?, ?, ?)',
                [solicitud.dni, solicitud.nombre, solicitud.apellido, solicitud.email, solicitud.rol, 'defaultPassword']
            );
        }
        // Actualiza el estado de la solicitud a "aprobado" o "rechazado" en `solicitudes_registro`
        const newStatus = isApproved ? 'aprobado' : 'rechazado';
        await queryDatabase('UPDATE solicitudes_registro SET estado = ? WHERE email = ?', [newStatus, email]);

        // Responde con éxito indicando si fue aprobado o rechazado
        res.json({ success: true, message: `Usuario ${isApproved ? 'aprobado' : 'rechazado'}.` });
    } catch (error) {
        console.error("Error en el servidor:", error); // Muestra el error en la consola
        res.status(500).json({ success: false, message: 'Error en el servidor' }); // Responde con error del servidor
    }
});

// Exporta el router para que pueda ser utilizado en el archivo principal de la aplicación
export default router;



