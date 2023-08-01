const express = require("express");
const router = express.Router();
const UserControllers = require("../controllers/User.controller");

router.post("/register", UserControllers.register);
router.post("/login", UserControllers.login);
router.get("/verifyAccessToken", UserControllers.verifyAccessToken);

module.exports = router;
