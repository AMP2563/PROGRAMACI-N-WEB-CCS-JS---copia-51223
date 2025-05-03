alert('¡Tonto el que lo lea!'); //típica ventana modal con 'alert' que no va p'alante ni p'atrás mientras no pulses aceptar

//defeinición de ariables con 'let' una de detrás de otra separadas con ',' o una debajo de otra con ';' al final
let admin, nome;
nome = ('Eduardo');
admin = nome;
alert(admin);

let ourPlanet = 'Tierra';

let currentUserName =  'Federico';

alert(ourPlanet)

alert(currentUserName)

//Cálculo fecha de cumpleaños, ejemplo de la variable 'const' y explicación de por qué van  algunas en mayúsculas
//const BIRTHDAY = '25.10.1963'; // ¿birthday en mayúsculas? SI, al ser siempre una constante
                               // y está calculada antes de su ejecución 
//const age = someCode(BIRTHDAY); // ¿age en mayúsculas? NO, es evaluada en la ejecución, cada año se calcula
            // ⬇️  ⬇️           // con lo cual, es menos constante que la fecha de nacicmiento, que no varía.
           //  ⬇️  ⬇️
/* Habría que definir la constante someCode */
                  
//'prompt' muestra un mensaje pidiendo al usuario que introduzca un texto.
// Retorna el texto o, si se hace clic en CANCELAR o se presiona Esc, retorna null.
      
let userName = prompt('¿Cómo te llamas?', '');
alert(userName); // true si se pulsa OK

