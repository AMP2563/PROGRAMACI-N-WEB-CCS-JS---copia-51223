function menuDia() {
    /* 
    1º Declaro la variable
    */
    var fecha = new Date();
    var dia = fecha.getDay();
    //2º Variable residual, de apoyo
    var menu='';
    var postre='';
    var platoA='';
    var platoB='';
    precio1=0;

    //3º Estructura de control
    switch (dia) {
        case 0:
          menu='Cocido madrileño'
          precio=0;
          break;
        case 1:
          menu='Cerrado por descanso'
          break;
        case 2:
          menu='Paella '
          precio1=12
          break;
        case 3:
          menu='Caldereta de cordero'
          precio1=24
          break;
        case 4:
          menu='Fabada asturiana'
          break;
        case 5:
          menu='Hornazo'
          break;
        case 6:
          menu='Chuletón de la Granja'
           break;
    
        default:
          menu='Error de conexión#'
            break;
    }
//4º Mostrar la selección ejecutada
document.getElementById('resultado').innerHTML='Menú del día: <br> ' + menu + postre + precio1 + ' €';
}