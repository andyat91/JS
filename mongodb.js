//Conexion MYSQL y MONGODB

const { MongoClient } =require("mongodb");
const mysql = require("mysql2");

//Conexion con MYSQL a traves del url
const url = "mongodb://127.0.0.1:27017";

//Conexion con MONGODB a traves de parametros de entrada
const connection = mysql.createConnection({
  
  host: "localhost",
  user: "root",
  password: "volador25",
  database: "polo_digital",
});



//conectar con mysql




//Conexion mongodb = url de la base de datos de mongo
const mongoConnection = new MongoClient(url);
let mongoDataBase;

//funcion asincrona
async function main() {

    //para conectarse al mongo
    await mongoConnection.connect();
    console.log("Conectado a MongoDB")

    //use polodigital
     mongoDataBase = mongoConnection.db("polo_digital");

    //Conexion Polo_digital;
    connection.connect((error) => {
        if (error) {
         return console.error(`error: ${error.message}`);
       }
        console.log("Conectado a MySQL!!");
      });


// await migrarClientes();
// await migrarEmpleadosclientes();
// await migrarMobiliario();
// await migrarEventos();
// await migrarUsuarios();
// await migrarInventario();
//  await migrarSalas();
//       await migrarUsuariosEventos();


return true;

}




main()
.then(() => {
    console.log("completado");

}).catch((error)=> {
    console.log(error);
    
})
//.finally(() => {
//    client.close();
//});




//async function migrarClientes() {

//    const collection =mongoDataBase.collection("clientes");
    //Extract
//     connection.query(
//        `select razon_social,CIF,sector,telefono,numero_empleados from clientes`,
 //        async function(error,result,fields) {
 //           if (error) {
 //               return console.error(`error: ${error.message}`);
 //             } 
 //             console.log(result);
              //Insertado
 //       await collection.insertMany(result);

 //       });

//}

//  async function migrarEmpleados() {
// let empleados = [];
//      const collection =mongoDataBase.collection("empleados");
//      //Extract
//       connection.query(
//          `select * from empleados join usuarios on empleados.usuarioid = usuarios.id`,
//           async function(error,result,fields) {
//              if (error) {
//                  return console.error(`error: ${error.message}`);
//                } 
//                console.log(result);

//         for(i=0 ; i<result.length ; i++) {
//             empleados.push({
//                 nombre: result[i].nombre,
//                 apellidos: result[i].apellidos,
//                 telefono: result[i].telefono,
//                 salario: result[i].salario,
//                 puesto: result[i].puesto,
                
//                 DNI:result[i].DNI,
//                 usuario:{
//                     email:result[i].email}
//             })
//         };
              
//          await collection.insertMany(empleados);

//          });
//  }

async function migrarEmpleadosclientes() {

    const collection =mongoDataBase.collection("empleadosclientes");
    //Extract
    const  empleadosclientes = [];
     connection.query(
        `SELECT empleadosclientes.nombre,empleadosclientes.apellidos,usuarios.email,clientes.razon_social,empleadosclientes.DNI,empleadosclientes.telefono AS telefonoempleados FROM empleadosclientes JOIN usuarios ON empleadosclientes.usuarioid = usuarios.id 
        JOIN clientes ON empleadosclientes.clientesid = clientes.id`,
         async function(error,result,fields) {
            if (error) {
                return console.error(`error: ${error.message}`);
              } 

              for(i=0 ; i<result.length ; i++) {

                empleadosclientes.push({
                    nombre: result[i].nombre,
                    apellidos: result[i].apellidos,
                    usuarioid:{
                        email: result[i].email},
                    cliente:{
                        razon_social: result[i].razon_social},
                    DNI: result[i].DNI,
                    telefono: result[i].telefonoempleados
                })
              }
              console.log(empleadosclientes);
              
        await collection.insertMany(empleadosclientes);

        });

}

// async function migrarEventos() {

//     const collection =mongoDataBase.collection("eventos");
//     //Extract
//     const eventos =[];
//      connection.query(
//         `SELECT eventos.nombre AS eventosnombre,eventos.tipo,eventos.fecha_inicio,eventos.fecha_fin,eventos.aforo,clientes.razon_social,salas.nombre AS salasnombre FROM eventos JOIN clientes ON eventos.clientesid = clientes.id 
//         JOIN salas ON eventos.salaid = salas.id`,
//          async function(error,result,fields) {
//             if (error) {
//                 return console.error(`error: ${error.message}`);
//               } 

//               for(i=0 ; i<result.length ; i++) {

//                 eventos.push({
//                     nombre: result[i].eventosnombre,
//                     tipo: result[i].tipo,
//                     fecha_inicio: result[i].fecha_inicio,
//                     fecha_fin: result[i].fecha_fin,
//                     aforo: result[i].aforo,
//                     cliente: {
//                         razon_social: result[i].razon_social},
//                     sala: {
//                         nombre: result[i].salasnombre}

//                 })
//               }
//               console.log(eventos);
              
//         await collection.insertMany(eventos);

//         });

// }

// async function migrarUsuarios() {

//     const collection =mongoDataBase.collection("usuarios");
//     //Extract
//      connection.query(
//         `select email,password from usuarios`,
//          async function(error,result,fields) {
//             if (error) {
//                 return console.error(`error: ${error.message}`);
//               } 
//               console.log(result);
              
//         await collection.insertMany(result);

//         });

// }


// async function migrarInventario() {

//     const collection =mongoDataBase.collection("inventario");
//     //Extract
//     const inventario =[];
//      connection.query(
//         `SELECT * FROM inventario JOIN clientes ON inventario.clienteid = clientes.id`,
//          async function(error,result,fields) {
//             if (error) {
//                 return console.error(`error: ${error.message}`);
//               } 

//               for(i=0 ; i<result.length ; i++) {

//                 inventario.push({
//                     nombre: result[i].nombre,
//                     referencia: result[i].referencia,
//                     tipo: result[i].tipo,
//                     estado: result[i].estado == 0  ? true : false ,
//                     marca: result[i].marca,
//                     cliente: {
//                         razon_social: result[i].razon_social}

//                 })
//               }
//               console.log(inventario);
              
//         await collection.insertMany(inventario);

//         });

// }

// async function migrarMobiliario() {

//     const collection =mongoDataBase.collection("mobiliario");
//     //Extract
//     const mobiliario =[];
//      connection.query(
//         `SELECT mobiliario.nombre AS nombremobiliario,mobiliario.tipo,mobiliario.referencia,mobiliario.estado,salas.nombre as salasnombre FROM mobiliario JOIN salas ON mobiliario.salaid = salas.id `,
//          async function(error,result,fields) {
//             if (error) {
//                 return console.error(`error: ${error.message}`);
//               } 

//               for(i=0 ; i<result.length ; i++) {

//                 mobiliario.push({
//                     nombre: result[i].nombremobiliario,
//                     tipo: result[i].tipo,
//                     referencia: result[i].referencia,
//                     estado: result[i].estado == 0  ? true : false ,
//                     sala: {
//                         nombre: result[i].salasnombre}

//                 })
//               }
//               console.log(mobiliario);
              
//         await collection.insertMany(mobiliario);

//         });

// }


// async function migrarSalas() {

//     const collection =mongoDataBase.collection("salas");
//     //Extract
//     const salas =[];
//      connection.query(
//         `SELECT * FROM salas JOIN clientes ON salas.clientesid = clientes.id`,
//          async function(error,result,fields) {
//             if (error) {
//                 return console.error(`error: ${error.message}`);
//               } 

//               for(i=0 ; i<result.length ; i++) {

//                 salas.push({
//                     nombre: result[i].nombre,
//                     superficie: result[i].superficie,
//                     planta: result[i].planta,
//                     precio: result[i].precio,
//                     tipo: result[i].tipo,
//                     cliente: {
//                         nombre: result[i].razon_social}

//                 })
//               }
//               console.log(salas);
              
//         await collection.insertMany(salas);

//         });

// }


// async function migrarUsuariosEventos() {

//     const collection =mongoDataBase.collection("usuarioseventos");
//     //Extract
//     const salas =[];
//      connection.query(
//         `SELECT usuarios.email,eventos.nombre FROM usuarioseventos JOIN usuarios ON usuarioseventos.usuarioid = usuarios.id 
//         JOIN eventos ON usuarioseventos.eventosid = eventos.id`,
//          async function(error,result,fields) {
//             if (error) {
//                 return console.error(`error: ${error.message}`);
//               } 

//               for(i=0 ; i<result.length ; i++) {

//                 salas.push({
//                     usuario: {
//                       email: result[i].email},
//                     evento: {
//                         nombre: result[i].nombre}

//                 })
//               }
//               console.log(salas);
              
//         await collection.insertMany(salas);

//         });

// }