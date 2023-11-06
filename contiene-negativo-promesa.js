/**
 * Usando una promesa comprobar si todos los numeros de una lista son positivos, en tal caso 
 * llamar a resolve, si el array contiene algun numero negativo debe llamar a la funcion reject.
 * 
 * La funcion resolve debe mostrar el array por consola.
 * La funcion reject debe mostrar el numero negativo encontrado.
 * 
 * Ejemplo 1: para el array [1, 2, 3] debe llamar a resolve y mostrar consola [1, 2, 3]
 * Ejemplo 2: para el array [1, 2, -1] debe llamar a reject y mostrar por consola -1
 */

const listado = [ 8, 4, 9, 12, 32, 9, 58, 14 ];
const listadoConNegativo = [ 8, 4, 9, 12, 32, 9, 58, -14 ];

function comprobarNegativo(listado) {
    let p = new Promise(function(resolve, reject) {
//for que vaya recorriendo el array y cuando encuentre numero negativo devuelva reject
     for(i=0;i<listado.length;i++){
        if(listado[i]<0) {
            reject(listado[i]);
        }
     }
//y si no encuentra numero negativo devuelve resolve: con el array que piden mostrar
     resolve(listado);
      
    
    });
    return p;
}
//creamos una funcion mostrar con la respuesta dentro y un console.log
function mostrar(respuesta) {
    console.log(respuesta);
}
//IMPORTANTE la funcion comprobarNegativo del array que esta dentro
//DEVUELVE la respuesta de la funcion promesa en un console.log
comprobarNegativo(listado)
    .then(mostrar)
    .catch(mostrar);

comprobarNegativo(listadoConNegativo)
    .then(mostrar)
    .catch(mostrar);
