//1º Declaro las variables
var contador=0;
var incrementar=0;

/* A] Buscamos el incremento */
function incrementarClick()
 {
    incrementar = (++contador);
    document.getElementById('resultado').innerHTML=(contador);
    
}

function borrarClick() {
    contador = 0;
    document.getElementById('resultado').innerHTML= (contador);
    
}

/* B] Buscamos el incremento FUNCIONES RECURRENTES */
 function incrementarClick2() {
    sumaClick(++contador)
 }

function sumaClick(contador) {
    document.getElementById('resultado2').innerHTML=(contador);
} 

function borrarClick2()
 {
    contador = 0;
    sumaClick(contador);
}
