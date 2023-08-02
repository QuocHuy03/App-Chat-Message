const { Server } = require("socket.io");

exports.initSocketIO = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.URL_CLIENT,
      methods: ["GET", "POST"],
    },
  });
  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });

    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });

    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });
};
