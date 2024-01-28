const { comprobarNegativo } = require("../contiene-negativo-promesa.js")

//promesa que nos saca el reject si contiene negativo o un resolve si no contiene numeros negativos
//si es negativo saca el primer numero negativo si es positivo saca todos los numeros
//Posibilidades;

//[-1,-2,-5]
//["a","b","c"]
//[0,0,0]
//[-1,-1,-1]
//["a",-2,-5]
//[undefined,2,5]


//Test1
test('promesa que recibe [-1,-2,-5] y resuelve -1',() => {
    expect(comprobarNegativo([-1,-2,-5])).rejects.toEqual(-1);
});

//Test2  
test('promesa que recibe ["a","b","c"] y resuelve ¿?',() => {
    expect(comprobarNegativo(["a","b","c"])).resolves.toStrictEqual(["a","b","c"]);
});

//Test3  
test('promesa que recibe [0,0,0] y resuelve [0,0,0]',() => {
    expect(comprobarNegativo([0,0,0])).resolves.toStrictEqual([0,0,0]);
});

//Test4  
test('promesa que recibe [-1,-1,-1] y resuelve -1',() => {
    expect(comprobarNegativo([-1,-1,-1])).rejects.toEqual(-1);
});

//Test5  
test('promesa que recibe [undefined,2,5] y resuelve {}',() => {
    expect(comprobarNegativo([undefined,2,5])).resolves.toStrictEqual([undefined,2,5]);
});
