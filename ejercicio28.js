let readline = require("readline-sync");
//esto es para llamar a una librería;

/**
 *  Ejercicio 28
 *  Desarrollar un timer o temporizador. La cantidad de segundos con la que se
 *  quiere hacer la cuenta atras se introducira por parametros. Se ira mostrando
 *  la cuenta atras por consola y cuando llegue al final, se imprimira "Ring!! y el programa acabara .
 */

let seg=3;

for( i=seg ; i>0 ; i--){
    console.log(i);
    if (i==1) {
        console.log("Ring!!");
    }
}


for( i=seg-1 ; i>=0 ; i--){
    console.log(i);
    if(i==0) {
      console.log("¡¡Ring!!");
    } 
    }