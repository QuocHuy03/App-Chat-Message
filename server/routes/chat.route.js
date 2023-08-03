const express = require("express");
const router = express.Router();
const ChatControllers = require("../controllers/Chat.controller");

router.get("/getChatUser", ChatControllers.getChatUser);

module.exports = router;
