import express from 'express';
import bcrypt from 'bcrypt';
import { pool } from './db.js'; // Asegúrate de que esto apunte a tu archivo de configuración de la base de datos.

const router = express.Router();

// Ruta de inicio de sesión
router.post('/login', async (req, res) => {
    const { dni, password } = req.body;

    try {
        const user = await pool.query('SELECT * FROM users WHERE dni = ?', [dni]);

        if (user[0].length > 0) { // Asegúrate de que esto sea correcto según tu driver
            const isMatch = await bcrypt.compare(password, user[0][0].password); // Verificar la contraseña

            if (isMatch) {
                return res.redirect('/admin/index.html'); // Redirigir al panel del administrador
            } else {
                return res.status(401).json({ message: 'DNI o contraseña incorrectos' });
            }
        } else {
            return res.status(401).json({ message: 'DNI o contraseña incorrectos' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
});

export default router;

