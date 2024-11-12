// Importa tus modelos y configuraciones necesarias
import express from 'express';
import pool from './db.js';

const router = express.Router(); // Tu conexión a la base de datos


// Ruta para obtener las notas de un alumno por su DNI
router.get('/notas/:dni', (req, res) => {
    const dni = req.params.dni;
    
    const query = `
    SELECT
    u.nombre AS nombre_alumno,
    u.apellido AS apellido_alumno,

    -- Notas de Matemática
    MAX(CASE WHEN n.id_materia = 1 THEN n.informe_1_cuatrimestre1 END) AS matematica_1_1,
    MAX(CASE WHEN n.id_materia = 1 THEN n.informe_2_cuatrimestre1 END) AS matematica_1_2,
    MAX(CASE WHEN n.id_materia = 1 THEN n.nota_cuatrimestre1 END) AS matematica_1_final,
    MAX(CASE WHEN n.id_materia = 1 THEN n.informe_1_cuatrimestre2 END) AS matematica_2_1,
    MAX(CASE WHEN n.id_materia = 1 THEN n.informe_2_cuatrimestre2 END) AS matematica_2_2,
    MAX(CASE WHEN n.id_materia = 1 THEN n.nota_cuatrimestre2 END) AS matematica_2_final,
    MAX(CASE WHEN n.id_materia = 1 THEN n.nota_anual END) AS matematica_anual,
    MAX(CASE WHEN n.id_materia = 1 THEN n.rec_dic END) AS matematica_rec_dic,
    MAX(CASE WHEN n.id_materia = 1 THEN n.rec_feb END) AS matematica_rec_feb,
    MAX(CASE WHEN n.id_materia = 1 THEN n.nota_final END) AS matematica_final,

    -- Notas de Inglés
    MAX(CASE WHEN n.id_materia = 2 THEN n.informe_1_cuatrimestre1 END) AS ingles_1_1,
    MAX(CASE WHEN n.id_materia = 2 THEN n.informe_2_cuatrimestre1 END) AS ingles_1_2,
    MAX(CASE WHEN n.id_materia = 2 THEN n.nota_cuatrimestre1 END) AS ingles_1_final,
    MAX(CASE WHEN n.id_materia = 2 THEN n.informe_1_cuatrimestre2 END) AS ingles_2_1,
    MAX(CASE WHEN n.id_materia = 2 THEN n.informe_2_cuatrimestre2 END) AS ingles_2_2,
    MAX(CASE WHEN n.id_materia = 2 THEN n.nota_cuatrimestre2 END) AS ingles_2_final,
    MAX(CASE WHEN n.id_materia = 2 THEN n.nota_anual END) AS ingles_anual,
    MAX(CASE WHEN n.id_materia = 2 THEN n.rec_dic END) AS ingles_rec_dic,
    MAX(CASE WHEN n.id_materia = 2 THEN n.rec_feb END) AS ingles_rec_feb,
    MAX(CASE WHEN n.id_materia = 2 THEN n.nota_final END) AS ingles_final,

    -- Marco Juridico
    MAX(CASE WHEN n.id_materia = 3 THEN n.informe_1_cuatrimestre1 END) AS juridico_1_1,
    MAX(CASE WHEN n.id_materia = 3 THEN n.informe_2_cuatrimestre1 END) AS juridico_1_2,
    MAX(CASE WHEN n.id_materia = 3 THEN n.nota_cuatrimestre1 END) AS juridico_1_final,
    MAX(CASE WHEN n.id_materia = 3 THEN n.informe_1_cuatrimestre2 END) AS juridico_2_1,
    MAX(CASE WHEN n.id_materia = 3 THEN n.informe_2_cuatrimestre2 END) AS juridico_2_2,
    MAX(CASE WHEN n.id_materia = 3 THEN n.nota_cuatrimestre2 END) AS juridico_2_final,
    MAX(CASE WHEN n.id_materia = 3 THEN n.nota_anual END) AS juridico_anual,
    MAX(CASE WHEN n.id_materia = 3 THEN n.rec_dic END) AS juridico_rec_dic,
    MAX(CASE WHEN n.id_materia = 3 THEN n.rec_feb END) AS juridico_rec_feb,
    MAX(CASE WHEN n.id_materia = 3 THEN n.nota_final END) AS juridico_final,

    -- Asistencia 2
    MAX(CASE WHEN n.id_materia = 4 THEN n.informe_1_cuatrimestre1 END) AS asistencia_1_1,
    MAX(CASE WHEN n.id_materia = 4 THEN n.informe_2_cuatrimestre1 END) AS asistencia_1_2,
    MAX(CASE WHEN n.id_materia = 4 THEN n.nota_cuatrimestre1 END) AS asistencia_1_final,
    MAX(CASE WHEN n.id_materia = 4 THEN n.informe_1_cuatrimestre2 END) AS asistencia_2_1,
    MAX(CASE WHEN n.id_materia = 4 THEN n.informe_2_cuatrimestre2 END) AS asistencia_2_2,
    MAX(CASE WHEN n.id_materia = 4 THEN n.nota_cuatrimestre2 END) AS asistencia_2_final,
    MAX(CASE WHEN n.id_materia = 4 THEN n.nota_anual END) AS asistencia_anual,
    MAX(CASE WHEN n.id_materia = 4 THEN n.rec_dic END) AS asistencia_rec_dic,
    MAX(CASE WHEN n.id_materia = 4 THEN n.rec_feb END) AS asistencia_rec_feb,
    MAX(CASE WHEN n.id_materia = 4 THEN n.nota_final END) AS asistencia_final,

    -- Autogestion
    MAX(CASE WHEN n.id_materia = 5 THEN n.informe_1_cuatrimestre1 END) AS autogestion_1_1,
    MAX(CASE WHEN n.id_materia = 5 THEN n.informe_2_cuatrimestre1 END) AS autogestion_1_2,
    MAX(CASE WHEN n.id_materia = 5 THEN n.nota_cuatrimestre1 END) AS autogestion_1_final,
    MAX(CASE WHEN n.id_materia = 5 THEN n.informe_1_cuatrimestre2 END) AS autogestion_2_1,
    MAX(CASE WHEN n.id_materia = 5 THEN n.informe_2_cuatrimestre2 END) AS autogestion_2_2,
    MAX(CASE WHEN n.id_materia = 5 THEN n.nota_cuatrimestre2 END) AS autogestion_2_final,
    MAX(CASE WHEN n.id_materia = 5 THEN n.nota_anual END) AS autogestion_anual,
    MAX(CASE WHEN n.id_materia = 5 THEN n.rec_dic END) AS autogestion_rec_dic,
    MAX(CASE WHEN n.id_materia = 5 THEN n.rec_feb END) AS autogestion_rec_feb,
    MAX(CASE WHEN n.id_materia = 5 THEN n.nota_final END) AS autogestion_final,

    -- Hardware 4
    MAX(CASE WHEN n.id_materia = 6 THEN n.informe_1_cuatrimestre1 END) AS hardware_1_1,
    MAX(CASE WHEN n.id_materia = 6 THEN n.informe_2_cuatrimestre1 END) AS hardware_1_2,
    MAX(CASE WHEN n.id_materia = 6 THEN n.nota_cuatrimestre1 END) AS hardware_1_final,
    MAX(CASE WHEN n.id_materia = 6 THEN n.informe_1_cuatrimestre2 END) AS hardware_2_1,
    MAX(CASE WHEN n.id_materia = 6 THEN n.informe_2_cuatrimestre2 END) AS hardware_2_2,
    MAX(CASE WHEN n.id_materia = 6 THEN n.nota_cuatrimestre2 END) AS hardware_2_final,
    MAX(CASE WHEN n.id_materia = 6 THEN n.nota_anual END) AS hardware_anual,
    MAX(CASE WHEN n.id_materia = 6 THEN n.rec_dic END) AS hardware_rec_dic,
    MAX(CASE WHEN n.id_materia = 6 THEN n.rec_feb END) AS hardware_rec_feb,
    MAX(CASE WHEN n.id_materia = 6 THEN n.nota_final END) AS hardware_final,

    -- Practicas 2
    MAX(CASE WHEN n.id_materia = 7 THEN n.informe_1_cuatrimestre1 END) AS practicas_1_1,
    MAX(CASE WHEN n.id_materia = 7 THEN n.informe_2_cuatrimestre1 END) AS practicas_1_2,
    MAX(CASE WHEN n.id_materia = 7 THEN n.nota_cuatrimestre1 END) AS practicas_1_final,
    MAX(CASE WHEN n.id_materia = 7 THEN n.informe_1_cuatrimestre2 END) AS practicas_2_1,
    MAX(CASE WHEN n.id_materia = 7 THEN n.informe_2_cuatrimestre2 END) AS practicas_2_2,
    MAX(CASE WHEN n.id_materia = 7 THEN n.nota_cuatrimestre2 END) AS practicas_2_final,
    MAX(CASE WHEN n.id_materia = 7 THEN n.nota_anual END) AS practicas_anual,
    MAX(CASE WHEN n.id_materia = 7 THEN n.rec_dic END) AS practicas_rec_dic,
    MAX(CASE WHEN n.id_materia = 7 THEN n.rec_feb END) AS practicas_rec_feb,
    MAX(CASE WHEN n.id_materia = 7 THEN n.nota_final END) AS practicas_final,

    -- Programacion
    MAX(CASE WHEN n.id_materia = 8 THEN n.informe_1_cuatrimestre1 END) AS programacion_1_1,
    MAX(CASE WHEN n.id_materia = 8 THEN n.informe_2_cuatrimestre1 END) AS programacion_1_2,
    MAX(CASE WHEN n.id_materia = 8 THEN n.nota_cuatrimestre1 END) AS programacion_1_final,
    MAX(CASE WHEN n.id_materia = 8 THEN n.informe_1_cuatrimestre2 END) AS programacion_2_1,
    MAX(CASE WHEN n.id_materia = 8 THEN n.informe_2_cuatrimestre2 END) AS programacion_2_2,
    MAX(CASE WHEN n.id_materia = 8 THEN n.nota_cuatrimestre2 END) AS programacion_2_final,
    MAX(CASE WHEN n.id_materia = 8 THEN n.nota_anual END) AS programacion_anual,
    MAX(CASE WHEN n.id_materia = 8 THEN n.rec_dic END) AS programacion_rec_dic,
    MAX(CASE WHEN n.id_materia = 8 THEN n.rec_feb END) AS programacion_rec_feb,
    MAX(CASE WHEN n.id_materia = 8 THEN n.nota_final END) AS programacion_final,

    -- Redes 3
    MAX(CASE WHEN n.id_materia = 9 THEN n.informe_1_cuatrimestre1 END) AS redes_1_1,
    MAX(CASE WHEN n.id_materia = 9 THEN n.informe_2_cuatrimestre1 END) AS redes_1_2,
    MAX(CASE WHEN n.id_materia = 9 THEN n.nota_cuatrimestre1 END) AS redes_1_final,
    MAX(CASE WHEN n.id_materia = 9 THEN n.informe_1_cuatrimestre2 END) AS redes_2_1,
    MAX(CASE WHEN n.id_materia = 9 THEN n.informe_2_cuatrimestre2 END) AS redes_2_2,
    MAX(CASE WHEN n.id_materia = 9 THEN n.nota_cuatrimestre2 END) AS redes_2_final,
    MAX(CASE WHEN n.id_materia = 9 THEN n.nota_anual END) AS redes_anual,
    MAX(CASE WHEN n.id_materia = 9 THEN n.rec_dic END) AS redes_rec_dic,
    MAX(CASE WHEN n.id_materia = 9 THEN n.rec_feb END) AS redes_rec_feb,
    MAX(CASE WHEN n.id_materia = 9 THEN n.nota_final END) AS redes_final,

    -- Arduino
    MAX(CASE WHEN n.id_materia = 10 THEN n.informe_1_cuatrimestre1 END) AS arduino_1_1,
    MAX(CASE WHEN n.id_materia = 10 THEN n.informe_2_cuatrimestre1 END) AS arduino_1_2,
    MAX(CASE WHEN n.id_materia = 10 THEN n.nota_cuatrimestre1 END) AS arduino_1_final,
    MAX(CASE WHEN n.id_materia = 10 THEN n.informe_1_cuatrimestre2 END) AS arduino_2_1,
    MAX(CASE WHEN n.id_materia = 10 THEN n.informe_2_cuatrimestre2 END) AS arduino_2_2,
    MAX(CASE WHEN n.id_materia = 10 THEN n.nota_cuatrimestre2 END) AS arduino_2_final,
    MAX(CASE WHEN n.id_materia = 10 THEN n.nota_anual END) AS arduino_anual,
    MAX(CASE WHEN n.id_materia = 10 THEN n.rec_dic END) AS arduino_rec_dic,
    MAX(CASE WHEN n.id_materia = 10 THEN n.rec_feb END) AS arduino_rec_feb,
    MAX(CASE WHEN n.id_materia = 10 THEN n.nota_final END) AS arduino_final

    FROM
    notas n
    JOIN usuarios u ON n.dni_alumno = u.dni
    WHERE
    u.dni = ?;

`;

    // Ejecuta la consulta en la base de datos
    pool.query(query, [dni], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al obtener las notas' });
        }

        // Si no hay resultados, enviar un mensaje adecuado
        if (result.length === 0) {
            return res.status(404).json({ message: 'No se encontraron notas para este alumno' });
        }

        // Devuelve las notas encontradas al frontend
        res.json(result);
    });
});


// Ruta para obtener la lista de alumnos
router.get('/alumnos', async (req, res) => {
    try {
        const query = 'SELECT nombre, apellido, dni FROM usuarios WHERE rol = "alumno"';
        pool.query(query, (err, alumnos) => {  // Usa pool.query en lugar de db.execute
            if (err) {
                console.error('Error al obtener los alumnos:', err);
                return res.status(500).json({ message: 'Error al obtener los alumnos', error: err.message });
            }
            res.json(alumnos);  // Devuelve los alumnos como respuesta
        });
    } catch (error) {
        console.error('Error al obtener los alumnos:', error);
        res.status(500).json({ message: 'Error al obtener los alumnos', error: error.message });
    }
});


export default router;
