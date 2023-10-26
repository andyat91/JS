//Suma los elementos del array hasta que encuentre un 1;

let coleccion = [5,7,10,13,2,1,1,3]
let resultado=0;
/*metemos en un bucle que me vaya sumando numeros*/
for (let i=0;i<coleccion.length;i++){
   
    //le decimos IF aparece un 1; haz un break y sal del bucle.
    if (coleccion[i]==1){
        break;
    }
//INTENTAR HACER CON WHILE EN CASA:
//!Se pone la suma despues para que no sume el ultimo numero.
    resultado = resultado+coleccion[i];
}
console.log(resultado);     
