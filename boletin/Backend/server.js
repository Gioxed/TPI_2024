import express from "express";
import bodyParser from 'body-parser';
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from './auth.js';
import notasRoutes from './notas.js';
import pool from './db.js';  // Importa el pool de conexiones

const app = express();
app.set('port', 4000);

// Middleware para parsear JSON y URL-encoded
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Fix para __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Usar las rutas de autenticación y notas
app.use('/auth', authRoutes);
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

//cargar notas 
app.post('/api/cargar-nota', (req, res) => {
    console.log('Datos recibidos:', req.body);

    const { dni_alumno, matematica_informe_1_1, ingles_informe_1_1, juridico_informe_1_1, asistencia_informe_1_1, autogestion_informe_1_1, hardware_informe_1_1, practicas_informe_1_1, programacion_informe_1_1, redes_informe_1_1, arduino_informe_1_1, matematica_informe_1_2, ingles_informe_1_2, juridico_informe_1_2, asistencia_informe_1_2, autogestion_informe_1_2,hardware_informe_1_2, practicas_informe_1_2, programacion_informe_1_2, redes_informe_1_2, arduino_informe_1_2, matematica_nota_cuatrimestre1, ingles_nota_cuatrimestre1, juridico_nota_cuatrimestre1, asistencia_nota_cuatrimestre1, autogestion_nota_cuatrimestre1, hardware_nota_cuatrimestre1, practicas_nota_cuatrimestre1, programacion_nota_cuatrimestre1, redes_nota_cuatrimestre1, arduino_nota_cuatrimestre1  } = req.body;
    console.log('DNI Alumno:', dni_alumno);
    console.log('Matemática Informe 1-1:', matematica_informe_1_1);
    console.log('Inglés Informe 1-1:', ingles_informe_1_1);
    console.log('Juridico Informe 1-1:', juridico_informe_1_1);
    console.log('Asistencia Informe 1-1:', asistencia_informe_1_1);
    console.log('Autogestion Informe 1-1:', autogestion_informe_1_1);
    console.log('hardware Informe 1-1:', hardware_informe_1_1);
    console.log('Practicas Informe 1-1:', practicas_informe_1_1);
    console.log('Programacion Informe 1-1:', programacion_informe_1_1);
    console.log('Redes Informe 1-1:', redes_informe_1_1);
    console.log('Arduino Informe 1-1:', arduino_informe_1_1);

    console.log('Matemática Informe 1-2:', matematica_informe_1_2);
    console.log('Inglés Informe 1-2:', ingles_informe_1_2);
    console.log('Juridico Informe 1-2:', juridico_informe_1_2);
    console.log('Asistencia Informe 1-2:', asistencia_informe_1_2);
    console.log('Autogestion Informe 1-2:', autogestion_informe_1_2);
    console.log('hardware Informe 1-2:', hardware_informe_1_2);
    console.log('Practicas Informe 1-2:', practicas_informe_1_2);
    console.log('Programacion Informe 1-2:', programacion_informe_1_2);
    console.log('Redes Informe 1-2:', redes_informe_1_2);
    console.log('Arduino Informe 1-2:', arduino_informe_1_2);

    console.log('Matemática nota 1:', matematica_nota_cuatrimestre1);
    console.log('Inglés nota 1:', ingles_nota_cuatrimestre1);
    console.log('Juridico nota 1:', juridico_nota_cuatrimestre1);
    console.log('Asistencia nota 1:', asistencia_nota_cuatrimestre1);
    console.log('Autogestion nota 1:', autogestion_nota_cuatrimestre1);
    console.log('hardware nota 1:', hardware_nota_cuatrimestre1);
    console.log('Practicas nota 1:', practicas_nota_cuatrimestre1);
    console.log('Programacion nota 1:', programacion_nota_cuatrimestre1);
    console.log('Redes nota 1:', redes_nota_cuatrimestre1);
    console.log('Arduino nota 1:', arduino_nota_cuatrimestre1);

    const query = `
        INSERT INTO notas (dni_alumno, id_materia, informe_1_cuatrimestre1, informe_2_cuatrimestre1, nota_cuatrimestre1) 
        VALUES
            (?, 1, ?, ?, ?), (?, 2, ?, ?, ?),         
            (?, 3, ?, ?, ?), (?, 4, ?, ?, ?),
            (?, 5, ?, ?, ?), (?, 6, ?, ?, ?),
            (?, 7, ?, ?, ?), (?, 8, ?, ?, ?),
            (?, 9, ?, ?, ?), (?, 10, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
        informe_1_cuatrimestre1 = VALUES(informe_1_cuatrimestre1),
        informe_2_cuatrimestre1 = VALUES(informe_2_cuatrimestre1),
        nota_cuatrimestre1 = VALUES(nota_cuatrimestre1);
    `;

    const values = [
        dni_alumno, matematica_informe_1_1, matematica_informe_1_2, matematica_nota_cuatrimestre1,
        dni_alumno, ingles_informe_1_1, ingles_informe_1_2,ingles_nota_cuatrimestre1,
        dni_alumno, juridico_informe_1_1, juridico_informe_1_2, juridico_nota_cuatrimestre1,
        dni_alumno, asistencia_informe_1_1, asistencia_informe_1_2, asistencia_nota_cuatrimestre1,
        dni_alumno, autogestion_informe_1_1, autogestion_informe_1_2, autogestion_nota_cuatrimestre1,
        dni_alumno, hardware_informe_1_1, hardware_informe_1_2, hardware_nota_cuatrimestre1,
        dni_alumno, practicas_informe_1_1, practicas_informe_1_2, practicas_nota_cuatrimestre1,
        dni_alumno, programacion_informe_1_1, programacion_informe_1_2, programacion_nota_cuatrimestre1,
        dni_alumno, redes_informe_1_1, redes_informe_1_2, redes_nota_cuatrimestre1,
        dni_alumno, arduino_informe_1_1, arduino_informe_1_2, arduino_nota_cuatrimestre1,

    ];

    console.log('Valores a insertar:', values);

    pool.query(query, values, (error, results) => {
        if (error) {
            console.error('Error al guardar la nota:', error);
            res.status(500).json({ message: 'Error al guardar la nota' });
        } else {
            res.status(200).json({ message: 'Nota guardada exitosamente' });
        }
    });
});




// Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});



// app.post('/api/cargar-nota', (req, res) => {
//     console.log('Datos recibidos:', req.body);

//     const {
//         dni_alumno,
//         matematica_informe_1_1, matematica_informe_1_2, matematica_nota_final_1, matematica_informe_2_1, matematica_informe_2_2, matematica_nota_final_2, matematica_anual, matematica_final,
//         ingles_informe_1_1, ingles_informe_1_2, ingles_nota_final_1, ingles_informe_2_1, ingles_informe_2_2, ingles_nota_final_2, ingles_anual, ingles_final,
//         juridico_informe_1_1, juridico_informe_1_2, juridico_nota_final_1, juridico_informe_2_1, juridico_informe_2_2, juridico_nota_final_2, juridico_anual, juridico_final,
//         asistencia_informe_1_1, asistencia_informe_1_2, asistencia_nota_final_1, asistencia_informe_2_1, asistencia_informe_2_2, asistencia_nota_final_2, asistencia_anual, asistencia_final,
//         autogestion_informe_1_1, autogestion_informe_1_2, autogestion_nota_final_1, autogestion_informe_2_1, autogestion_informe_2_2, autogestion_nota_final_2, autogestion_anual, autogestion_final,
//         hardware_informe_1_1, hardware_informe_1_2, hardware_nota_final_1, hardware_informe_2_1, hardware_informe_2_2, hardware_nota_final_2, hardware_anual, hardware_final,
//         practicas_informe_1_1, practicas_informe_1_2, practicas_nota_final_1, practicas_informe_2_1, practicas_informe_2_2, practicas_nota_final_2, practicas_anual, practicas_final,
//         programacion_informe_1_1, programacion_informe_1_2, programacion_nota_final_1, programacion_informe_2_1, programacion_informe_2_2, programacion_nota_final_2, programacion_anual, programacion_final,
//         redes_informe_1_1, redes_informe_1_2, redes_nota_final_1, redes_informe_2_1, redes_informe_2_2, redes_nota_final_2, redes_anual, redes_final,
//         arduino_informe_1_1, arduino_informe_1_2, arduino_nota_final_1, arduino_informe_2_1, arduino_informe_2_2, arduino_nota_final_2, arduino_anual, arduino_final
//     } = req.body;

//     console.log('DNI Alumno:', dni_alumno);

//     const query = 
// informe_1_cuatrimestre2, informe_2_cuatrimestre2, nota_cuatrimestre2, nota_anual, rec_dic, rec_feb, nota_final
//informe_1_cuatrimestre2 = VALUES(informe_1_cuatrimestre2),
//        informe_2_cuatrimestre2 = VALUES(informe_2_cuatrimestre2),
 //       nota_cuatrimestre2 = VALUES(nota_cuatrimestre2),
 //       nota_anual = VALUES(nota_anual),
   //     rec_dic = VALUES(rec_dic),
     //   rec_feb = VALUES(rec_feb),
       // nota_final = VALUES(nota_final);


//     const values = [
//         dni_alumno, 1, matematica_informe_1_1, matematica_informe_1_2, matematica_nota_final_1, matematica_informe_2_1, matematica_informe_2_2, matematica_nota_final_2, matematica_anual, null, null, matematica_final,
//         dni_alumno, 2, ingles_informe_1_1, ingles_informe_1_2, ingles_nota_final_1, ingles_informe_2_1, ingles_informe_2_2, ingles_nota_final_2, ingles_anual, null, null, ingles_final,
//         dni_alumno, 3, juridico_informe_1_1, juridico_informe_1_2, juridico_nota_final_1, juridico_informe_2_1, juridico_informe_2_2, juridico_nota_final_2, juridico_anual, null, null, juridico_final,
//         dni_alumno, 4, asistencia_informe_1_1, asistencia_informe_1_2, asistencia_nota_final_1, asistencia_informe_2_1, asistencia_informe_2_2, asistencia_nota_final_2, asistencia_anual, null, null, asistencia_final,
//         dni_alumno, 5, autogestion_informe_1_1, autogestion_informe_1_2, autogestion_nota_final_1, autogestion_informe_2_1, autogestion_informe_2_2, autogestion_nota_final_2, autogestion_anual, null, null, autogestion_final,
//         dni_alumno, 6, hardware_informe_1_1, hardware_informe_1_2, hardware_nota_final_1, hardware_informe_2_1, hardware_informe_2_2, hardware_nota_final_2, hardware_anual, null, null, hardware_final,
//         dni_alumno, 7, practicas_informe_1_1, practicas_informe_1_2, practicas_nota_final_1, practicas_informe_2_1, practicas_informe_2_2, practicas_nota_final_2, practicas_anual, null, null, practicas_final,
//         dni_alumno, 8, programacion_informe_1_1, programacion_informe_1_2, programacion_nota_final_1, programacion_informe_2_1, programacion_informe_2_2, programacion_nota_final_2, programacion_anual, null, null, programacion_final,
//         dni_alumno, 9, redes_informe_1_1, redes_informe_1_2, redes_nota_final_1, redes_informe_2_1, redes_informe_2_2, redes_nota_final_2, redes_anual, null, null, redes_final,
//         dni_alumno, 10, arduino_informe_1_1, arduino_informe_1_2, arduino_nota_final_1, arduino_informe_2_1, arduino_informe_2_2, arduino_nota_final_2, arduino_anual, null, null, arduino_final
//     ];

//     console.log('Valores a insertar:', values);

//     pool.query(query, values, (error, results) => {
//         if (error) {
//             console.error('Error al guardar la nota:', error);
//             res.status(500).json({ message: 'Error al guardar la nota' });
//         } else {
//             res.status(200).json({ message: 'Nota guardada exitosamente' });
//         }
//     });
// });