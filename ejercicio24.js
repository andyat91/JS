let readline = require("readline-sync");
//esto es para llamar a una librería;


/**
 *  Ejercicio 24
 *  Calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno
 *  se calcula según el siguiente criterio: la parte práctica vale el 10%; la parte
 *  de problemas vale el 50% y la parte teórica el 40%. El algoritmo leerá el nombre
 *  del alumno, las tres notas Y escribirá el resultado. Las notas deben
 *  estar entre 0 y 10, si no lo están, no imprimirá las notas, mostrará un mensaje
 *  de error y volverá a pedir otro alumno.
 *
 *  Los mensajes de error debe ser los siguientes; 'Ha habido un error con tus notas. Deben
 *  estar entre 1 y 10'. 'Error al recibir el nombre' (En caso de que se introduzca una cadena vacia).
 *
 *  Si todo es correcto el algorimo debera imprimir 'NombreAlumno tu nota final es de NotaFinal sobre 10'
 */
let notafinal=0;
let alumno=readline.question("introduzca su nombre :")
//let alumno=0;
//preguntar por while y string
//porque cuando pongo la primera vez mal el nombre la segunda me da mal tmb aunque lo ponga bien
while(alumno== "") {
    alumno=readline.question("Nombre mal introducido pruebe de nuevo :");
}
do {


let practica=Number(readline.question("Introduzca nota en practicas :"));
let problema=Number(readline.question("introduzca nota en problemas :"));
let teorica=Number(readline.question("introduzca nota en teorica :"));


notafinal=((practica/100)*10)+((problema/100)*50)+((teorica/100)*40);
//no entra en el if
if(notafinal<0 || notafinal>10 || isNaN(notafinal)){
    console.log("has introducido mal la nota, intentalo de nuevo");
} 
} while (notafinal<0 || notafinal>10 || isNaN(notafinal));

console.log("Nombre alumno :"+alumno+", Su nota final es :"+notafinal);


