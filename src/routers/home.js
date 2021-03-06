const express = require("express");
const homeController = require("../controllers/HomeController");
const router = express.Router();

router.get("/", homeController.index);
router.get("/github", homeController.github);

module.exports = router;
