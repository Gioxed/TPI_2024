const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

// Conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost', // Cambia esto si es necesario
    user: 'root', // Cambia esto si es necesario
    password: 'ElTPI2024', // Cambia esto si es necesario
    database: 'sistema_notas',
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) throw err;
    console.log('Conexión a la base de datos establecida exitosamente!');
});

// Middleware
app.use(bodyParser.json());

// Endpoint de registro de usuario (opcional)
app.post('/register', async (req, res) => {
    const { email, password, rol } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    db.query('INSERT INTO usuarios (email, contraseña, rol) VALUES (?, ?, ?)', 
        [email, hashedPassword, rol], 
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Usuario registrado exitosamente' });
        });
});

// Endpoint de login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(401).json({ message: 'Usuario no encontrado' });

        const user = results[0];
        // Compara la contraseña con bcrypt
        bcrypt.compare(password, user.contraseña, (err, match) => {
            if (match) {
                // Genera un token JWT
                const token = jwt.sign({ id: user.dni, rol: user.rol }, 'tu_clave_secreta'); // Cambia 'tu_clave_secreta' por una clave secreta más segura
                res.json({ token, rol: user.rol });
            } else {
                res.status(401).json({ message: 'Contraseña incorrecta' });
            }
        });
    });
});

// Middleware para autenticar token
const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(403);

    jwt.verify(token, 'tu_clave_secreta', (err, user) => { // Cambia 'tu_clave_secreta' por la misma clave que usaste al generar el token
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

app.post('/cargar-nota', authenticateJWT, (req, res) => {
    const { dni_alumno, id_materia, nota_cuatrimestre1, nota_cuatrimestre2, nota_anual, rec_dic, rec_feb, nota_final } = req.body;

    db.query('INSERT INTO notas (dni_alumno, id_materia, nota_cuatrimestre1, nota_cuatrimestre2, nota_anual, rec_dic, rec_feb, nota_final) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
        [dni_alumno, id_materia, nota_cuatrimestre1, nota_cuatrimestre2, nota_anual, rec_dic, rec_feb, nota_final], 
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Nota cargada exitosamente' });
        });
});


// Endpoint para obtener notas de un alumno
app.get('/notas', authenticateJWT, (req, res) => {
    const { id } = req.user; // ID del usuario logueado
    db.query('SELECT materia, nota FROM notas WHERE alumno_id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
