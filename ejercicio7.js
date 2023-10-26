let readline = require("readline-sync");
//esto es para llamar a una librería;

/**
 *  Ejercicio 7
 *  Construir un algoritmo que reciba la cantidad de dinero entregado
 *  y el coste del producto. Debera calcular el cambio que se entregara
 *  al cliente. Debes tener en cuenta que el cliente podria entregar
 *  una cantidad de dinero insuficiente.
 */
let dinero = Number(readline.question("Dinero entregado :"));
let coste = Number(readline.question("coste del producto :"));

if (dinero>coste) {
    console.log("Su cambio de vuelta es de: "+(dinero-coste))
} else if (dinero==coste){
    console.log("Ha entregado el dinero exacto");   
} else if (dinero<coste ){
    console.log("Lo siento, no tiene credito suficiente, le faltan :"+(coste-dinero));

} else if (isNaN(dinero) || isNaN(coste)) {
    console.log("No ha introducido cantidad correctamente");
}