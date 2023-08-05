const express = require("express");
const router = express.Router();
const UserControllers = require("../controllers/User.controller");
const middlewareAuth = require("../middlewares/verifyAccessToken");

router.post("/register", UserControllers.register);
router.post("/login", UserControllers.login);
router.get("/verifyAccessToken", UserControllers.verifyAccessToken);
router.get("/verifyAccessToken", UserControllers.verifyAccessToken);
router.get(
  "/getUserById/:id",
  middlewareAuth.verifyAccessTokenMiddleware,
  UserControllers.getUserById
);
router.get(
  "/getAllUser",
  middlewareAuth.verifyAccessTokenMiddleware,
  UserControllers.getAllUser
);

module.exports = router;
