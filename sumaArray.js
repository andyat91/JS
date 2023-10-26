let readline = require("readline-sync");
//esto es para llamar a una librería;

/*
Haz un algoritmo que sume todos los numeros del array
*/

let lista = [12,12,5,1,9,7,12,54,45];
let resultado=0;
let resultadopares=0;
let resultadoimpares=0;
//Sumar todos los numeros del array

for (i=0;i<lista.length;i++) {
    resultado=resultado+lista[i];
    //Sumar todos los numeros del array
//NO ENTIENDO; preguntar despues.
}

for (i=0;i<lista.length;i++) {
    if (lista[i]%2==0) {
        resultadopares=resultadopares+lista[i];
    } 
    }  
//posicion impar del array FALTA TERMINAR
    for (i=0;i<lista.length;i++) {
        if (i%2==0) {//para saber si son impares
            resultadoimpares=resultadoimpares+lista[i];
        } 
        } 
console.log("Total"+resultado);
console.log("Suma de pares"+resultadopares);
//FALTA TERMINAR EL ULTIMO

    
