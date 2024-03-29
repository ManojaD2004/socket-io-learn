const http = require("http").createServer();
const createWsServer = require("socket.io").Server;

const io = new createWsServer(http, {
  cors: {
    origin: "https://manojad2004.github.io",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", `${socket.id.substr(0, 2)} said ${message}`);
  });
});
const port = process.env.PORT || 3000;

http.listen(port, () => console.log(`listening on ${port}`));
