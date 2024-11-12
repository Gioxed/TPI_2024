import express  from "express";
import bodyParser from 'body-parser';
//Fix para __direname
import path from "path";
import {fileURLToPath} from "url";
import authRoutes from './auth.js';
import notasRoutes from './notas.js';
import pool from './db.js';  // Importa el pool de conexiones

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


// Ruta para cargar notas
app.post('/api/cargar-nota', (req, res) => {
    const { dni_alumno, ...notas } = req.body;

    const materias = {
        matematica: 1,
        ingles: 2,
        juridico: 3,
        asistencia: 4,
        autogestion: 5,
        hardware: 6,
        practicas: 7,
        programacion: 8,
        redes: 9,
        arduino: 10
    };

    const queries = Object.keys(notas).map(notaField => {
        const [notaType, cuatrimestre, materia] = notaField.split('_');
        
        if (materias[materia]) {
            const idMateria = materias[materia];
            const value = notas[notaField] === '' ? null : (isNaN(parseInt(notas[notaField])) ? null : parseInt(notas[notaField]));

            return {
                dni_alumno,
                id_materia: idMateria,
                notaType,
                cuatrimestre,
                value
            };
        }
        return null;
    }).filter(query => query !== null);

    const query = 
        INSERT INTO notas (
            dni_alumno, id_materia, informe_1_cuatrimestre1, informe_2_cuatrimestre1,
            nota_cuatrimestre1, informe_1_cuatrimestre2, informe_2_cuatrimestre2,
            nota_cuatrimestre2, nota_anual, rec_dic, rec_feb, nota_final
        ) VALUES ?
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
    ;

    const values = [];

    queries.forEach(query => {
        const valueArray = [
            query.dni_alumno,
            query.id_materia,
            query.notaType === 'informe' && query.cuatrimestre === '1' ? query.value : null,
            query.notaType === 'informe' && query.cuatrimestre === '2' ? query.value : null,
            query.notaType === 'nota' && query.cuatrimestre === '1' ? query.value : null,
            query.notaType === 'informe' && query.cuatrimestre === '2' ? query.value : null,
            query.notaType === 'informe' && query.cuatrimestre === '2' ? query.value : null,
            query.notaType === 'nota' && query.cuatrimestre === '2' ? query.value : null,
            query.notaType === 'nota' && query.cuatrimestre === 'anual' ? query.value : null,
            query.notaType === 'rec' && query.cuatrimestre === 'dic' ? query.value : null,
            query.notaType === 'rec' && query.cuatrimestre === 'feb' ? query.value : null,
            query.notaType === 'nota' && query.cuatrimestre === 'final' ? query.value : null
        ];
        values.push(valueArray);
    });

    pool.query(query, [values], (error, results) => {
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

