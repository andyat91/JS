//Crear lineas de asteriscos a la inversa: es decir:
//Si pongo un 5:
//*****
//****
//***
//**
//*
let numero=5;
let linea=0;
// Entra en el bucle le digo que j es menor que el numero
for (let j = 0; j < numero; j++) {
    let linea = "";

    for (let i=0; i<numero-j; i++) {
        linea+= "*";
    }
console.log (linea);
}
//le digo que me deje una linea vacía y que entre en el siguiente bucle
//da 5 vueltas sumando astericos y pintalos
//IMPORTANTE cuando pase por consola vuelve al otro bucle
//que ya va por la vuelta 1 entonces en el bucle de dentro le digo
// que i es menor que numero menos las vueltas que da el bucle de arriba.