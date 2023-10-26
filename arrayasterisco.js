let readline = require("readline-sync");
//esto es para llamar a una librería;

/*Pedir por consola un numero y crear un array de longitud de numero 
introducido que contenga *. Ejemplo, se introduce 2, debe obtener [*,*]      */ 

let numero=Number(readline.question("Introduce un numero"));
let linea=[];
//creamos el array y lo dejamos en blanco
//Bucle que comienza en 0, y sigue hasta el numero que pongan; suma uno.
//la cantidad que pongas en numero es igual a i;
for(let i=0;i<numero;i++){
    linea[i]="*";
}
//array cantidad ponlo todo con asteriscos.

console.log(linea);


