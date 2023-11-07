let express = require("express");
let app = express();

app.get("/Hola", function (request,response) {
    response.send ({mensaje : "hola que tal"})
    });

app.listen(8000, function() {
    console.log("Server is up and running");
});