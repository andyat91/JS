/**
 * Ejercicio 47
 * Generar un algoritmo que reciba un array y retorne otro con los numeros ordenados de forma descendente
 */

let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let array2 = [];
let aux = 0;

for (j = 0; j < array.length; j++) {
  for (i = 0; i < array.length; i++) {
    if (array[i + 1] > array[i]) {
      aux = array[i + 1];
      array[i + 1] = array[i];
      array[i] = aux;
      array2 += array[i];
    }
  }
}
console.log(array);
