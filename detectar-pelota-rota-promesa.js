/**
 * En un partido de tenis, cada juego de pelotas dura un maximo de 5 jugadas.
 * 
 * Dada una secuencia de jugadas donde se indica la pelota que se ha usado, nuestro codigo debe 
 * indicar si alguna pelota ya no es valida(si se usa mas de 5 veces) o si todas las pelotas son validas.
 * 
 * Por ejemplo: dada la secuencia de jugadas siguiente con el numero de pelota usada s = [
 * 1, 1, 1, 2, 1, 1] nuestro codigo de la promesa debe llamar a reject con el numero de pelota 1
 * 
 * Otro ejemplo: dada la secuencia de jugadas sigueinte con el numero de pelota usada s = [
 * 1, 2, 3, 4, 1, 2] nuestro codigo de la promesa debe llamar a resolve con el mensaje "Pelotas ok"
 */
//nos dice el numero de pelota las veces que se ha utilizado cada una de ellas 
const jugadasUno = [1, 1, 2, 3, 4, 1, 1, 2, 2, 3, 3, 4, 4, 1, 1, 2];//1=6 2=4 3=3 4=3
const jugadasDos = [1, 3, 2, 3, 4, 1, 1, 2, 2, 3, 3, 4, 4, 1, 4, 2];


function comprobarPelotas(jugadas) {
    let p = new Promise(function(resolve, reject) {
    let suma1=0;
    let suma2=0;
    let suma3=0;
    let suma4=0;
//ve sumandome las cantidades de todos los elementos que hay en el array
        for(i=0;i<jugadas.length;i++){
            if(jugadas[i]==1){
                suma1 = suma1+1;
            }else if (jugadas[i]==2) {
                suma2 = suma2+1;
            }else if (jugadas[i]==3) {
                suma3 = suma3+1;
            }else if (jugadas[i]==4) {
                suma4 = suma4+1;
            }
        }
        console.log(suma1,suma2,suma3,suma4);
//si suma1>5 o si suma2>
        if (suma1>=5 || suma2>=5 || suma3>=5 || suma4>=5 ) {
            reject("una de las pelotas se pasa");
            } else {
            resolve("Pelotas OK");
            }

    });
    
    return p;
}
function mostrar(respuesta) {
    console.log(respuesta);
}

comprobarPelotas(jugadasUno)
.then(mostrar)
.catch(mostrar);
//ASINCRONICAS= muestra primero la que termina antes, entonces el resultado en el console.log puede variar al imprimirse.
comprobarPelotas(jugadasDos)
.then(mostrar)
.catch(mostrar);


module.exports =  { comprobarPelotas }