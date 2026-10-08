const { pool } = require("./src/config/dbConnect.js");
const { SERVER_PORT } = require("./src/config/envs.js");
const { inicializateDb } = require("./src/config/initdb.js");
const { app } = require("./src/server.js");





const startServer = async() => {
 
    await pool.query('SELECT 1');
    await inicializateDb();

    console.log("Conexxion con la base de datos exitosa");

    app.listen(SERVER_PORT, function(){
       console.log("El servidor se levanto correctamente");
    });




}


startServer();


