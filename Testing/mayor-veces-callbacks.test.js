const { suma , resta , contar } = require('../mayor-veces-callback.js');

//Testing para callback, que lee un array de secuencias de suma o resta y devuelve lo que aplica

//Posibilidades:
//1º [resta,resta,resta]
//2º [suma,suma,suma]
//3º [undefinded,undefinded,undefinded]
//4º []
//5º [suma,"r",resta,resta]
//6º [22,31,suma,resta]

//Test1
test('Callback que devuelve funcion que mas se repite.recibe [resta,resta,resta] y devuelve resta', () => {
    expect(contar([resta,resta,resta])).toEqual("resta");
});

//Test2
test('Callback que devuelve funcion que mas se repite.recibe [suma,suma,suma] y devuelve suma', () => {
    expect(contar([suma,suma,suma])).toEqual("suma");
});

//Test3  ERROR CALLBACK IS NOT A FUNCTION
test('Callback que devuelve funcion que mas se repite.recibe [undefined,undefined,undefined] y devuelve undefined', () => {
    expect(contar([undefined,undefined,undefined])).toEqual(undefined);
});

//Test4
test('Callback que devuelve funcion que mas se repite.recibe [] y devuelve iguales', () => {
    expect(contar([])).toEqual("iguales");
});

//Test5
test('Callback que devuelve funcion que mas se repite.recibe [suma,resta,resta] y devuelve resta', () => {
    expect(contar([suma,resta,resta])).toEqual("resta");
});

//Test6 ERROR CALLBACK IS NOT A FUNCTION
test('Callback que devuelve funcion que mas se repite.recibe [22,31,suma,resta] y devuelve undefined', () => {
    expect(contar([22,31,suma,resta])).toEqual(undefined);
});