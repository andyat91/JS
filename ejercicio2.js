let readline = require("readline-sync");
//esto es para llamar a una librería;

/**
 *  Ejercicio 2
 * Escriba un algoritmo que lea dos numeros que retorne el valor
 * de la operacion correcta segun el nombre de la funcion
 */
//escribe un programa que lea dos numeros y que devuelva
let num1=Number(readline.question("primer numero :"));
let num2=Number(readline.question("segundo numero :"));

function suma(num1,num2) {
    let suma = num1+num2;
    return suma;
}
let resultadosuma = suma(num1,num2);
console.log("el resultado de la suma es :"+resultadosuma);


function resta(num1,num2) {
    let resta = num1-num2;
    return resta;
}
let resultadoresta = resta(num1,num2);
console.log("el resultado de la resta es :"+resultadoresta);


function multiplicacion (num1,num2){
    let multiplicacion = num1*num2;
    return multiplicacion;
}
 let resultadomultiplicacion = multiplicacion(num1,num2);
 console.log("el resultado de la multiplicacion es :"+resultadomultiplicacion);


 function division (num1,num2) {
    let division = num1/num2;
    return division;
 }
let resultadodivision = division(num1,num2);
console.log("el resultado de la division es :"+resultadodivision);