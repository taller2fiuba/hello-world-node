const express = require("express");
const app = express();
const router = express.Router();

const port = process.env.PORT;

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get("/", function (req, res) {
  res.json({ title: "Hello world" });
});

app.use("/", router);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = app;
