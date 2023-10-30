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
// Funcion que recibe un listado de productos y una categoria, debe devolver
//  un array con los productos que son de la categoria del parametro de entrada
let tipo ="videojuegos";
let array=[];
//creamos una array vacio que va a salir luego por consola
//hacemos un for para que recorra todo el array y le decimos que cuando salga
//una categoria igual a tipo que la vaya metiendo en el array nuevo
//hacemos return fuera del for de CADA producto al completo, no solo la categoria.
function cat(productos){
for(i=0;i<productos.length;i++) {
    if(productos[i].categoria==tipo) {
        array.push(productos[i]);
    }
}
//return array previamente vacia que se va llenando a cada vuelta.
return array;

}
console.log(cat(productos));