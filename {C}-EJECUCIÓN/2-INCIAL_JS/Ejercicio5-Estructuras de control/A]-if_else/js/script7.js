
//1º Declaro las variables

// En dislesxia, buscamos rebordes, bordear las estructuras
var estiloDislexia=false;

// En daltonismo, trabajaremos los colores, es decir, invertimos del sólido a un gris
var estiloDaltonico=false;

//Podemos trabajar difuminando desde una sombre
var estiloEpilepsia=false;

function dislexia() {
if (estiloDislexia==false) {
    //Creamos otra propiedad muy util, que nos ayuda a trabajar no dentro del html, si no de css
    document.getElementById('resultado').style.border='3px solid black';
    
    //Aparece Cicerón y susurra el cambio, digamos que abre el interruptor
    estiloDislexia=true;
        
} else {
    document.getElementById('resultado').style.border='';
    estiloDislexia=false;
    
}
}
function daltonico() {
    if (estiloDaltonico==false) {
        document.getElementById('resultado').style.backgroundColor='grey';
        document.getElementById('resultado').style.color='white';
        estiloDaltonico=true;
    } else {
    document.getElementById('resultado').style.backgroundColor='#2196f3';
    document.getElementById('resultado').style.color='black';
    estiloDaltonico=false;
           
    }
    
}

function epilepsia() {
    if (estiloEpilepsia==false) {
        /* No utilizaremos la propiedad .style,
         si no .className que estará llamando a un estilo definido 
         en css */
         document.getElementById('resultado').className='sombra';
         estiloEpilepsia=true
        
    } else {
        document.getElementById('resultado').className='';
        estiloEpilepsia=false;
    }
    
}