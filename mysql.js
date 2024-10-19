const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',  // Asegúrate de que este nombre de host sea correcto
    user: 'root',
    password: 'ElTPI2024',  // Cambia esto si tu contraseña es diferente
    database: 'sistema_notas',
});

connection.connect((err) => {
    if (err) throw err;  // Lanza el error si hay un problema
    console.log('Conexión establecida exitosamente!');  // Mensaje de éxito
});


//insertar datos de la tabla
const insertar = "INSERT INTO usuarios VALUES('45888879', 'Giovanni', 'Pauletto', 'gio.paule05@gmail.com', 'administrador', 'admin123')"
connection.query(insertar, (err, rows)=>{
    if(err) throw err
    console.log('datos insertados con exito')
})

//consultar datos de la tabla
connection.query('select * from usuarios', (err, rows)=> {
    if(err) throw err
    console.log('los datos solicitados son:')
    console.log(rows)
})

connection.end();

