/* 
                      ==========================

                                VARIABLES

                      ==========================

    1º Instancias de Variables (crear variables)
        Sintaxis:
        var(palabra reservada) nombre de la variable(minúsculas) = (asignación) - asociado a un "valor");
        En el momento que definimos una palabra reservada en el scrip y es asignada "a lo que sea"
        queda cargado en memoria.
            1.1 Explícitamente o implícitamente
                Explícita:
                a. Genero la variable
                    var laVida;
                b. laVida='Antonio'

                Implícito:
                var laVida='Antonio';




*/
var nombre='Antonio Martínez Portero'

swal({
    title:'Profesor: ' + nombre,
    text:'Centro de Formación Calderón',
    timer: 4000,
    button: false,
    icon:'info',
})