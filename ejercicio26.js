/**
 *  Ejercicio 26
 *  Desarrollar un algoritmo que lea un array de 10 numeros y
 *  calule el cubo de cada uno de ellos. Recuerda la estructura For;
 */
let array= [1,2,3,4,5,6,7,8,9,10]; //1,8,27,64,125,216,343,512,729,1000
function cubo(array){
for(i=0 ; i<array.length ; i++) {
    array[i]= array[i]*array[i]*array[i]
}
return array;
}
console.log(cubo(array));