/* 
                          ==================
                          TIPOS DE VARIABLES
                          ==================

                Introducción:
                Cuatro conceptos definidos que definen siempre a la variable:
                 a. Declaración
                 b. Tipo de variable:
                    -> STRING: cadena de caracteres, serán el conjunto de palabras que entiende y percibe
                    el usuario.
                    -> NUMBER: cualquier número real asociado a un algoritmo.
                    -> BOOLEANA: define la filosofía del lenguaje binario, 1 o 0
                    es decir, define esta variable con la dualidad: si/no true/false verdadero/falso, 
                    se representa con los valores: true o false
                 c. Valor
                 d. Concepto del valor (=)
                 En ocasiones surgirá que el tipo y el valor se definirán mutuamente.
*/

//a.
var texto;
var numero;
var buleana;
var igualdad;

// b. y c.
texto = 'Cadena de texto, es decir, cadena de caracteres';
numero = 5;
/* ⚓👉 Reflexión de dejar la variable vacia, a la espera de un valor
var texto='';
var numero=0;
*/

buleana = true;

igualdad == 5;

/* Trabajamos aquí otro método de impresión para
 poder trasladar mensaje o impesiones al usuario 
 Sintaxis:
 document.write(métodos o parámetros)
*/
document.write('<h3>Variable string: ' + texto + '<br>');
document.write('<h3>Variable number: ' + numero + '<br>');
document.write('<h3>Variable boolean: ' + buleana + '<br>');

/* Caracteres de escape
Sintaxis:             Descripción
  \n                    salto de límea
  \t                    tabulación
  \símbolo              \*(cuando quiero poner comillas)

*/
console.log('\t' + texto + '\n' + numero + '\n' + buleana);

