//Suma los numeros de un array:
let multi=[[1,2,3,4],
            [5,6,7,8]];

resultado1=0;
/**Entra en el bucle del array completo y pasa al bucle de dentro,
 * da todas las vueltas necesarias en el bucle de dentro,
 * se suma 1 y empieza a contar el segundo elemento dentro del array y se suma al resultado
 */

    for (let j=0;j<multi.length;j++){
        for (let i=0; i<multi[0+i].length; i++){
            resultado1 = resultado1 + multi[0][i];
        }
    }
    
    
console.log(resultado1);