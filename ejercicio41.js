/**
 * Ejercicio 41
 * Generar un algoritmo que genere un array aleatorio con longitud y numero maximo
 * introducido por parametros.
 *
 * Retornar el promedio de los numeros positivos, cuantos numeros son mayores que 0 y
 * el promedio de todos los numeros
 */
let array=[];
let num=7;
//para generar el array nuevo menor que numero y longitud igual a numero
for (i=0 ; i<num ; i++) {
    array[i]=parseInt(Math.random()*5);
}
//para sacar el promedio
let suma0=0;
let promedio=0;
for (i=0; i<array.length ; i++) {
   promedio +=array[i]; 
   if(array[i]>0) {
    suma0+=1;
   }
}


console.log("Este es el array que se ha generado :"+array+" ,el promedio es"+promedio/num+" y esta es la suma de los numeros que son mayores a 0 :"+suma0);
