/*Algolritmo que lea 3 numeros y nos retorne el mayor 
o que en caso de serlo, un string que diga iguales*/

let readline = require("readline-sync");
//esto es para llamar a una librería;
let numero1 = Number(readline.question("dime el primer numero"));
//le decimos que en la libreria que hemos llamado nos pregunte esto:
let numero2 = Number(readline.question("dime un  segundo numero"));
let numero3 = Number(readline.question("dime un tercer numero"));
// falta cuando son dos numeros iguales
if (numero1>=numero2 && numero1>=numero3) {
    console.log(numero1);
    
} else if (numero2>=numero1 && numero2>=numero3) {
    console.log(numero2);
//se pone mayor-igual para que empiece leyendo y aunque sea igual enseñe el numero que sea mas grande    
} else if (numero3>=numero1 && numero3>=numero2) {
    console.log(numero3);

} else if (numero1==numero2 || numero2==numero3 || numero1==numero3){
    console.log("los numeros son iguales");
}
