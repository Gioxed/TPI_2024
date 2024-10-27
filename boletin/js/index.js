window.onload = function(){
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search")

    closeBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    searchBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    function menuBtnChange(){
        if(sidebar.classList.contains("open")){
            closeBtn.classList.replace("bx-menu","bx-menu-alt-right")
        }else{
            closeBtn.classList.replace("bx-menu-alt-right","bx-menu")
        }
    }
}



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





