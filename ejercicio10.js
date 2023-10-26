let readline = require("readline-sync");
//esto es para llamar a una librería;


/**
 *  Ejercicio 10
 *  Construir un algoritmo que reciba la categoria y el sueldo de un trabajador y
 *  calcule el aumento de sueldo correspondiente teniendo en cuenta la siguiente
 *  tabla.
 *
 *  Categoria 1 = Aumento del 15%
 *  Categoria 2 = Aumento del 10%
 *  Categoria 3 = Aumento del 6%
 *  Categoria 4 = Aumento del 3%
 *
 *  El algoritmo debera retornar el nuevo salario. Ten en cuenta que el sueldo del
 *  trabajador podria no entrar en ninguna categoria.
 */

let categoria =Number(readline.question("En que categoria estas? "));
let sueldo =Number(readline.question("Cual es tu sueldo? "));

if (categoria >=1 && categoria<=4) {
    if (categoria==1) {
       console.log("Cat1, 15% de aumento, su salario será "+(sueldo+((sueldo/100)*15)));
    } else if(categoria==2) {
        console.log("Cat2, 10% de aumento, su salario será "+(sueldo+((sueldo/100)*10))); 
    } else if(categoria==3) {
        console.log("Cat3, 6% de aumento, su salario será "+(sueldo+((sueldo/100)*6)));
    } else {
        console.log("Cat4, 3% de aumento, su salario será "+(sueldo+((sueldo/100)*3)));
    }

} else if(categoria<1 || categoria>4) {
    console.log("No está dentro de ninguna categoría");

} else if(isNaN(categoria)) {
    console.log("No ha introducido bien las cantidades");
}