/* 
Mostramos nuestro primer array
 */

var provincias =['-----------------','Valencia','Madrid','Sevilla','Málaga'];

/* Necesito de alguna manera guardarme en una variable todas las provincias
que hay en la variable 'provincias' */

for(var p=0; p<provincias.length;p++){
    var provinciasOpcion= new Option(provincias [p])
    document.getElementById('volcadoProvincias').options[p] = provinciasOpcion

}
/* Onchange, actua en los elementos de interacción donde hay
 una conexión de interface con el usuario, es decir, lo encontrarremos en:
 a) input
 b) select
 c) textarea
 d) checked
 e) En cualquiera de los casos que se percibe una alteración de los elementos
  */

function seleccion() {
     var mostrar = document.getElementById('volcadoProvincias').options[document.getElementById('VolcadoProvincias').selectedIndex].text
     /* selectedIndex: propiedad de selección de un elemento de html, llamándolo como objeto */
     
     swal('has seleccionado: ' + mostrar)
}
