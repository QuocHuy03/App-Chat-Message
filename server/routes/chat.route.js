const express = require("express");
const router = express.Router();
const ChatControllers = require("../controllers/Chat.controller");

router.get("/getChatUser/:userID/:userIDChat", ChatControllers.getChatUserID);

module.exports = router;
