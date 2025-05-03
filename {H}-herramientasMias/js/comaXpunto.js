// Número con punto decimal
var numeroConPunto = 1234.56;

// Convertir a cadena con coma como separador decimal
var numeroConComa = numeroConPunto.toLocaleString('es-ES', { minimumFractionDigits: 2 });

console.log(numeroConComa); // Mostrará "1.234,56"

//OJO si se van a seguir haciendo operaciones, hay que devolver la cantidad al formato
// original usado 'parseFloat':

// CALCULO DE EDAD//

function someCode(birthday) {
    // Convertir la fecha de nacimiento a un objeto Date
    const parts = birthday.split('.');
    const birthDate = new Date(parts[2], parts[1] - 1, parts[0]);

    // Obtener la fecha actual
    const currentDate = new Date();

    // Calcular la diferencia en milisegundos entre las dos fechas
    const timeDiff = currentDate - birthDate;

    // Calcular la edad dividiendo la diferencia de tiempo por el número de milisegundos en un año
    const ageMilliseconds = timeDiff;
    const ageSeconds = ageMilliseconds / 1000;
    const ageMinutes = ageSeconds / 60;
    const ageHours = ageMinutes / 60;
    const ageDays = ageHours / 24;
    const ageYears = ageDays / 365.25; // Incluyendo años bisiestos

    // Redondear la edad a un número entero
    const roundedAge = Math.floor(ageYears);

    return roundedAge;
}

const BIRTHDAY = '25.10.1963';
const age = someCode(BIRTHDAY);
console.log(age);
