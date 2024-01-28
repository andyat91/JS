const { comprobarPelotas, mostrar } = require("../detectar-pelota-rota-promesa.js");

//Detectar pelotas si tiene mas de 5 jugadas debe sacar reject y sino resolve

//Posibilidades:

//[1,1,1,1,1]
//[4,5,5,5,4]
//[-1,-1,-1,-1,-1]
//[null,2,3,1,1,1,1]
//[undefined,2,3]
//[-1,-2,3,-5,-1]

//Test1
test('Pelotas recibe [1,1,1,1,1] y devuelve reject "una de las pelotas se pasa"', ()=> {
    expect(comprobarPelotas([1,1,1,1,1])).rejects.toBe("una de las pelotas se pasa")
});

//Test2
test('Pelotas recibe [4,5,5,5,4] y devuelve reject "Pelotas OK"', ()=> {
    expect(comprobarPelotas([4,5,5,5,4])).resolves.toBe("Pelotas OK")
});

//Test3
test('Pelotas recibe [-1,-1,-1,-1,-1] y devuelve reject "Pelotas OK"', ()=> {
    expect(comprobarPelotas([-1,-1,-1,-1,-1])).resolves.toBe("Pelotas OK")
});

//Test4
test('Pelotas recibe [null,2,3,1,1,1,1] y devuelve reject "Pelotas OK"', ()=> {
    expect(comprobarPelotas([null,2,3,1,1,1,1])).resolves.toBe("Pelotas OK")
});

//Test5
test('Pelotas recibe [undefined,2,3] y devuelve reject "Pelotas OK"', ()=> {
    expect(comprobarPelotas([undefined,2,3])).resolves.toBe("Pelotas OK")
});

//Test6
test('Pelotas recibe [-1,-2,3,-5,-1] y devuelve reject "Pelotas OK"', ()=> {
    expect(comprobarPelotas([-1,-2,3,-5,-1])).resolves.toBe("Pelotas OK")
});


