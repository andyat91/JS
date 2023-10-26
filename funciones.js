/*devuelve la suma de todos los elementos del array del listado*/ 
let coleccion = [5,7,10,13,2,1,1,3];
let resultado1=0;
let resultado2=1;
function sumar(listado) {
for (let i=0;i<listado.length;i++) {
resultado1 = resultado1 +coleccion[i];
}
return resultado1;
}
/*Devuelve la multiplicacion de todos los ejementos del array del listado*/
function multiplicar(listado) {
for (let i=0;i<listado.length; i++) {
resultado2=resultado2*coleccion[i];
}
return resultado2;
}


//consolelog de la suma
//de la coleccion utilizame la funcion SUMAR
console.log(sumar(coleccion));
//consolelog multiplicar
//de la coleccion utilizame la funcion SUMAR
console.log(multiplicar(coleccion));