const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Para manejar tokens (opcional)
const mysql = require('mysql2');

const router = express.Router();

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ELTPI2024',
    database: 'sistema_notas'
});

// Middleware para parsear el cuerpo de las peticiones
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Ruta para iniciar sesión
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Validar que se hayan recibido los datos
    if (!email || !password) {
        return res.status(400).json({ message: 'El email y la contraseña son obligatorios.' });
    }

    // Buscar el usuario en la base de datos
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            console.error('Error al buscar el usuario:', err);
            return res.status(500).json({ message: 'Error al buscar el usuario.' });
        }

        // Verificar si el usuario existe
        if (results.length === 0) {
            return res.status(401).json({ message: 'Credenciales inválidas.' });
        }

        const user = results[0];

        // Verificar la contraseña
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciales inválidas.' });
        }

        // Opcional: crear un token JWT (puedes ajustarlo según tus necesidades)
        const token = jwt.sign({ id: user.dni, role: user.role }, 'tu_secreto', { expiresIn: '1h' });

        return res.status(200).json({ message: 'Inicio de sesión exitoso.', token });
    });
});

module.exports = router;
