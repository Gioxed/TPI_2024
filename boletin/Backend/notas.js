const express = require('express');
const router = express.Router();
const db = require('./db'); // Asegúrate de tener la conexión a la base de datos aquí

// Ruta para cargar notas
router.post('/cargarNotas', (req, res) => {
    const { dni_alumno, id_materia, nota_cuatrimestre1, nota_cuatrimestre2, nota_anual, rec_dic, rec_feb, nota_final } = req.body;

    const sql = `INSERT INTO notas (dni_alumno, id_materia, nota_cuatrimestre1, nota_cuatrimestre2, nota_anual, rec_dic, rec_feb, nota_final) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [dni_alumno, id_materia, nota_cuatrimestre1, nota_cuatrimestre2, nota_anual, rec_dic, rec_feb, nota_final], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al guardar las notas' });
        }
        res.status(200).json({ message: 'Notas cargadas exitosamente', id: result.insertId });
    });
});

// Ruta para obtener notas
router.get('/notas/:dni_alumno', (req, res) => {
    const { dni_alumno } = req.params;
    const sql = 'SELECT * FROM notas WHERE dni_alumno = ?';

    db.query(sql, [dni_alumno], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener las notas' });
        }
        res.status(200).json(results);
    });
});

module.exports = router;

