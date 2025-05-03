//1º Declaración de variables locales
function cta() {
    var usuario = document.getElementById('user').value;

    /* Importante: Reducción de recogida de varaible, es decir, el script
    va adaptándose y muta a menores caracteres.  */
    var password = pw.value;
    document.getElementById('resultado').innerHTML=
    'Acceso permitido: ' + usuario + ' Con clave: ' + password;
    
}
function borrar() {
    document.getElementById('resultado').innerHTML=''
}

function redireccionar() {
   /*  location.href='https://www.bet365.es/' */
   location.href='5-variablesFuncionales.html'
    
}
    

