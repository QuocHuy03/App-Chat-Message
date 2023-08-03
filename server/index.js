const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const socketController = require("./controllers/Socket.controller");
const server = http.createServer(app);

// Thiết lập tùy chọn cho CORS
const corsOptions = {
  origin: process.env.URL_CLIENT,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};

app.use(cors(corsOptions));
const onlineUsers = new Map();
socketController.initSocketIO(server,onlineUsers);
const userRouter = require("./routes/user.route");
const chatRouter = require("./routes/user.route");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("MongoDB is ready");

    server.listen(port, () => {
      console.log(`SERVER RUNNING : ${port}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB error: ${err}`);
  });
