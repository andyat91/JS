/**
 * Ejercicio 45
 * Generar un algoritmo que tras recibir por parametros un array, nos genere otro pero solamente
 * incluyendo aquellos que sean pares y mayores de 25. Si el numero en una posicion no cumpliese las
 * condiciones el algoritmo rellenara su hueco con un 0.
 */

let array=[2,4,6,7,25,28,29,30,47,5,42,50,3];
let aux=[];

for(i=0 ; i<array.length ; i++) {
//cuando el numero del array sea menor de 25 pon un cero
    if (array[i]<=25 ) {
        array[i]=0;
//cuando el  numero del array sea mayor de 25 y par guardame el mismo numero
    } else if (array[i]%2==0) {
        array[i]=array[i];
// cuando además sea mayor de 25  y impar guardame un cero de nuevo
    } else if (array[i]>25) {
        array[i]=0;
    }
}
console.log(array);