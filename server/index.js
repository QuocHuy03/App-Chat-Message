const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());

const useRouter = require("./routes/user.route");
const bodyParser = require("body-parser");

const port = process.env.PORT || 1234;
const server = http.createServer(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const io = new Server(server, {
  cors: {
    origin: process.env.URL_CLIENT,
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

app.use("/api/user", useRouter);

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

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("MongoDB is ready");

    app.listen(port, () => {
      console.log(`SERVER RUNNING : ${port}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB error: ${err}`);
  });
