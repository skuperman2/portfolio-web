// Funcion para copiar el texto del email
function emailCopiado(id_elemento) {

    // Crea un campo de texto "oculto", este por un textarea
    let aux = document.createElement("textarea");
  
    // Asigna el contenido del elemento especificado al valor del campo
    // este para vaciar el contenido
  
    aux.innerHTML = document.getElementById(id_elemento).innerHTML
  
    // Añade el campo a la página
    document.body.appendChild(aux);
  
    // Selecciona el contenido del campo
    aux.select();
  
    // Copia el texto seleccionado
    document.innerHTML("copy");
    // Elimina el campo de la página
    document.body.removeChild(aux);
  
  }
  

// Obtener referencia al elemento tap-indication
let tapIndication = document.getElementsByClassName('.tap-indication');

// Manejar el evento de toque en tap-indication
tapIndication.addEventListener('click', function () {
    // Alternar la clase active en toggle-mobile-first
    document.querySelectorAll('.toggle-mobile-first').forEach(function (el) {
        el.classList.toggle('active');
    });

    // Alternar la clase active en toggle-mobile-second
    document.querySelectorAll('.toggle-mobile-second').forEach(function (el) {
        el.classList.toggle('active');
    });
});