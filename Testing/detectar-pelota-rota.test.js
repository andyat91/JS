const { comprobarPelotas } = require("../detectar-pelota-rota-promesa.js");

//Detectar pelotas si tiene mas de 5 jugadas debe sacar reject y sino resolve

//Posibilidades:

//[1,1,1,1,1]
//[4,5,5,5,4]
//[1,6,4,4,6]
//[2,3,4]
//[null,2,3]
//[undefined,2,3]
//[-1,-2,3]