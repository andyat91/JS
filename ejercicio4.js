let readline = require("readline-sync");
//esto es para llamar a una librería;

/**
 *  Ejercicio 4
 *  Cree un algoritmo que reciba 3 numeros y, si el primero de ellos
 *  es negativo, retorne el producto de los 3, si no lo es, retornara
 *  la suma. Si no se introducen tres numeros validos, retornara un string
 *  que diga Has introducido uno o varios caracteres no validos
 */

let num1= Number(readline.question("introduce el primer numero"));
let num2= Number(readline.question("introduce el segundo numero"));
let num3= Number(readline.question("introduce el tercer numero"));

if (num1<0) {
    console.log("Producto: "+(num1*num2*num3));
} else if (num1>=0) {
    console.log("Suma: "+(num1+num2+num3));
} else if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("No ha introducido valores validos");
}