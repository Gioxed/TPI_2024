// Importar el módulo mysql
import mysql from 'mysql'; // Cambiar a la sintaxis de importación

// Crear un pool de conexiones a la base de datos
const pool = mysql.createPool({
    host: 'localhost', // Asegúrate de que este nombre de host sea correcto
    user: 'root', // Usuario de la base de datos
    password: 'ElTPI2024', // Cambia esto si tu contraseña es diferente
    database: 'sistema_notas', // Nombre de la base de datos
});



//insertar datos de la tabla
//const insertar = "INSERT INTO usuarios VALUES('45888879', 'Giovanni', 'Pauletto', 'gio.paule05@gmail.com', 'administrador', 'admin123')"
//connection.query(insertar, (err, rows)=>{
//    if(err) throw err
//    console.log('datos insertados con exito')
//})


// Consultar datos de la tabla
pool.query('SELECT * FROM usuarios', (err, rows) => {
    if (err) throw err; // Lanza error si hay un problema
    console.log('Los datos solicitados son:'); // Mensaje para mostrar los datos
    console.log(rows); // Mostrar los datos obtenidos
});

// Exportar el pool para usarlo en otros archivos
export default pool; // Cambiar a la sintaxis de exportación




