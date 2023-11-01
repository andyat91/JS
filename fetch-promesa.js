/* esta es nuestra funcion ok (then) de la promesa.*/

function mostrar(respuesta) {
    let ancho=respuesta[0].width;
    let alto=respuesta[0].height;


    for(i=1;i<respuesta.length;i++){
        if(respuesta[i].width > ancho){
            ancho=respuesta[i].width;
        }
    }

    
    for(i=1;i<respuesta.length;i++) {
        if(respuesta[i].height > alto){
            alto=respuesta[i].height;
        }
    }
    console.log("El mayor ancho es "+ancho,"el mas alto es "+alto);
    return ancho+" y "+alto;
}



//esta es nuestra funcion error (catch) de la promesa.

function fallo(error) {
    console.log(error);
}


let promesa = fetch("https://api.thecatapi.com/v1/images/search?limit=10");
//JSON estructura de datos
//PROMESAS:
promesa.then((response) => response.json()).then(mostrar).catch(fallo);


//sacar por consola el objeto que tiene mayor ancho y el mayor alto;
