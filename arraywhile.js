//Suma los elementos del array hasta que encuentre un 1;
//Hacer con while:
let coleccion = [5,7,10,13,2,1,1,3]
let resultado=0;
//NO me sale con while y for.
//preguntar si se puede con los dos bucles.
    for(let i=0;i<coleccion.length;i++) {
        while (coleccion[i]!=1){
        resultado=resultado+coleccion[i];
    }
    }

console.log(resultado);