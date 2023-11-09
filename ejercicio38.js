/**
 * Ejercicio 38
 * Desarollar un algoritmo que nos retorne el array introducido por
 * parametros invertido.
 */

let array=[1,2,3,4,5];
let aux=0;  
for(j=0 ; j<array.length-1 ; j++) {
    
    for(i=0 ; i<array.length ; i++) {
       
        if(array[i]<array[i+1]){
            aux=array[i+1];
            array[i+1]=array[i];
            array[i]=aux;
    }
    }
}
console.log(array);