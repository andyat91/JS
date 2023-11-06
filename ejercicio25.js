let readline = require("readline-sync");
//esto es para llamar a una librería;

/**
 *  Ejercicio 25
 *  Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese tamaño.
 *  Los asteriscos sólo se verán en el borde del cuadrado, no en el interior.
 *  Ejemplo, para lado = 4 escribiría:
 *  * * * *
 *  *     *
 *  *     *
 *  * * * *
 *  Recuerda la estructura repetitiva For.
 *
 *  La funcion debera retornar cada linea + un espacio en blanco '\n';
 */
//con ayuda:
let lado= Number(readline.question("introduzca un numero :"));
//bucle for donde se crea una linea vacia
for(j=1 ; j<=lado ; j++) {
    let linea = "";
//IMPORTANTE: anidado donde si i=primera posicion pinta un asterisco
//como sigue en la primera le tengo que decir que j también es igual a la primera posicion para que siga pintando
    for(i=1 ; i<=lado ; i++) {
//en la segunda linea i=2 y j=1(vuelve a empezar el bucle), entonces me pinta la primera posicion
//pero ya en la segunda posicion de la segunda linea no se cumple if solo el ultimo.
        if( i==1 || i==lado || j==1 || j==lado) {
            linea+= "*";
        } else {
            linea+= " ";
        }
    
    }
    console.log(linea);
}