import express from 'express';
import pool from './db.js';

const router = express.Router(); // Crea un nuevo router de Express para definir las rutas que manejarán las solicitudes de login y registro

// Función que envuelve `pool.query` en una promesa para poder utilizar async/await
function queryDatabase(query, params) {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (error, results) => {
            if (error) return reject(error); // Si hay un error en la consulta, rechaza la promesa
            resolve(results); // Si la consulta es exitosa, resuelve la promesa con los resultados
        });
    });
}

// Ruta POST para el inicio de sesión de usuario
router.post('/login', async (req, res) => {
    const { dni, password } = req.body; // Extrae el DNI y la contraseña del cuerpo de la solicitud

    try {
        console.log("Iniciando sesión para el usuario:", dni);

        // Realiza una consulta a la base de datos para buscar el usuario con el DNI proporcionado
        const rows = await queryDatabase('SELECT * FROM usuarios WHERE dni = ?', [dni]);

        if (rows.length > 0) { // Si el usuario existe en la base de datos
            const user = rows[0]; // Obtiene el primer (y único) registro encontrado
            if (password === user.password) { // Verifica si la contraseña proporcionada es correcta
                console.log("Contraseña correcta, redirigiendo...");

                // URL de redirección basada en el rol del usuario
                let redirectUrl = '/usuario_comun/index.html'; // URL de redirección por defecto para usuarios comunes
                if (user.rol === 'administrador') { // Si el usuario es administrador
                    redirectUrl = '/admin/index.html';
                } else if (user.rol === 'encargado') { // Si el usuario pertenece al departamento de alumnado
                    redirectUrl = '/dept_notas/index.html';
                }

                // Responde con éxito y envía la URL de redirección correspondiente
                return res.json({ success: true, redirectUrl });
            } else {
                return res.status(401).json({ success: false, message: 'DNI o contraseña incorrectos' }); // Respuesta de error de autenticación
            }
        } else {
            return res.status(401).json({ success: false, message: 'Usuario no encontrado' }); // Respuesta si el usuario no existe
        }
    } catch (error) {
        console.error("Error en el servidor:", error); // Muestra en la consola el error del servidor
        return res.status(500).json({ success: false, message: 'Error en el servidor' }); // Envía una respuesta de error al cliente
    }
});

// Ruta POST para el registro de usuario
router.post('/register', async (req, res) => {
    const { dni, name, lastname, email, password, role } = req.body; // Extrae los datos necesarios del cuerpo de la solicitud

    try {
        // Verifica si ya existe un usuario con el mismo DNI
        const existingUser = await queryDatabase('SELECT * FROM usuarios WHERE dni = ?', [dni]);
        if (existingUser.length > 0) { // Si ya existe, responde con un mensaje de error
            return res.status(400).json({ success: false, message: 'El usuario ya existe' });
        }

        // Si el usuario no existe, inserta el nuevo usuario en la base de datos
        await queryDatabase('INSERT INTO usuarios (dni, nombre, apellido, email, rol, password) VALUES (?, ?, ?, ?, ?, ?)', 
            [dni, name, lastname, email, role, password]);

        res.json({ success: true, message: 'Usuario registrado exitosamente' }); // Responde con éxito si el registro es exitoso
    } catch (error) {
        console.log("Error en el servidor:", error); // Muestra el error en la consola
        return res.status(500).json({ success: false, message: 'Error en el servidor' }); // Envía una respuesta de error al cliente
    }
});



// Exporta el router para que pueda ser utilizado en el archivo principal de la aplicación
export default router;      


