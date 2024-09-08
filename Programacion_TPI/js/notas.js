function openTab(tabId) {
    // Oculta todos los contenidos de las pestañas
    var tabcontents = document.querySelectorAll('.tabcontent');
    tabcontents.forEach(function(tabcontent) {
      tabcontent.style.display = 'none';
    });
  
    // Muestra el contenido de la pestaña seleccionada
    var tablinks = document.querySelectorAll('.tablink');
    tablinks.forEach(function(tablink) {
      tablink.className = tablink.className.replace(' active', '');
    });
  
    document.getElementById(tabId).style.display = 'block';
    document.querySelector('[onclick="openTab(\'' + tabId + '\')"]').className += ' active';
  }
  
  // Abre la primera pestaña por defecto
  document.addEventListener('DOMContentLoaded', function() {
    openTab('7mo1');
  });
  