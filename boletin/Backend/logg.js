const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Ruta para el inicio de sesión
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    // Aquí iría la lógica de autenticación (verificar usuario en la base de datos)
    res.json({ success: true }); // Cambia esto según el resultado de la autenticación
});

// Ruta para el registro
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    // Aquí iría la lógica de registro (guardar usuario en la base de datos)
    res.json({ success: true }); // Cambia esto según el resultado del registro
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
