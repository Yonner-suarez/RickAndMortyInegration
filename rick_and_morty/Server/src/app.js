const express = require("express");
const morgan = require("morgan");
const miRouter = require("./routes/routes");
const server = express();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log(req.url);
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(morgan("dev"));
server.use(express.json());

server.use("/rickandmorty", miRouter);

module.exports = server;
