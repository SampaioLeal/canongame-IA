const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const options = {
  /* ... */
};
const io = require("socket.io")(httpServer, options);

app.use(express.static("public"));

io.on("connection", (socket) => {
  /* ... */
});

httpServer.listen(3000);
