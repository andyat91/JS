let readline = require("readline-sync");
//esto es para llamar a una librería;

/**
 *  Ejercicio 6
 *  Crea un algoritmo que reciba un numero y determine si,
 *  el numero es 0, el numero es par o el numero es impar.
 *  Pista: para determinar el resto de una división, se usa la operación módulo %.
 */
let num1 = parseInt(readline.question("introduce un numero"));

// la condicion %2==0 se utiliza para ver si un numero es par o impar, siendo la condicion true par.
if (num1%2==0) {
    if (num1==0) {
    console.log("el numero es nulo"); 
    } else {
    console.log("el numero es par");  
    }

} else {
    console.log("el numero es impar");
    
}
