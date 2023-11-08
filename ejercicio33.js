/**
 *  Ejercicio 33
 * Crear un algoritmo que reciba un array de tamaño 10 y que imprima cada indice
 * junto con el valor al que corresponda. Debera retornarlo de esta forma:
 *  `El indice es X y su valor es Y`
 */
let array= [1,2,3,4,5,6,7,8,9,10];
let contenido=0;
let longitud=0;
for(i=0;i<array.length;i++){
    contenido=array[i];
    longitud=i;
    console.log(`El indice es ${longitud} y su valor es ${contenido}`);
}