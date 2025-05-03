/* Análisis del cálculo

Crédito interés simple o directo

Condiciones:
Tramos de capital de interés y tiempo:
- hasta 24 meses tipo de interés de 6%
- hasta 60 meses interés del 9%
- a partir de 60 meses intrés del 12%

CRÉDITO*RÉDITO*TIEMPO
*/

function calcular() {
    //1º Recoger en una variable el total del crédito
    var capital= parseFloat(prompt('Introduce el precio de tu curso'));
    var tiempo= parseInt(prompt('Meses para pagar cómodamente'));
    //2ª Variables secundarias
    var interes= 0;
    var cuota= 0;
    var pagoInteres= 0;

    //3º Conjugar las variables con las condiciones planteadas, para ello
    // el "if else" es ideal

    if (tiempo<=24) {
        interes=1.06
    } else if (tiempo<=60) {
        interes=1.09
    } else {
        interes=1.12
    }
    pagoInteres=(capital*interes*(tiempo/12));
    cuota=(capital+pagoInteres)/tiempo;

    //4º Mostrar el resultado de las variables
    document.getElementById('resultado').innerHTML=
    'Crédito solicitado: ' + capital + ' €' + '<br>' +
    'Tipo de interés: ' + ((interes-1)*100).toFixed(2) + ' €' + '<br>' +
    'Tiempo a pagar: ' + tiempo + ' meses' + '<br>' +
    'Total de interés a pagar: ' + pagoInteres.toFixed(2) + ' €' + '<br>';

    document.getElementById('resulta2').innerHTML=
    'Cuota mensual: ' + cuota.toFixed(2) +  ' €' + '<br>';

    //Aparece una n ueva propiedad para ajustar los decimales de operaciones
    //algebráicas
    
}
/* Una vez las configuracines de window, las intentamos aprovechar con imprimir pantalla con la propiedad print() */
function descargar() {
    window.print()
    
}