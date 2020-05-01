const express = require("express");
require("./src/db/mongoose");
const home_routers = require("./src/routers/home");
const user_routers = require("./src/routers/users");
const logger = require("./logger").logger;
const loggerHttp = require("./logger").loggerHttp;

const app = express();

const port = process.env.PORT;
const router = express.Router();

// middleware que parsea a json todo los request
app.use(express.json());

// Logeador de errores en requests
app.use(loggerHttp);

app.use("/", home_routers);
app.use("/users", user_routers);

const server = app.listen(port, function () {
  logger.info(`Example app listening on port ${port}!`);
  logger.debug("debug de ejemplo");
  logger.warn("warn de ejemplo");
  try {
    throw new Error("excepcion de ejemplo");
  } catch (error) {
    logger.warn(error, "mensaje de que paso de ejemplo");
  }
});

module.exports = server;
