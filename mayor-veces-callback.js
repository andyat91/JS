/**
 * Dada una secuencia o array de operaciones matematicas hay que determinar cual de las operaciones
 * se ha ejecutado el mayor numero de veces.
 * 
 * Por ejemplo, dada la secuencia s = [multiplicar, dividir, dividir] debe mostrar por consola 
 * que la operacion mas usada ha sido dividir
 * 
 * Solo se permite incluir codigo en la funcion contar.
 */

//array de funciones; llaman a la suma o  la resta
const secuenciaUno = [suma, resta, resta, resta, suma, suma, suma, suma, resta, suma];
const secuenciaDos = [resta, resta, resta, resta, suma, suma, resta, resta, suma];

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function contar(secuencia) {
 let suma=0;
 let resta=0;
    for(i=0;i<secuencia.length;i++){
    const callback = secuencia[i];
        if (callback(1,1) ==2){
            suma = suma + i;
        
        } else if ( callback(1,1) == 0) {
            resta = resta + i;
        }
    }
if(suma!=resta) {
    if(suma > resta) {
        return "suma";
    } else {
        return "resta";
    }
} else if (suma==resta) {
    return "iguales";
}
 
}

console.log(contar(secuenciaUno)); // debe mostrar "suma"
console.log(contar(secuenciaDos)); // debe mostrar "resta"

module.exports = { suma , resta , contar };