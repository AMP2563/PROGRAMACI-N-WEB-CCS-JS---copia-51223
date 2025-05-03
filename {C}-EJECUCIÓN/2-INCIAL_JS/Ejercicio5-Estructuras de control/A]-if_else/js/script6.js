/* Condiciones de las variables y su definición
1º
Necesitamos los tramos de imc
a) <=18.5 imc Peso inforerior a lo normal, acercándonos a la extrema delgadez
b) tramo 24.9 <= Peso ideal o estructura normal, límites de salubridad
c) 29.9 <= Peso límite superior a lo normal, límites de obesidad
d) 30 > Peso límite de disfuncional de obesidad


*/
function calcularIMC() {
    //2º Declaración de variable
    var peso = parseFloat(dataPeso.value);
    var altura = parseFloat(dataAltura.value);

    //3º Declaración variables secundarias
    var imc =0;

    //4º Declarar como variable la respuesta
    var respuesta=document.getElementById('resultado');

    /* 5º Cálculo Matemático
    imc=peso/(altura)2 (el "2" significa al cuadrado)
     */

    imc = peso / Math.pow(altura, 2);
    console.log(imc);


/* imc=peso/(altura * altura);
console.log(imc); */



   if (imc <= 18.5) {
    respuesta.innerHTML='<h3>Flacucho'
   } else if(imc <= 24.9) {
    respuesta.innerHTML='<h3>¡Clavao!'
   } else if(imc <= 29.0)
   respuesta.innerHTML='<h3>Se te está llendo de las manos'
   else  {
    respuesta.innerHTML='<h3>¡Es más fácil saltarte que bordearte!'
   }      
    
}