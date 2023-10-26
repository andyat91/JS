//suma todos los numeros de los arrays:
let multi=[[1,2,3,4],
            [5,6,7,8]];

resultado1=0;
resultado2=0;
/*se inicia en posicion 0; que sea menor que la longitud del array;sumale 1
entra en el bucle porque se cumple la condicion
resultado= resultado(que se vaya sumando)+el array 0 y el i va sumando a cada vuelta*/ 
for (let i=0;i<multi[0].length; i++) {
    resultado1=resultado1+multi[0][i];
}
console.log(resultado1);
/*Se vuelve a crear un bucle para contar el segundo array dentro de multi
se le pone otro nombre a la let
se inicia en la posicion 0;maximas vueltas hasta final de array 1;se suma 1 */
for (let j=0;j<multi[1].length;j++) {
    resultado2=resultado2+multi[1][j];
/*resultado empieza en 0,
pero a medida que va dando vueltas se suma la cantidad del anterior
por eso se suma toda la cantidad del array*/
}
console.log(resultado2);


console.log(resultado1+resultado2);
