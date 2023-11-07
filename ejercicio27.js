/**
 *  Ejercicio 27
 *  Desarrollar un algoritmo que imprima la tabla de multiplicacion
 *  del numero N introducido por parametros. Para N = 13, el output seria:
 *  13,26....130;
 */
let N=13;
let suma=0;
//Menor o igual que 10 porque es tabla de multiplicar
for (i=1 ; i<=10 ; i++) {
    suma = suma +N;
//imprime dentro del for para que vaya sacando los numeros
    console.log(suma);
}