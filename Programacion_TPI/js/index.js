//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});

//CARGAR LAS NOTAS MENSAJE DE CONFIRMACION
document.getElementById("cargarNotasForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const materia = document.getElementById("materia").value;
    const alumno = document.getElementById("alumno").value;
    const nota = document.getElementById("nota").value;
    const fecha = document.getElementById("fecha").value;

    // Aquí puedes agregar la lógica para enviar los datos al servidor
    console.log("Materia:", materia);
    console.log("Alumno:", alumno);
    console.log("Nota:", nota);
    console.log("Fecha:", fecha);

    alert("Nota cargada exitosamente!");
});



