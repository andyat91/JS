/**
 * Ejercicio 39
 * Desarollar un algoritmo que compruebe si los dos arrays introducidos son iguales
 */
array1=[1,2,3,4];
array2=[1,2,4,4,6];


for(i=0 ; i<array1.length ; i++) {
    if(array1[i]!=array2[i]) {
        console.log("Los arrays son diferentes");
        break;
    } else if (i==array1.length-1 && array1[i]==array2[i]) {
        console.log("los arrays son iguales");
    }
}
