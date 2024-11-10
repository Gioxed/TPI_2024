import express  from "express";
import bodyParser from 'body-parser';
//Fix para __direname
import path from "path";
import {fileURLToPath} from "url";
import authRoutes from './auth.js';
import notasRoutes from './notas.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuración del puerto y middleware
const app = express();
app.set('port', 4000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Usar las rutas de autenticación
app.use('/auth', authRoutes);

// Usar las rutas de notas
app.use('/api', notasRoutes); 

// Rutas estáticas principales para CSS, JS e imágenes
app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/js', express.static(path.join(__dirname, '../js')));
app.use('/imagenes', express.static(path.join(__dirname, '../imagenes')));


// Sirve las interfaces de usuario como rutas estáticas
app.use('/admin', express.static(path.join(__dirname, '../interfaz_admin')));
app.use('/dept_notas', express.static(path.join(__dirname, '../interfaz_dept_notas')));
app.use('/usuario_comun', express.static(path.join(__dirname, '../interfaz_usuario_comun')));


// Ruta para la página de inicio de sesión
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../login.html'));
});




// Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});

