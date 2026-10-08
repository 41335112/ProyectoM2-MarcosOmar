const { pool } = require("./src/config/dbConnect.js");
const { SERVER_PORT } = require("./src/config/envs.js");
const { inicializateDb } = require("./src/config/initdb.js");
const { app } = require("./src/server.js");

const startServer = async () => {
    try {
        // Probar conexión a la base de datos
        await pool.query('SELECT 1');
        await inicializateDb();

        console.log("Conexión con la base de datos exitosa");

        // Iniciar el servidor Express
        app.listen(SERVER_PORT, function () {
            console.log(`El servidor se levantó correctamente en http://localhost:${SERVER_PORT}`);
        });
    } catch (error) {
        console.error(" Error al iniciar la aplicación:");
        console.error(error.message);
    }
};

startServer();
