/**
 *  Ejercicio 19
 *  Dado un array de numeros indefinidos, que acabe con un -1, realizar un algoritmo
 *  que nos calcule la media aritmetica de estos sin contar el -1. Suponemos que
 *  el usuario no insertará numeros negativos.
 */
let array=[2,6,4,-1];
let suma=1;
let longitud=0;
//La suma empieza en 1, ya que la ultima vuelta le resta uno
for(i=0;i<array.length;i++){
    suma=suma+array[i];
    console.log(suma);
//IF y BREAK para que pare en cuanto se encuentre el numero que buscamos
    if(array[i]==-1){
     break;
   }  
}
//0 entre c0
longitud=i;
//la suma partida la longitud del array-1
let media=suma/longitud;
//Revisar en clase porque no entiendo porque no me da 0.
console.log(media);
