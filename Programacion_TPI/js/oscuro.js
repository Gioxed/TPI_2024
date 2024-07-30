document.getElementById("configuracionSistemaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const theme = document.getElementById("theme").value;
    const language = document.getElementById("language").value;

    // Guardar la configuración del sistema
    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);

    applyTheme(theme);

    alert("Configuración del sistema guardada con éxito.");
});

function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        document.querySelector("header").classList.add("dark-mode");
        document.querySelector(".menu__side").classList.add("dark-mode");
        document.querySelectorAll("form").forEach(form => form.classList.add("dark-mode"));
        document.querySelectorAll("button").forEach(button => button.classList.add("dark-mode"));
    } else {
        document.body.classList.remove("dark-mode");
        document.querySelector("header").classList.remove("dark-mode");
        document.querySelector(".menu__side").classList.remove("dark-mode");
        document.querySelectorAll("form").forEach(form => form.classList.remove("dark-mode"));
        document.querySelectorAll("button").forEach(button => button.classList.remove("dark-mode"));
    }
}

// Aplicar el tema al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.getElementById("theme").value = savedTheme;
    applyTheme(savedTheme);
});
