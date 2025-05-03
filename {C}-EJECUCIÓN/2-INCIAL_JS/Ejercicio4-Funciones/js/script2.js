/* VARIABLES GLOBALES */

var n1;
var n2;
//tenemos el parseInt() y el parseFloat
/* Con el parseInt, solo hará operaciones con enteros, si queremos
con decimales utilizaremos el parseFloat
 */
n1=parseInt(prompt('Introduce el 1º número'));
n2=parseInt(prompt('Introduce el 2º número'));

function sumar(params) {
    var resultado = n1+n2;
    swal('el resultado de la suma es: ' + resultado)
}

function restar(params) {
    var resultado = n1-n2;
    swal('el resultado de la resta es: ' + resultado)
}

function multiplicar(params) {
    var resultado = n1*n2;
    swal('el resultado de la multiplicación es: ' + resultado)
}

function dividir(params) {
    var resultado = n1/n2;
    swal('el resultado de la división es: ' + resultado)
}