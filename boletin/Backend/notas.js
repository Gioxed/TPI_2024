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
    n.id_nota,
    n.informe_1_cuatrimestre1 AS matematica_1_1,
    n.informe_2_cuatrimestre1 AS matematica_1_2,
    n.nota_cuatrimestre1 AS matematica_1_final,
    n.informe_1_cuatrimestre2 AS matematica_2_1,
    n.informe_2_cuatrimestre2 AS matematica_2_2,
    n.nota_cuatrimestre2 AS matematica_2_final,
    n.nota_anual AS matematica_anual,
    n.rec_dic AS matematica_rec_dic,
    n.rec_feb AS matematica_rec_feb,
    n.nota_final AS matematica_final
    FROM
    notas n
    JOIN
    usuarios u ON n.dni_alumno = u.dni
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


//cargar notas
router.post('/api/cargar-nota', (req, res) => {
    const {
        dni_alumno, id_materia, informe_1_cuatrimestre1, informe_2_cuatrimestre1,
        nota_cuatrimestre1, informe_1_cuatrimestre2, informe_2_cuatrimestre2,
        nota_cuatrimestre2, nota_anual, rec_dic, rec_feb, nota_final
    } = req.body;

    const query = `
        INSERT INTO notas (
            dni_alumno, id_materia, informe_1_cuatrimestre1, informe_2_cuatrimestre1,
            nota_cuatrimestre1, informe_1_cuatrimestre2, informe_2_cuatrimestre2,
            nota_cuatrimestre2, nota_anual, rec_dic, rec_feb, nota_final
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE 
            informe_1_cuatrimestre1 = VALUES(informe_1_cuatrimestre1),
            informe_2_cuatrimestre1 = VALUES(informe_2_cuatrimestre1),
            nota_cuatrimestre1 = VALUES(nota_cuatrimestre1),
            informe_1_cuatrimestre2 = VALUES(informe_1_cuatrimestre2),
            informe_2_cuatrimestre2 = VALUES(informe_2_cuatrimestre2),
            nota_cuatrimestre2 = VALUES(nota_cuatrimestre2),
            nota_anual = VALUES(nota_anual),
            rec_dic = VALUES(rec_dic),
            rec_feb = VALUES(rec_feb),
            nota_final = VALUES(nota_final);
    `;

    pool.query(query, [
        dni_alumno, id_materia, informe_1_cuatrimestre1, informe_2_cuatrimestre1,
        nota_cuatrimestre1, informe_1_cuatrimestre2, informe_2_cuatrimestre2,
        nota_cuatrimestre2, nota_anual, rec_dic, rec_feb, nota_final
    ], (error, results) => {
        if (error) {
            console.error('Error al guardar la nota:', error);
            res.status(500).json({ message: 'Error al guardar la nota' });
        } else {
            res.status(200).json({ message: 'Nota guardada exitosamente' });
        }
    });
});

export default router;
