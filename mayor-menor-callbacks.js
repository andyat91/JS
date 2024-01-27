let listado = [-38,-22,-42,-1,-110];

function esMayor(a, b) {
    return a > b;
}

function esMenor(a, b) {
    return a < b;
}

//a la funcion le damos dos parametros: elementos(array) y los callbacks
function procesar(elementos, callback) {
    let numero = elementos[0];
//inicializamos una sola variable que luego el console.log va a leer dos veces,
//primera lectura aplicando esMayor y segunda aplicando esMenor
//se inicializa en 1 porque el primer elemento del array lo guardamos en la primera variable declarada
    for (let i = 1; i < elementos.length; i++) {
//sigue la longitud del array y vamos sumando uno
//SI (funcion esMayor, esMenor(elementos a y b))  el numero es igual elemento del array mas pequeño o mas grande
//aqui estamos llamando a la funcion esMayor y dos elementos a comprobar
        if (callback(elementos[i], numero)) {
            numero = elementos[i];
//lo que hace es llamar a otra funcion donde se comprueba lo que necesitamos es decir si a es mas grande que b o viceversa.       
        }
    }

    return numero;
}
// muestra el mayor
//                  (elementos, callbacks)
console.log(procesar(listado, esMayor));
// muestra el menor
//                  (elementos, callbacks)
console.log(procesar(listado, esMenor));


module.exports = { procesar, esMayor, esMenor };