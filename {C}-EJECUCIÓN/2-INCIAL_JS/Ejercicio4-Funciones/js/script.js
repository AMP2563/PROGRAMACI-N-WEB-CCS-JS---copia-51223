/* 
=============================
LAS FUNCIONES: INTERACTIVIDAD
=============================

Entendidas y definidas como una declaración o expresiones funcionales.
Presentará una palabra reservada 'fuction'
Sintaxis:
1. nombre de la función (sensible a las grafías, minúscula inicial)
2. lista de parámetros que la define, estarán entre paréntesisi y separados por "," (coma)
    parámetro 1, parámetro2, parámetro3....
3. Tiene una acotación de su ámbito, definida por las llaves '{}' 
dentro de dichas llaves, será el ámbito de acción de nuestra función.
verbigracia:
    function nombreFuncion(){}

        el conjunto de directivas a ejecutar (otras funciones)


*/
/* ENTORNO DE LAS VARIABLES

El entorno lo define su ámbito, es decir, globales o locales.
=> Variables globales:
    + Hasta ahora todas han sido referenciadas globalmente
    + Se pueden acceder a su tipo y valor desde cualquier punto del script (ventaja)
    + Permanece cargada en la memoria adyacente (desventaja)
    + Uso exclusivo cuando necesitamos acceso transversal
    + Vairables globales como variable eje


*/
/* Variable GLOBAL ⬇️*/
var nombre=prompt('introduce tu nombre');

function saludar() {
    swal('Hola, bienvenido : ' + nombre);
}
/* VARIABLES LOCALES
    + Se encuentre dentro del entorno acotado de la función
    + Su acceso queda restringido a la acción de la función
    + Su ejecución carga a la llamada de la función
    + La variable al solo ejecutar a la acción de la función
        no se aloja en carga de memoria. Carga en la ejecución y es desalojada 
        de la memoría al finalizar la función.
    + Uso de la propiedad, estará asociada a la arqutectura de la función
        concreta en la que se encuentre.
    Variables tomadas como complementarias o secundarias.
    + Por defecto, no podremos acceder a dichas variables desde
     ningún otro ámbito que no sea la de la función





*/
    
function despedida() {

    //variable local⬇️
    var apellido = 'Cuadrado';

    swal('Vuelve pronto: ' + nombre + ' ' + apellido);
    
}