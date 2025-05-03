/* 
Antecedentes: 
    La llegada de HTML5, al apoyarse en nuevas librerías, hace que se asocie a Js.
    Resolvía de manera más eficaz determinadas acciones de los elementos.
    -Introduce una nueva librería para poder seleccionar los elementos de HTML, al igual
    que en CSS3, surgían los selectores.
    -Alimenta estructuras tales como:
        I) querySelector
            una selección parecida al getElementById, con una ventaja: que apunta
            no solo a un lugar concreto, si no a varios elementos de estilo 'className'
        
        II) querySelectorAll
            una selección parecida al getElementById, con una ventaja: que apunta
            no solo a un lugar concreti, si no a varios elementos.


*/
/* Con este método consigo guardar en la var 'botones' un array de los botones y sus eventos: */

var botones=document.querySelectorAll('button');

/* Trabajando la estructura de control de for of, puedo, con ese array de evento guardarlos
en una variable como objetos*/

for (x of botones) {
     
    /* Aprovechando 'x', quiero que el recorrido obtenido me saque a una acción concreta, 'click'
    para ello utilizaremos el método addEventListener() que definimos a continuación:
    Sintaxis:

        target.addEventlistener('tipo evento',función a lanzar(), boolean);

        por defecto siempre será 'true' el boolean, si no se pone, se entiende como 'true'

    */
x.addEventListener('click',function(){
    document.querySelector('.tex-danger','.mensaje').innerHTML= ' ' + this.innerHTML
});
/* this. para  */
}


