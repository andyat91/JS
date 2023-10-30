let readline = require("readline-sync");
//esto es para llamar a una librería;

/*
Ejercicio clockAngle
 *
Escribe un algoritmo que, dandole un número N que representa dónde
se encuentra actualmente el
minutero en un reloj, devuelva el ángulo
formado por el minutero y la marca de las 12 en punto en el reloj.
 *
El numero no podra ser mayor que 12, si lo fuera, el algoritmo retornara
que el numero introducido es incorrecto
 */
//busca el angulo que hay desde las 12 hasta la hora que se ponga en el prompt
let N=Number(readline.question("Introduce una hora"));
//si es menor a 0 y mayor a 12
if(N<0 || N>12) {
    console.log("No ha introducido un numero entre 1 y el 12");
} else {
//
//360/12=30 angulo por hora
    console.log(N*30);

}
