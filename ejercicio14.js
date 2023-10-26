/*En una tienda efectuan un descuento a los clientes dependiendo de la cantidad
 *  de la compra. El descuento se basa en lo siguiente:
 *
 *  Si el monto es menor que 500€ -> No hay descuento
 *  Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
 *  Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
 *  Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
 *  Más de 15.000€ -> 25% descuento
 *
 *  El algoritmo recibira la cantidad y retornara el precio final aplicandole el
 *  descuento correspondiente.*/

let readline = require("readline-sync");
//esto es para llamar a una librería;

let precio = Number(readline.question("Cantidad de la compra "));
let descuento;
//hacer en casa con elseif anidados
if (precio>=15000) {
    console.log(precio-((precio/100)*25));
    
} else if (precio>=7000 && precio<15000){
    console.log(precio-((precio/100)*20));
    
} else if (precio>=1000 && precio<7000) {
    console.log(precio-((precio/100)*10));

} else if(precio>=500 && precio<1000) {
    console.log(precio-((precio/100)*5));

} else if (precio>=1 && precio<500) {
    console.log("Su precio no tiene descuento");

} else if (precio<=0) {
    console.log("el precio es nulo");

}