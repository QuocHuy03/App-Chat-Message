
const Chats = require("../models/Chat.model");

exports.getChatUserID = async (req, res, next) => {
    try {
        const { userID, userIDChat } = req.params;
    
        const chatHistory = await Chats.find({
          $or: [
            { userID: userID, userIDChat: userIDChat },
            { userID: userIDChat, userIDChat: userID },
          ],
        }).sort({ createdAt: 1 });
    
        res.json(chatHistory);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
  };