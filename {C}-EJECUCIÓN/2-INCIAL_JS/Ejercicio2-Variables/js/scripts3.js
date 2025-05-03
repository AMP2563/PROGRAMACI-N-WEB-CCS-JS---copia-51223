 /* 
        Las posibilidades de entrar en la interfaz del sistema operativo
        del popio usuario, son muy restrictivas. No obstante,
        para algunas aplicaciones pueden ser muy útiles aunque no ofrezcan una visión
        estética muy lograda.
        document. era un estructura de partida del script
        windows

*/
// Declaración de variables
var nombre;
var apellidos;
var edad;
// aquí asigno a la variable un valor ⬇️
var nombre = window.prompt('Escribe tu nombre');
console.log(nombre);
var apellidos = window.prompt('Escribe tus apellidos');
console.log(apellidos);
var edad = window.prompt('Escribe tu edad');
console.log(edad);

/* Aquí hemos visto el funcionamiento del método .promt()
Genera un diálogo, asociado a dos botones y percibimos como  absorbe
el valor la variable al instruducir los datos el usuario.
        IMPORTANTE:
        Todo, todo, todo, valor que recogemos en la interfaz del usuario siempre vendrá definido
        por el tipo de variables STRING

*/
document.write('<h3>¡Hola tontaina! ' + 'eres ' + ' ' + nombre + ' ' + apellidos + ' ' + 'con ' + edad + ' años de edad,<br> ' + 'bienvenid@ a mi página');