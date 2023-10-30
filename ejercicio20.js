let readline = require("readline-sync");
//esto es para llamar a una librería;
/**
 *  Ejercicio 20
 *  Teniendo en cuenta que la clave es 'eureka, escribir un algoritmo
 *  que nos pida un array de claves por parametros y una contrasena.
 *
 *  Solo tendremos 3 intentos
 *  para aceptar, si fallamos, nos mostrara un mensaje por consola indicandonos que hemos agotado esos
 *  3 intentos. Si acertamos la clave, nos mostrara un mensaje por consola y saldra del programa. Si agotaramos
 *  los 3 intentos sin acertar, tambien nos mostrara un mensaje por consola y saldra
 *  del programa.
 */

let clave=readline.question("Clave :");

//for que de maximo dos vueltas que son las 3 oportunidades de poner correctamente la contraseña
for(i=0 ; i<2 ; i++){
//si clave es igual a contraseña se sale.
    if(clave =="eureka"){
      console.log("Contraseña correcta, bienvenido");
      break;
//si clave es diferente a contraseña: contraseña incorrecta
    } else {
      console.log("Contraseña incorrecta, intentelo de nuevo");   
    } 
    clave=readline.question("Clave :");
  }
 if (clave!="eureka"){
    console.log("agotado los 3 intentos");
 }