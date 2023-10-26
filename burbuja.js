let readline = require("readline-sync");
//esto es para llamar a una librería;
//ordena el array desde menor a mayor:
let lista = [7,1,3,2,34,3,8,11,6,9];

for (let j=0 ; j < lista.length ; j++) {
    for (let i=0 ; i < lista.length ; i++){

        if(lista[i] > lista[i+1]) {
            let aux = lista[i];
            lista[i] = lista[i+1];
            lista[i+1] = aux;
        }
    }
}
/*si la primera posicion de la lista es mayor que la segunda
entonces creame una auxiliar y le vas a dar el valor de esa priemera posicion
despues le vas a poner el segundo valor en el lugar del primero
por ultimo al segundo valor le das el valor de aux que era el valor de la primera posicion
se ha ido cambiando solas las posiciones */









/*for(let j=0 ; j < lista.length ; j++){ 
    for(let i = 0; i < lista.length ; i++) {

        if ( lista[i] > lista[i + 1] ) {
        let aux = lista[i]; 
        lista[i] = lista[i+1];
        lista [i+1]=aux;
        } 
}
}*/

console.log(lista);
//Lectura:la lista empieza en 0,y llega hasta el final, suma uno
//si el primero es mas grande que el segundo creame nueva variable aux.
//creamos auxiliar y le damos la posicion 0
//a la posicion 0 de antes le damos la posicion 1
//a la posicion 1 le damos la cantidad de 0