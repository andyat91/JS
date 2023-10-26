let readline = require("readline-sync");
//esto es para llamar a una librería;


/**
 *  Ejercicio 9
 *  Construir un algoritmo que reciba 5 calificaciones de un alumno y retorne el promedio
 *  junto con la palabra "aprobado" (recuerda la concatenacion y el uso de ``) si el alumno tiene un promedio
 *  mayor o igual a 5, y "no aprobado" en caso contrario.
 *  En caso de que se introdujera alguno 'no numero' el algoritmo debera retornar un string
 *  diciendo 'Debes introducir sólo números. Inténtalo de nuevo'
 */

let cal1=Number(readline.question("Primera asignatura :"));
let cal2=Number(readline.question("Segunda asignatura :"));
let cal3=Number(readline.question("Tercera asignatura :"));
let cal4=Number(readline.question("Cuarta asignatura :"));
let cal5=Number(readline.question("Quinta asignatura :"));
let resultado=(cal1+cal2+cal3+cal4+cal5)/5


    

if (resultado>=5) {
    console.log("APROBADO, su promedio es :"+resultado);
} else if(resultado<5) {
    console.log("SUSPENSO, su resultado es:"+resultado);
} else if(isNaN(resultado)) {
    console.log("No ha introducido bien los numeros");
}
