let coleccion = [5,7,10,13,2,1,1,3];
//creamos una coleccion UNA VARIABLE con elementos dentro
coleccion[0]=3;
//para cambiar el valor de un elemento de array se selecciona el elemento +igual
coleccion[1]=1;
coleccion[2]=1;
coleccion[3]=2;
coleccion[4]=13;
coleccion[5]=10;
coleccion[6]=7;
coleccion[7]=5;
//Empieza en la linea 0 y va sumando
//por el consolelog sacamos la posicion que nos interese con []
console.log(coleccion[0]);
console.log(coleccion[2]);
//metemos la coleccion en un for para que nos haga bucle hasta el final de ella
//.length significa longitud y poner -1 es ir a la ultima posicion.
for (let i=0;i<coleccion.length;i++) {
//i=0 porque empieza desde cero
//i es menor que la longitud de la coleccion; 
//contador mas 1
    console.log(coleccion[i]);
}
//Muestra la coleccion entera. por console log.
console.log(coleccion);