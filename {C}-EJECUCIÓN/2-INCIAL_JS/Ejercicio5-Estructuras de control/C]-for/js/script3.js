//ATENCIÓN: recoger la variable con métodos no directos, necesita:

/* var inputBase=base; */
function algoritmo() {
    var inputBase=parseInt(base.value);
    console.log(inputBase)

    //variable secundaria
var contenido='';
for(var i=1; i<=10;i++ ){
    /* Gestiono de los valores del 1 al 10 */
    contenido+='base ' + inputBase + ' x ' + 'potencia ' + i + ' = ' + Math.pow(inputBase,i) + '<br>';
    console.log(contenido);
}
document.getElementById('resultado').innerHTML=contenido


}
