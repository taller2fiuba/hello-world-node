const express = require("express");
require("./src/db/mongoose");
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

router.get("/", function (req, res) {
  res.send({ title: "Hello world by NodeJS" });
});

app.use("/", router);
app.use("/users", user_routers);

const server = app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = server;
