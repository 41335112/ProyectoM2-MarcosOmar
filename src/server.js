const express = require("express");
const { router } = require("./router");
const { logginRequest, errorHandler } = require("../middlewares");
const swaggerUi = require("swagger-ui-express");



const app = express();

app.use(logginRequest);
app.use(express.json());


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup())

app.use(router);

app.use(errorHandler);

module.exports = {
    app,
}