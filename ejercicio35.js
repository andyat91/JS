/**
 * Ejercicio 35
 * Algoritmo que, cuando reciba un array, retorne la suma de todos los numeros contenidos en el mismo
 */
let array=[1,2,3,4,5,6,7,8,9,10];
let suma=0;
function sumNumberArray(array) {
   
    for(i=0;i<array.length;i++) {
      suma=suma + array[i];
      
    }
    return suma;
  }
  console.log(sumNumberArray(array));
