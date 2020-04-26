const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/", function (req, res) {
  const user = new User({ name: "Juan", lastname: "Perez", age: 85 });

  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch(() => {});
});

module.exports = router;
