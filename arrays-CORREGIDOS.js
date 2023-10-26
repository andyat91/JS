/**
 * Devuelve la suma de todos los elementos del array listado.
 */
function sumar(listado) {
    let resultado = 0;

    for (let i = 0; i < listado.length; i++) {
        resultado += listado[i];    
    }

    return resultado;
}

/**
 * Devuelve la multiplicacion de todos los elementos del array listado. 
 */
function multiplicar(listado) {
    let resultado = 1;

    for (let i = 0; i < listado.length; i++) {
        resultado *= listado[i];
    }

    return resultado;
}

function eliminarPrimero(listado, numero) {
    listado[0] = 0;
    numero = 0;
}

const coleccion = [5, 7, 10, 13, 2, 1, 1, 3];
let n = 3;

//  console log de la suma
console.log(sumar(coleccion));
console.log(sumar([5, 7, 10, 13, 2, 1, 1]));
console.log(sumar([5, 7, 10, 13, 2, 1]));
// console log de la multiplicacion
console.log(multiplicar([5, 7, 10, 13, 2, 1, 1, 3]));

console.log(eliminarPrimero(coleccion, n));
console.log(coleccion);
console.log(n);
/**
 * Crear una funcion que recibe como parametros un array de numeros y un numero
 * La funcion tiene que devolver la posicion del numero dentro del array
 * o no existe si numero no esta en el array.
 * 
 * array = [1, 2, 3, 4];
 * 
 * si numero = 2 -> debe devolver 1;
 * si numero 5 -> debe devolver "no existe";
 * 
 * datos de uso:
 * 
 * array = [4, 6, 18, 15, 10] numero = 18
 * array = [1, 2, 3, 4, 5, 6] numero = 8
 * array = [21, 31, 41, 51, 61] numero = 61
 */

function buscar(listado, numero) {
    for (let i = 0; i < listado.length; i++) {
        if (listado[i] == numero) {
            return i;
        }
    }

    return "No existe";
}

console.log(buscar([4, 6, 18, 15, 10], 18));
console.log(buscar([1, 2, 3, 4, 5, 6], 8));
console.log(buscar([21, 31, 41, 51, 61], 61));

function buscarDos(listado, numeros) {
    let resultados = ["no existe", "no existe"];

    for (let j = 0; j < numeros.length; j++) {
        for (let i = 0; i < listado.length; i++) {
            if (listado[i] == numeros[j]) {
                resultados[j] = i;
            }
        }
    }

    return resultados;
}

console.log(buscarDos([4, 6, 18, 15, 10], [18, 8]));
console.log(buscarDos([1, 2, 3, 4, 5, 6], [8, 3]));
console.log(buscarDos([21, 31, 41, 51, 61], [61, 41]));

function buscarTres(listado, numeros) {
    let resultados = [];

    for (let j = 0; j < numeros.length; j++) {
        let encontrado = false;
        
        for (let i = 0; i < listado.length; i++) {
            if (listado[i] == numeros[j]) {
                resultados[j] = i;
                encontrado = true;
            }
        }

        if (!encontrado) {
            resultados[j] = "No existe";
        }
    }

    return resultados;
}

console.log(buscarTres([4, 6, 18, 15, 10], [18, 8]));
console.log(buscarTres([1, 2, 3, 4, 5, 6], [8, 3]));
console.log(buscarTres([21, 31, 41, 51, 61], [61, 41]));

function buscarCuatro(listado, numeros) {
    let resultados = [];

    for (let i = 0; i < numeros.length; i++) {
        resultados[i] = buscar(listado, numeros[i]);
    }

    return resultados;
}

console.log(buscarCuatro([4, 6, 18, 15, 10], [18, 8]));
console.log(buscarCuatro([1, 2, 3, 4, 5, 6], [8, 3]));
console.log(buscarCuatro([21, 31, 41, 51, 61], [61, 41]));