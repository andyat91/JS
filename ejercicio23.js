let readline = require("readline-sync");
//esto es para llamar a una librería;

/**
 *  Ejercicio 23
 *  Leer tres números que denoten una fecha (día, mes, año) por
 *  parametros.
 *  Comprobar que es una fecha válida. Si no es válida escribir
 *  un mensaje de error que indique que se ha introducido mal
 *  alguna parte de la fecha y volver a pedir los números. Si es válida,
 *  escribir la fecha cambiando el número del mes por su nombre.
 *  Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero del 2006”.
 *  El año debe ser mayor que 0. (Recuerda la estructura switch).
 */
let dia=10;
let mes=11;
let año=2023;

if(dia>0 && dia<31){
    if(mes>0 && mes <=12){
        if(año>1959 && año<2024){
    

switch (mes) {
    case 1:
        console.log(dia+" de enero de "+año);
        break;
    case 2:
        console.log(dia+" de febrero de "+año);
        break;
    case 3:
        console.log(dia+" de marzo de "+año);
        break;
    case 4:
        console.log(dia+" de abril de "+año);
        break;
    case 5:
        console.log(dia+" de mayo de "+año);
        break;
    case 6:
        console.log(dia+" de junio de "+año);
        break;
    case 7:
        console.log(dia+" de julio de "+año);
        break;
    case 8:
        console.log(dia+" de agosto de "+año);
        break;
    case 9:
        console.log(dia+" de septiembre de "+año);
        break;
    case 10:
        console.log(dia+" de octubre de "+año);
        break;
    case 11:
        console.log(dia+" de noviembre de "+año);
        break;
    case 12:
        console.log(dia+" de diciembre de "+año);
        break;

}
        } else {
    console.log("año mal introducido")};
    } else {
    console.log("mes mal introducido");
    
 }
  } else {
    console.log("dia mal introducido");
  }