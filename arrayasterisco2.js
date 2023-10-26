let readline = require("readline-sync");


//Solo * en el primer y ultimo numero del array, el resto un espacio.
//continuacion del ejercicio anterior.
let numero=Number(readline.question("Introduce un numero"));
let linea=[];


    
for(i=0;i<numero;i++){
//todas las lines con un espacio
linea[i]=" ";
//pero si es igual a la posicion 0 o es igual a la ultima posicion. *
 if(i==0 || i==numero-1){
    linea[0]="*";
    linea[numero-1]="*";
 } 
}
console.log(linea);
