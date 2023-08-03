const express = require("express");
const router = express.Router();
const UserControllers = require("../controllers/User.controller");

router.post("/register", UserControllers.register);
router.post("/login", UserControllers.login);
router.get("/verifyAccessToken", UserControllers.verifyAccessToken);
router.get("/getUserById/:id", UserControllers.getUserById);




module.exports = router;
