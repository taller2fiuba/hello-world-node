const express = require("express");
require("./src/db/mongoose");
const home_routers = require("./src/routers/home");
const user_routers = require("./src/routers/users");

const app = express();
const port = process.env.PORT;
const router = express.Router();

// middleware que parsea a json todo los request
app.use(express.json());

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

app.use("/", home_routers);
app.use("/users", user_routers);

const server = app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = server;
