/**
 * Ejercicio 40
 * Generar un array de 20 elementos con numeros aleatorios no repetidos entre si
 */
let array= [];
for(i=0 ; i<20 ; i++) {
//paso a numero entero el mathrandom y lo multiplico por 100 para que me de numeros diferentes
    array[i]=parseInt(Math.random()*100);
//si el numero que esta generando es igual al numero anterior que ha generado sumale uno
    if(array[i-1]==array[i]) {
        array[i]=parseInt(Math.random()*100)+1; 
    }
    //console.log(array);
}
console.log(array);