const { Server } = require("socket.io");

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

    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
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
