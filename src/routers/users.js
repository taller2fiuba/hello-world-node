const express = require("express");
const userController = require("../controllers/UserController");
const router = express.Router();

router.get("/", userController.crear);

module.exports = router;
