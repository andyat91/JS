let readline = require("readline-sync");
//esto es para llamar a una librería;

/*PEdir con readline un numero y añade por cada fila un asterisco:
ejemplo:4
*
**
***
****
*/
let numero=5;

//Quiero que vaya añadiendo un asterisco y un espacio 
//Revisar codigo de ANA;
//bucle donde j es menor al numero que vamos a poner
//y si es menor creame una linea vacia y entra en el bucle anidado
for (let j = 0; j < numero; j++) {
    let linea = "";
//en el bucle anidado le digo que solo entre si i<=j para que salga del bucle y no siga pintando asteriscos
    for (let i=0; i <= j; i++) {
//cuando va  a dar la segunda vuelta de i se sale porque i es menor o igual que J
//y le digo que a la linea vacia le sume un asterisco
        linea+= "*";
    }
//ENTONCES sale del bucle anidado y me saca por consola ese primer asterisco.
    console.log (linea);
  //y vuelve al primer bucle a repetir todo el proceso.
}



