/* 1º Declaramos las variables principal*/
var contador = 0;

/* Función principal */
function incrementarClick() {
    sumarClick(++contador);
    venta();
}

/* Funcione subordinadas */
function sumarClick(contador) {
    document.getElementById('nºClick').innerHTML=(contador);
}

function venta() {
    var total=0
    total = (contador*103.80);
    document.getElementById('resultado').innerHTML=
    'El importe a abonar es: ' + total + '€' 
    
}
function borrar() {
contador=0
document.getElementById('nºClick').innerHTML=(contador);
document.getElementById('resultado').innerHTML= 'Importe a abonar es: ' + contador + ' €';
}

/* Redifusión */
function redifusion() {
    window.open('https://www.wetsuitoutlet.es/','_blank');
    window.open/* ('https://www.google.es/?gws_rd=ssl','_blank'); */
    window.open('https://www.apple.com/','_top');
}