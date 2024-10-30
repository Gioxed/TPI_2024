import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './auth.js'; // Importa las rutas de autenticación

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuración del puerto y middleware
app.set('port', 4000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Para manejar formularios
app.use(express.static(path.join(__dirname, '../boletin/interfaz_admin'))); // Servir archivos de la interfaz del administrador

// Usar las rutas de autenticación
app.use('/auth', authRoutes); // Define la ruta para autenticación

// Ruta para la página de inicio de sesión
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../TPI/login.html')); // Ajusta esto si tu login está en otra ubicación
});

// Ruta para el panel del administrador
app.get('/admin/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../boletin/interfaz_admin/index.html')); // Cambia esto a la ruta de tu archivo
});

// Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});

