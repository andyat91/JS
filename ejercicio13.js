let readline = require("readline-sync");
//esto es para llamar a una librería;


/** Ejercicio 13
 * Construir un algoritmo tal que dado los datos de la base y la altura de un rectángulo calcule el perímetro y la superficie del mismo.
        Superficie= base*altura
        Perímetro = 2*(base + altura)
    La funcion debera retornar un string que diga La superficie es de 'x' o El perimetro es de 'x'
 */

let base=Number(readline.question("Introduce la base :"));
let altura=Number(readline.question("Introduce la altura :"));

let superficie=base*altura
let perimetro=2*(base+altura)
console.log("La superficie es :"+superficie);
console.log("El perimetro es :"+perimetro);