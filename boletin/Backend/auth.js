const express = require('express');
const bcrypt = require('bcrypt'); // Para encriptar contraseñas
const jwt = require('jsonwebtoken'); // Para manejar tokens (opcional)
const mysql = require('mysql2'); // Asumiendo que usas MySQL
const router = express.Router();

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ELTPI2024',
    database: 'sistema_notas'
});

// Ruta para registrar un nuevo usuario
router.post('/register', (req, res) => {
    const { name, lastname, dni, email, password, role } = req.body;

    // Verificar si el usuario ya existe
    db.query('SELECT * FROM users WHERE dni = ?', [dni], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error en la base de datos' });
        }
        if (results.length > 0) {
            return res.status(400).json({ message: 'El DNI ya está registrado' });
        }

        // Encriptar la contraseña
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Insertar nuevo usuario en la base de datos
        db.query('INSERT INTO users (name, lastname, dni, email, password, role) VALUES (?, ?, ?, ?, ?, ?)', 
            [name, lastname, dni, email, hashedPassword, role],
            (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Error al registrar el usuario' });
                }
                return res.status(201).json({ message: 'Usuario registrado con éxito' });
            }
        );
    });
});

// Ruta para iniciar sesión
router.post('/login', (req, res) => {
    const { dni, password } = req.body;

    // Buscar el usuario por DNI
    db.query('SELECT * FROM users WHERE dni = ?', [dni], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error en la base de datos' });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        const user = results[0];

        // Verificar la contraseña
        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        // Opcional: Generar un token JWT
        const token = jwt.sign({ id: user.id, role: user.role }, 'tu_clave_secreta', { expiresIn: '1h' });

        return res.status(200).json({
            message: 'Inicio de sesión exitoso',
            token: token, // Enviar el token al cliente
            user: { id: user.id, name: user.name, role: user.role } // Enviar datos del usuario si es necesario
        });
    });
});

module.exports = router;
