// ALGUNOS DE LOS PRINCIPALES COMANDOS DE JAVASCRIPT
// Variables y Tipos de Datos

// Declarar una variable
var nombre;

// Asignar un valor a la variable
nombre = "Juan";

// Tipos de datos
var numero = 10;
var decimal = 3.14;
var booleano = true/false;
var string = "Hola"; //(todo lo que vaya entre comillas '' o "" siempre será un caracter legible)
var array = [1, 2, 3];
var objeto = { clave: "valor" };

//OPERADORES
var suma = 5 + 3;
var resta = 10 - 4;
var multiplicacion = 2 * 6;
var division = 8 / 2;
var resto = 7 % 3;
var incremento = 5++;
var decremento = 5--;

//ESTRUCTURAS DE CONTROL
// Condicionales
if (condicion) {
    // código si la condición es verdadera
  } else {
    // código si la condición es falsa
  }
  
  // Bucles
  for (var i = 0; i < 5; i++) {
    // código a repetir
  }
  
  while (condicion) {
    // código mientras la condición sea verdadera
  }

//FUNCIONES
// Declarar una función
function saludar(nombre) {
    return "Hola, " + nombre + "!";
  }
  
  // Llamar a una función
  var mensaje = saludar("Ana");
  console.log(mensaje);

//OBJETOS Y ARRAYS
// Arrays
var frutas = ["manzana", "banana", "uva"];
console.log(frutas[0]);

// Objetos
var persona = {
  nombre: "Carlos",
  edad: 25,
  ciudad: "Madrid"
};
console.log(persona.nombre);

//MANIPULACIÓN DEL DOM
// Seleccionar un elemento por ID
var elemento = document.getElementById("miElemento");

// Cambiar el contenido de un elemento
elemento.innerHTML = "Nuevo contenido";

// Añadir un evento
elemento.addEventListener("click", function() {
  // código a ejecutar cuando se hace clic
});

  