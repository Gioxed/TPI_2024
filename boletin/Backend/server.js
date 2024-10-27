const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const notasRouter = require('./notas'); // Asegúrate de que la ruta sea correcta

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
app.use('/api', notasRouter); // Añade esta línea para usar el router de notas

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

