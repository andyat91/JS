/**
 *  Ejercicio 31
 *  Algoritmo que lea un numero entero (altura) y a partir de el,cree
 *  una escalera invertida de asteriscos con esa altura.
 *  Debera quedar asi, si ponemos una altura de 5
 *  *****
 *   ****
 *    ***
 *     **
 *      *
 *
 *  Deberas recordar la concatenacion y el uso de espacio en blanco (\n)
 */
let N=5;
let linea="";
//Bucle anidado con dos for dentro(no anidados entre si);
//el primero marca el tamaño N
    for(j=0 ; j<N ; j++) {
//el segundo crea un espacio menor que j y sale del bucle       
        for(i=0 ; i<j ; i++){
            linea+= " ";
        }
//entra en el tercero y pinta asteriscos menos las vueltas que va dando J;
        for(k=0 ; k<N-j ; k++) {
            linea+="*";
        }
        linea+="\n";
    }
    console.log(linea);
//IMPORTANTE, hay tres bucles: dos estan dentro de J pero no anidados entre si.
//Ejemplo N= 5
//1º entra enel primer bucle que marca la longitud
//2ºentra en el segundo que marca espacios si i es menor a las vueltas que da j
//si es la primera vuelta no se cumple y no pone ningun espacio.
//3º entra en el tercer bucle y pinta asteriscos=5 en la primera vuelta
//en la segunda pinta asteriscos igual a 5 menos las vueltas que da j
//en la segunda vuelta de K pinta 4 asteriscos porque es 5-1(de j).