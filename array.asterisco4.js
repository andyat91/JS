/*PEdir con readline un numero y añade por cada fila un asterisco:
// ejemplo:4
// HACER A LA REVERSA

// *
// **
// ***
// ****
// */
let numero =3;

for(j=0;j<numero;j++){
    let linea="";
//i<=j es la manera para que de una vuelta en un bucle salga y entre en el de arriba y así
    for(i=0;i<=j;i++){
        linea=linea+"*";
    }
    console.log(linea);
//me va reflejando en consola las vueltas que va dando y lo que va pintando
//por eso va creando nuevas lineas.
}