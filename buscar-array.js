
/**
 * Crear una funcion que recibe como parametros un array de numeros y un numero
 * La funcion tiene que devolver la posicion del numero dentro del array
 * o no existe si numero no esta en el array.
 * 
 * array = [1, 2, 3, 4];
 * 
 * si numero = 2 -> debe devolver 1;
 * si numero 5 -> debe devolver "no existe";
 * 
 * Datos:
 * array = [4,6,18,15,10] numero = 18
 * array = [1,2,3,4,5,6] numero = 8
 * array = [21,31,41,51,61] numero = 61
 * 
 */
let array1=[4,6,18,15,20];
let array4=[18,8];
let numero1=18;
let array2=[1,2,3,4,5,6];
let numero2=8;
let array3=[21,31,41,51,61];
let numero3=61;
let resultado=0;
//Creo una funcion que se llame buscararray y le meto dos variables
//creo un bucle que busque dentro del array y le digo que sume 1
//tambien le digo que SI el numero de la posicion del array es igual a la variable numero;
//Devuelveme la posicion del array que para.
function buscararray (array,numero) {
    for(let i=0;i<array.length;i++){
        if(array[i]==numero){
            return i;
        }
    }
    return "No Existe"
}
//Si termina for y no aparece nada esque no existe.

//Otro array

console.log(buscararray(array1,numero1));
console.log(buscararray(array2,numero2));
console.log(buscararray(array3,numero3));
//Buscar si un numero dentro de un array esta dentro del otro array
//let array4=[18,8];
//let array1=[4,6,18,15,20];

//Dime en que posicion esta lo que hay en el segundo array, en el primero.
//Revisar en casa llorando.

function buscar2array (array,lista){
//FOR ANIDADO: compruebame que el numero 18(lista[0]) este dentro del array
//ve comprobando que todos los numeros del array de dentro no sean iguales al de fuera.
//y SI aparece uno igual devuelveme la posicion de este.
for(j=0;j<lista.length;j++)
    for(i=0;i<array.length;i++){
        if(lista[j]==array[i]) {
            return i;
        }
    }
    return "No existen coincidencias";

}
console.log(buscar2array(array1,array4));


