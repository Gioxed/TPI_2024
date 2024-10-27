// Backend/notas.js
const express = require('express');
const router = express.Router();
const db = require('./db');

// Ruta para cargar notas
router.post('/cargarNotas', (req, res) => {
    const { grado, nombre, curso, notas } = req.body; // Asumiendo que envías este objeto desde el frontend
    const sql = `INSERT INTO notas (grado, nombre, curso, notas) VALUES (?, ?, ?, ?)`;

    db.query(sql, [grado, nombre, curso, JSON.stringify(notas)], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al guardar las notas' });
        }
        res.status(200).json({ message: 'Notas cargadas exitosamente', id: result.insertId });
    });
});

// Ruta para obtener notas (opcional)
router.get('/notas/:grado', (req, res) => {
    const { grado } = req.params;
    const sql = 'SELECT * FROM notas WHERE grado = ?';

    db.query(sql, [grado], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener las notas' });
        }
        res.status(200).json(results);
    });
});

module.exports = router;
