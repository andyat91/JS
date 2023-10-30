let readline = require("readline-sync");
//esto es para llamar a una librería;

/**
 *  Ejercicio 21
 *  Algoritmo que lea un array hasta que reciba un 0, y
 *  nos muestre el máximo, el mínimo y la media de todos
 *  ellos. Piensa como debemos inicializar las variables.
 */
let array=[0,2,8,8];
let suma=0;
let max=array[0];
let min=array[0];
let longitud=1;

for(j=0;j<array.length;j++){
    
    longitud=j;
    if(array[j]==0){
        break;
    }
    suma=suma+array[j];
}
//SIN RESOLVER. No se sacar el max hasta llegar al cero. pedir para revisar en clase.
for(i=0;i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    } else if( array[i]==0){
        break;
    }
}
console.log(suma/longitud);
console.log(max);