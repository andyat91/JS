/**
 * Ejercicio 49
 * Se tienen los costes de produccion de tres departamentos (dulces,bebidas y conservas)
 * correspondientes a los 12 meses del ano anterior. Construir algoritmos que proporcionen:
 *
 * a) En que mes se registro el mayor coste de produccion de dulces?
 * b) Promedio anual de los costes de produccion de bebidas
 * c) En que mes se registro el mayor coste de produccion en bebidas, y en que mes el menor coste?
 * d) Cual fue el que tuvo menor coste de produccion en diciembre?
 *
 */
const cakes = [55, 40, 78, 45, 67, 21, 30, 90, 85, 73, 58, 2];
const drinks = [45, 67, 21, 30, 55, 40, 78, 45, 80, 66, 39, 4];
const preservedFood = [78, 45, 80, 66, 39, 74, 67, 21, 30, 90, 85, 64];

function getMaxCost(array) {
  let longitud = 0;
  let max = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  for (i = 0; i < array.length; i++) {
    if (array[i] == max) {
      longitud = i + 1;
    }
  }
  return longitud;
}
//console.log(getMaxCost(cakes));

function getMinCost(array) {
  let longitud = 0;
  let min = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  for (i = 0; i < array.length; i++) {
    if (array[i] == min) {
      longitud = i + 1;
    }
  }
  return longitud;
}
//console.log(getMinCost(cakes));

function getAverageCost(array) {
  let promedio = 0;
  let longitud = 0;
  for (i = 0; i < array.length; i++) {
    promedio += array[i];
    longitud = i;
  }
  return promedio / longitud;
}
let ultimo = cakes.length - 1;
let mes = cakes[ultimo];
//console.log(mes);

function getLastCost(array) {
  //IMPORTANTE: para sacar el elemento de la ultima posicion del array se hace en dos pasos;
  //1º variable con la ultima posicion.
  //2º variable con el array y [ultimaposicion].
  let ultimo = array.length - 1;
  let mes = array[ultimo];
  return mes;
}

function getPriceDecember(array) {
  //Escribe tu codigo aqui
}

function getMinPriceDecember(array1,array2,array3) {
 
  
    let ultimo2=array2.length-1;
    let mes2=array2[ultimo2];
  
    let ultimo3=array3.length-1;
    let mes3=array3[ultimo3];
    
    if(mes1>mes2 && mes1>mes3) {
      return mes1;
    }
    else if (mes2>mes1 && mes2>mes3) {
      return mes2;
    }
    else if (mes3>mes1 && mes3>mes2) {
      return mes3;
    }
  }
  //console.log(getMinPriceDecember(cakes,drinks,preservedFood));

  let ultimo1=cakes.length-1;
  let mes1=cakes[ultimo1];
console.log(mes1);
  let ultimo2=drinks.length-1;
  let mes2=drinks[ultimo2];
console.log(mes2);
  let ultimo3=preservedFood.length-1;
  let mes3=preservedFood[ultimo3];
console.log(mes3);

if(mes1<=mes3 && mes1<=mes2) {
    console.log(mes1);
}
else if (mes2<=mes1 && mes2<=mes3) {
    console.log(mes2);
}
else if (mes3<=mes1 && mes3<=mes2) {
    console.log(mes3);
}