/* 
RECOGIDA DE LA VARIABLE II (CONTROL MÁS DIRECTO)

a) Se realizará desde la propiedad .value, ed decir, vamos a acceder al valor
de la variable que en ese momento es insertada ene limput.
b) Mostraremos el lugar donde donde apunta dicha variable con la propiedad .getElementById
Sintaxis: Combinacioón de ambas propiedades

document.getElementById('agujero donde apunta la variable').value

--OS RECUERDO QUE LA VARIABLE que SE RECOGE  es SIEMPRE ES DE TIPO STRING--

*/

function entrar()
{
    //1º definimos variables (arquitectura)
    var miNombre;
    var miApellido;
    var miEmail;

    //2º recoger la variable apuntando a su lugar
    miNombre = document.getElementById('nombre').value
    miApellido = document.getElementById('apellido').value
    miEmail = document.getElementById('email').value

    //Mostrar las variables
    document.getElementById('resultado').innerHTML
        = 'AUTORIZACION DE ACCESO: ' + miNombre + ' ' + miApellido + '<br>  con el email: ' + miEmail


    swal({
        title: 'Bienvenido: ' + miNombre + ' ' + miApellido,
        text: 'Autorización',
        timer: 4000,
        button: false,
        icon: 'success',
    });
}