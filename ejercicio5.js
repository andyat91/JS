let readline = require("readline-sync");
//esto es para llamar a una librería;

/**
 *  Ejercicio 5
 *  Construir un algoritmo que reciba un numero entero y retorne
 *  un string que nos indique si es positivo, negativo o nulo.
 *  Debes tener en cuenta la opcion de que no se introduzca un
 *  numero.
 */

let num1 = parseInt(readline.question("Introduce un numero entero: "));

if (num1>=1) {
    console.log("el numero es positivo");
}  else if (num1==0) {
    console.log("numero nulo");
}  else if (num1<0) {
    console.log("el numero es negativo");
}  else if (isNaN(num1)) {
    console.log("No es un numero");
}
    
