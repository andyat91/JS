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
        precio: 499,
        valoracion: 4.2
    },
    {
        nombre: "chicle",
        stock: 2,
        categoria: "deporte",
        precio: 1,
        valoracion: 4.5

    },{
        nombre: "coca-cola",
        stock: 2,
        categoria: "deporte",
        precio: 2,
        valoracion: 4.5

    },{
        nombre: "coche",
        stock: 2,
        categoria: "deporte",
        precio: 7000,
        valoracion: 4.5

    },{
        nombre: "fanta",
        stock: 2,
        categoria: "deporte",
        precio: 2,
        valoracion: 4.5

    },{
        nombre: "barco",
        stock: 2,
        categoria: "deporte",
        precio: 40000000,
        valoracion: 4.5

    },{
        nombre: "puslera",
        stock: 2,
        categoria: "deporte",
        precio: 4,
        valoracion: 4.5

    },
];

// //Calcular la media de los precios del productos en el array.

let suma=0;
//recorreme todos los productos y ve sumando el elemento precio
 for(i=0;i<productos.length; i++) {
    suma+=productos[i].precio;
 }
 //sacame por consola la suma de los productos dividido la longitud del array.
 console.log(suma/productos.length);
 
 // Funcion que devuelva el nombre y el stock del producto mas caro:
//creamos una variable para trabajar con ella fuera del bucle
let mayor= productos[0].precio;
let posicion=0;

function caro2(array,elemento){
 //DUDA como revisa cual es el mayor teniendo solo la referencia del primero   
    for(i=1;i<productos.length;i++){
        if(productos[i].precio > mayor) {
            posicion=i
          }
        }
        return {nombre: productos[posicion].nombre , stock: productos[posicion].stock}
    }
//LECTURA: el bucle empieza en 1 porque hemos declarado antes el primer elemento(nos ahorramos un paso);
//longitud del array, sumamos uno  y SI el precio es mayor que el anterior
//IMPORTANTE a la variable posicion vacia le damos el valor de I
//que luego utilizaremos para devolvernos la posicion del prodcuto en este caso mas caro.
//DUDA
    

console.log(caro2(productos));



