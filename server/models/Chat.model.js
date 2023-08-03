const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    userIDChat: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chats", postSchema);
