let readline = require("readline-sync");
//esto es para llamar a una librería;

/**
 * Ejercicio 44
 * El usuario tiene el siguiente menu:
 *
 *  Seleccione el numero de una de las siguientes opciones:
 *  1: Sumar
 *  2: Restar
 *  3: Multiplicar
 *  4: Dividir
 *  5: Salir del programa.
 *
 * Debera generar un algoritmo que reciba por parametros 3 numeros. El primer numero,
 * sera la opcion elegida del menu, y los siguientes dos numeros se usaran en la operacion
 * correspondiente a la seleccionada del menu.
 *
 * EJEMPLO: Si introduce 1,2,4. El usuario recibira 6.
 */
let opcion=Number(readline.question("Introduce que tipo de operacion quieres realizar :"));
let num1=Number(readline.question("Introduce el primer numero para operar :"));
let num2=Number(readline.question("Introduce el primer numero para operar :"));

if (opcion>0 && opcion<=5) {
        if(opcion==1) {
            console.log("La suma es :"+num1+num2);
        } else if (opcion==2) {
            console.log("La resta es :"+num1-num2);
        } else if (opcion==3) {
            console.log("La multiplicacion es :"+num1*num2);
        } else if (opcion==4) {
            console.log("La division es :"+num1/num2);
        } else if (opcion==5) {
            console.log("Has salido correctamente del programa");
        }
} else {
    console.log("no has introducido el numero correctamente");
}