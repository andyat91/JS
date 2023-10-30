


let readline = require("readline-sync");
//esto es para llamar a una librería;
/**
 *  Ejercicio 18
 *  Se pide representar un algoritmo que nos calcule la suma de los N primeros numeros
 *  pares a partir de N, recibida en los parametros de la funcion. Es decir,
 *  si le pasamos 5 a la funcion, nos hara la suma de 6+8+10+12+14.

traduccion=si ponemos un numero nos tiene que devolver la suma de los siguientes  numeros pares *N
*/
//let N1=Number(readline.question("introduce un numero"));
let N1=11;
let suma=0;
//contador empieza en 1 y es igual o menor al numero que ponemos
for(i=1;i<=N1;i++){
//si el numero es par entonces le vamos sumando al mismo numero 2xi
//EJEMPLO= pones 4= 4+2*1=6  4+2*2=8  4+2*3=10
    if(N1%2==0){
//ademas lo vamos sumando al numero anterior en cada vuelta
     suma=suma+N1+(2*i);
    }
//en el caso de que sea IMPAR le restamos uno a N1 para igualarlo al par y realizar la misma operacion.
suma=suma+(N1-1)+(2*i);
console.log(suma);
}
console.log(suma);





