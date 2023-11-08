let readline = require("readline-sync");
//esto es para llamar a una librería;

/** Ejercicio 34
 * a) Generar un numero aleatorio (del 1 al 10) que el usuario debe adivinar.
 * b) Crear un algoritmo que reciba un array con longitud 10 de numeros en el que utilizando un bucle
 *    while que calcule en que posicion del array se encuentra el numero que buscamos.
 *
 *  Si el numero aleatorio es 5 y tu array es [9,3,4,5,6,2,4] la solucion sera que has acertado
 *  al cuarto intento.
 */
let aleatorio=parseInt(Math.random()*10);

let array=[1,2,3,4,5,6,7,8,9,10];
let i=0;
if(aleatorio==0){
    aleatorio= aleatorio+1;
}
console.log(aleatorio);
while(i<array.length) {
   
    if(aleatorio==array[i]) {
        break;
    }
    i++;
}
console.log(`Has acertado en el intento ${i+1}`);

