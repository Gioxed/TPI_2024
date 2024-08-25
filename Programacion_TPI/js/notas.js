// Función para abrir una pestaña específica
function openTab(tabId) {
    // Ocultar todas las pestañas
    const tabs = document.querySelectorAll('.tabcontent');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // Mostrar la pestaña seleccionada
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}

// Inicializar la primera pestaña como visible por defecto
document.addEventListener('DOMContentLoaded', () => {
    openTab('7mo1'); // Puedes cambiar '7mo1' a cualquier otra pestaña por defecto
});

// Asignar el evento de clic a los botones de las pestañas
const tabLinks = document.querySelectorAll('.tablink');
tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const tabId = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
        openTab(tabId);
    });
});
