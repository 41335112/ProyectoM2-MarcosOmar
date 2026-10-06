const { pool } = require("./src/config/dbConnect.js");
const { inicializateDb } = require("./src/config/initdb.js");
const { app } = require("./src/server.js");

const { loadEnvFile } = require("node:process");
loadEnvFile('.env');




const startServer = async() => {
 
    await pool.query('SELECT 1');
    await inicializateDb();

    console.log("Conexxion con la base de datos exitosa");

    app.listen(process.env.SERVER_PORT, function(){
       console.log("El servidor se levanto correctamente");
    });




}


startServer();


