const express = require("express");

const routes = require("./routes");

const app = express();

app.set("view engine", "pug");

app.use(routes);

module.exports = app;
