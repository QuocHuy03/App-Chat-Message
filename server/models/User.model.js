const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      enum: ["member", "admin"],
      default: "member",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", postSchema);
