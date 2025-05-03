
function inicioReloj() {
    
    //1º declaración de variables
    var hoy=new Date();

    //2º variables secundarias
    var horas=hoy.getHours();
    var minutos=hoy.getMinutes();
    var segundos=hoy.getSeconds();
    /* Uso de la máquina ⬇️ perfecta o función perfecta para generar las decenas ⬇️*/

    segundos = decenas(segundos);
    minutos = decenas(minutos);
    horas = decenas(horas);

    //3ºvariables secundarias
    var diaSemana=hoy.toLocaleDateString('es-eu',{weekday:'long'});
    var dia=hoy.getDate();
    var mes=hoy.getMonth();
    var año=hoy.getFullYear();

    //MOSTRAMOS EL RELOJ:
    document.getElementById('reloj').innerHTML=
    '' + horas + ':' + minutos + ':' + segundos;

    //CREAMOS EL CALENDARIO:
    switch (mes) {
        case 0:
            
            break;
            case 0:
                mes='Enero'
            break;
            case 1:
                mes='Febrero'
            break;
            case 2:
                mes='Marzo'
            break;
            case 3:
                mes='Abril'
            break;
            case 4:
                mes='Mayo'
            break;
            case 5:
                mes='Junio'
            break;
            case 6:
                mes='Julio'
            break;
            case 7:
                mes='Agosto'
            break;
            case 8:
                mes='Septiembre'
            break;
            case 9:
                mes='Octubre'
            break;

            case 10:
                mes='Noviembre'
            break;

            case 11:
                mes='Diciembre'
            break;
    
        default:
            mes='Error 404# falta de conexión'
            break;
    }
    //MOSTRAMOS EL CALENDARIO
    document.getElementById('calendario').innerHTML=
    '' + diaSemana + '/' + dia + '/' + mes + '/' + año;


    /* Ejecuciones de función a partir de un parámetro de tiempo definido.
    Dos formas de ejecución:
    a) Ejecución clásica:
        setTimeout(funcion(){funcionAllamar(),funcionAllamar2},temporizamos en milisegundos);

    b) Ejecución mutada:
        var t=setTimeout(()=>{funcionAllamar(),funcionAllamar2}, timeout);

    */
 setTimeout(function(){inicioReloj()},1000);
}
/* Ejecución de una función perfecta, será la ejecución de referencia por donde quiera 
hacer pasar una variable.
Aparecerá un concepto nuevo, necesario de definir como es el return

⬇️⬇️MAQUINA PERFECTA ⬇️⬇️*/

function decenas(x) {
    if (x<10) {
        x='0' + x     
    }
    return (x);
    
}