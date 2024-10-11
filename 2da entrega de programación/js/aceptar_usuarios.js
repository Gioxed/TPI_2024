// Simular usuarios pendientes (estos datos vendrían del backend)
const pendingUsers = [
    { name: "Juan Pérez", email: "juanperez@example.com", role: "Alumno" },
    { name: "María García", email: "mariagarcia@example.com", role: "Alumno" }
];

// Cargar usuarios pendientes en la tabla
function loadPendingUsers() {
    const pendingUsersList = document.getElementById('pending-users-list');
    pendingUsersList.innerHTML = ''; // Limpiar la tabla

    pendingUsers.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button class="btn-accept" onclick="handleUserApproval('${user.email}', true)">Aceptar</button>
                <button class="btn-reject" onclick="handleUserApproval('${user.email}', false)">Rechazar</button>
            </td>
        `;
        pendingUsersList.appendChild(row);
    });
}

// Función para manejar la aprobación o rechazo de usuarios
function handleUserApproval(email, isApproved) {
    if (isApproved) {
        alert(`Usuario ${email} ha sido aceptado.`);
        // Aquí enviarías una solicitud al backend para aceptar el usuario
    } else {
        alert(`Usuario ${email} ha sido rechazado.`);
        // Aquí enviarías una solicitud al backend para rechazar el usuario
    }
    // Después de la aprobación/rechazo, actualiza la lista de usuarios pendientes
    loadPendingUsers();
}

// Llamar a la función cuando se cargue la página
window.onload = loadPendingUsers;



