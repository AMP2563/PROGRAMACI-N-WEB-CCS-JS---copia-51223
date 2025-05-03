
function aplicarDto() {
    //RECOGEMOS la variable
    var opcion=document.getElementById('opcion').value;
    //Variable, donde MOSTRAMOS el resultado
    var resultado=document.getElementById('resultado');
    //Estructura de análisis de la variable que entra
    switch (opcion) {
        case 'Platinum':
            resultado.innerHTML='Eres un tipo con suerte'
            break;

            case 'Deluxe':
                resultado.innerHTML='Eres un tipo con suerte'
            
            break;

            case 'Premium':
                resultado.innerHTML='Eres un tipo con suerte'
            
            break;
    
        default:
            resultado.innerHTML='Prueba otra vez, espabilao'
            break;
            /* Se pueden trabajar también los swal */
    }

}