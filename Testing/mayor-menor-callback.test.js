const { procesar, esMayor, esMenor } = require("../mayor-menor-callbacks.js");


//Testing para funcion mayor-menor-callbacks
//Esta funcion procesa un array y determina el mayor o menor a traves de callbacks

//Posibilidades:  

//1º [0,0,0,0,0] =  0
//2º [0,0,0,0,1] =  mayor 1  menor 0
//3º [null,0,null,0,1] = null
//4º [-38,-22,-42,-1,-110] =  mayor -1 menor -110
//5º ["a","b","c","r","a"] = mayor r menor a
//6º [0,"b",0,"r",1] = ??

//Test 1
test("aplicar callback con resultado mayor. Valor de entrada [0,0,0,0,0] y de salida 0", () => {
    expect(procesar([0,0,0,0,0],esMayor)).toEqual(0); 
});
test("aplicar callback con resultado menor. Valor de entrada [0,0,0,0,0] y de salida 0", () => {
    expect(procesar([0,0,0,0,0],esMenor)).toEqual(0);
});
//Test 2
test("aplicar callback con resultado mayor. Valor de entrada [0,0,0,0,1] y de salida 1", () => {
    expect(procesar([0,0,0,0,1],esMayor)).toEqual(1);
});
test("aplicar callback con resultado menor. Valor de entrada [0,0,0,0,1] y de salida 0", () => {
    expect(procesar([0,0,0,0,1],esMenor)).toEqual(0);
});
//Test 3
// Recibe Null pero da fallo
test("aplicar callback con resultado mayor. Valor de entrada [null,0,null,0,1] y de salida 1", () => {
    expect(procesar([null,0,null,0,1],esMayor)).toEqual(1);
});
test("aplicar callback con resultado menor. Valor de entrada [null,0,null,0,1] y de salida null", () => {
    expect(procesar([null,0,null,0,1],esMenor)).toEqual(null);
});
//Test 4
test("aplicar callback con resultado mayor. Valor de entrada [-38,-22,-42,-1,-110] y de salida -1", () => {
    expect(procesar([-38,-22,-42,-1,-110],esMayor)).toEqual(-1);
});
test("aplicar callback con resultado menor. Valor de entrada [-38,-22,-42,-1,-110] y de salida -110", () => {
    expect(procesar([-38,-22,-42,-1,-110],esMenor)).toEqual(-110);
});
//Test 5
test("aplicar callback con resultado mayor. Valor de entrada ['a','b','c','r','a'] y de salida r", () => {
    expect(procesar(["a","b","c","r","a"],esMayor)).toEqual("r");
});
test("aplicar callback con resultado menor. Valor de entrada ['a','b','c','r','a'] y de salida a", () => {
    expect(procesar(["a","b","c","r","a"],esMenor)).toEqual("a");
});
//Test 6
test("aplicar callback con resultado mayor. Valor de entrada [0,'b',0,'r',1] y de salida 1", () => {
    expect(procesar([0,"b",0,"r",1],esMayor)).toEqual(1);
});
test("aplicar callback con resultado menor. Valor de entrada [0,'b',0,'r',1] y de salida 0", () => { 
    expect(procesar([0,"b",0,"r",1],esMenor)).toEqual(0);
});
//Test 7
test("aplicar callback con resultado mayor. Valor de entrada [] y de salida undefinded", () => {
    expect(procesar([],esMayor)).toEqual(undefined);
});
test("aplicar callback con resultado menor. Valor de entrada [] y de salida undefinded", () => {
    expect(procesar([],esMenor)).toEqual(undefined);
});