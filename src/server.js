const express = require("express");
const { router } = require("./router");
const { logginRequest, errorHandler } = require("../middlewares");



const app = express();

app.use(logginRequest);
app.use(express.json());

app.use(router);

app.use(errorHandler);

module.exports = {
    app,
}