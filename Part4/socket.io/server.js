const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Listen on a port
const port = 3000;

// Simple route to serve an HTML page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// When a client connects
io.on("connection", (socket) => {
  console.log("a user connected");

  // Listen for 'chat message' event from the client
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    // Emit the message to all connected clients
    io.emit("chat message", msg);
  });

  // When the client disconnects
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
