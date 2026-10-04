const express = require("express");

const app = express();

const router = express.Router();

app.use(express.json());

app.use(router);


app.listen(3000, function(){
 console.log("El servidor se levanto correctamente");
});



