//Dados A, B y C que representan a números enteros diferentes construir un algoritmo para escribir estos números de forma descendente
/**
 * Ejercicio 46
 * Algoritmo que reciba tres numeros y los retorne en orden descendente. Los debera retornar en un objeto:
 * {1: X, 2: Y, 3: Z}
 */
let A=40;
let B=2;
let C=40;

if(A>=B && B>=C) {
console.log({1: A,2: B,3: C});
}
else if (B>=A && A>=C) {
console.log({1: B,2: A,3: C});
}
else if (C>=B && B>=A) {
console.log({1: C,2: B,3: A});
}
else if (A>=C && C>=B) {
console.log({1: A,2: C,3: B});
}
else if (B>=C && C>=A) {
console.log({1: B,2: C,3: A});
}
else if (C>=A && A>=B) {
console.log({1: C,2: A,3: B});
}




//se trata de que metan 3 numeros y yo mire cual de los 3 es mayor: con un if
//y que haga el return modo objeto {1:num1 , 2:num2 , 3:num3}