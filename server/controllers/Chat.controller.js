const Chats = require("../models/Chat.model");

exports.getChatUser = async (req, res, next) => {
  try {
    const chatHistory = await Chats.find();
    res.json(chatHistory);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
