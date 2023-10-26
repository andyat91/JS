const productos= [
    {
        nombre: "bicicleta",
        stock: 2,
        categoria: "deporte",
        precio: 1000,
        valoracion: 4.5

    },
    {
        nombre: "xbox",
        stock: 20,
        categoria: "videojuegos",
        precio: 350,
        valoracion: 4
    },
    {
        nombre: "ps5",
        stock: 1,
        categoria: "videojuegos",
        precio: 4000,
        valoracion: 4.2
    }
];

// console.log(productos[1]);
// //Calcular la media de los precios del productos en el array.
// let media=0;
// for(let i=0; i<productos.length ; i++ ) {
//     media += productos[i].precio;
// }
// console.log(media/productos.length);

// Funcion que devuelva el nombre y el stock del producto mas caro:
let mayor =productos[0].precio;
let posicion=0;
function caro(productos){
 //que recorra y que SI el precio de cada posicion es mayor que el siguiente :
 //A LA LET POSICION LE DAMOS EL VALOR DE I(posicion) 
    for(let i=1 ; i<productos.length ; i++){
        if(productos[i].precio > mayor) {
            posicion=i;
        }
            
        }
        return { nombre: productos[posicion].nombre, stock: productos[posicion].stock }
        
    
   
}
console.log(caro(productos));