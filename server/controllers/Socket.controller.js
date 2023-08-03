const { Server } = require("socket.io");
const Chats = require("../models/Chat.model");

exports.initSocketIO = (server, onlineUsers) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.URL_CLIENT,
      methods: ["GET", "POST"],
    },
  });
  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("user_login", (username) => {
      onlineUsers.set(socket.id, username);
      io.emit("update_online_users", Array.from(onlineUsers.values()));
    });

    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });

    socket.on("send_message", async (data) => {
      const newChat = new Chats(data);
      await newChat.save().then((result) => {
        console.log(result)
        // io.emit("SERVER_RETURN_ALL_MESSAGE", {
        //   content: result.content,
        //   username: result.username,
        //   avatar: result.avatar,
        //   createdAt: moment(data.createAt).format("LLL"),
        // });
        socket.to(result).emit("receive_message", result);
      });
    });

    socket.on("disconnect", () => {
      const username = onlineUsers.get(socket.id);
      if (username) {
        onlineUsers.delete(socket.id);
        io.emit("update_online_users", Array.from(onlineUsers.values()));
        console.log("Client disconnected");
      }
    });
  });
};
