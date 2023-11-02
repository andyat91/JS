//crea conexion con base de datos que tenemos en el sistema.
const mysql = require("mysql2");
//conectandose al servidor de mysql local
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "volador25",
    database: "polo_digital"
});
//una function para conectarse a MYSQL
connection.connect(function(error) {
if (error) {
//Si no vuelve la conexion o hayh algun error te devuelve error mensaje
    return console.error("error :"+(error.message));
}
//y sino que se conecte
 console.log("conectado a mysql");
});

//lista ordenada por orden alfabetico
//hacer una consulta
connection.query("select * from usuarios", function(error,result, fields) {
    if (error) {
        return console.error("error"+error.message);
    }
  
//creamos un for que vaya ordenando alfabeticamente los numeros
//bucle burbuja para que recorra y vaya ordenando dos veces
for(j=0;j<result.length;j++) {
for(i=0;i<result.length-1;i++) {
// alfabeticamente se ordena igual que numericamente de a-z
    if(result[i].nombre>result[i+1].nombre) {
//IMPORTANTE: tenemos que crear una variable para ir guardando el resultado
//
       let aux=result[i+1];
       result[i+1]=result[i];
        result[i]=aux;
    }

}
}
//console.log(result);
//salario mas alto de empleados:  
});
connection.query("select * from empleados", function(error,result, fields) {
    if (error) {
        return console.error("error"+error.message);
    }
let max=result[0].salario;

for(i=1;i<result.length;i++){
    if(result[i].salario>max) {
        max=result[i].salario;
    }
   
}
console.log(max);



});
//cerrar conexion
//funcion para cerrar la conexion
connection.end(function(error) {
//si no se ejecuta Error
    if (error) {
        console.error("error :"+error.message);

    }
    console.log("desconectado de mysql");
})
