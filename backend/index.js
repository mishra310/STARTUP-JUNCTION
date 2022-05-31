// importing express
const express = require("express");

// importing userRouter
const StartupRouter = require("./routers/startuprouter");
const InvestorRouter = require("./routers/investorrouter");
const UtilRouter = require("./routers/util");

// importing cors
const cors = require("cors");

// initialize express app
const app = express();

const port = 5000;

app.use(express.json());

app.use(
  cors({
    // allowing the frontend to request
    origin: ["http://localhost:3000"],
  })
);

app.use(express.static("./static"));

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});
const connectedExperts = {};

io.on("connection", (socket) => {
  console.log("client connected ");
  socket.on("adduser", (id) => {
    connectedExperts[id] = socket.id;
    console.log(connectedExperts);
  });

  socket.on("checkexpert", (id) => {
    socket.emit("checkexpertfromserver", {
      status: "online",
      socketId: connectedExperts[id],
    });
  });

  socket.on("send", (data) => {
    // console.log(data);
    data.sent = false;
    socket.broadcast.emit("recmsg", data);
  });
  socket.on("sendmsg", (data) => {
    console.log(data);
    data.sent = false;
    // socket.to(data.socketId).emit("recmsg", data);
    socket.broadcast.emit("recmsg", data);
  });
});

// using middleware
app.use("/user", StartupRouter);
app.use("/investor", InvestorRouter);
app.use("/util", UtilRouter);

// endpoints or route
app.get("/user", (req, res) => {
  console.log("a request from client!!");
  res.send("request processed at /");
});

app.get("/", (req, res) => {
  console.log("a request from client at home!!");
  res.send("request processed at /home");
});

app.get("/home", (req, res) => {
  console.log("a request from client at home!!");
  res.send("request processed at /home");
});

// start the server
httpServer.listen(port, () => {
  console.log("server started...");
});

// To run server : npm run dev
