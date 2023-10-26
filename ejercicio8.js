let readline = require("readline-sync");
//esto es para llamar a una librería;

/**
 *  Ejercicio 8
 *  Crea un algoritmo que reciba el sueldo de un trabajador y
 *  aplique un incremento del 15% si el sueldo es inferior a 1000€.
 *  El algoritmo debera retornar el nuevo salario.
 */

let sueldo = Number(readline.question("Cuanto cobras? "));

if (sueldo<1000) {
    console.log("Su nuevo salario es :"+(sueldo+((sueldo/100)*15)));
    
} else {
    console.log("Su sueldo no aplica subida");
    
}