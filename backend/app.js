const express = require("express");
const http = require("http");
const constants = require("./config/constants");
const { winstonLog } = require("./modules/common/common");

const app = express();

const port = process.env.SERVER_PORT || 3000;

function shutdown() {
  winstonLog({}, constants.logLevel.info, "Shutting down server");
  process.exit(1);
}
app.use(
  express.urlencoded({ extended: true, limit: constants.maxRequestSize })
);
app.use(express.json({ limit: constants.maxRequestSize })); // Default max request body size is 100kb

// CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, OPTIONS"
  );
  next();
});

// CORS middleware for handling options request
app.use((req, res, next) => {
  console.log('req.method',req.method)
  if (req.method === "OPTIONS") {
    const headers = {};
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
    res.writeHead(200, headers);
    res.end();
  } else {
    next();
  }
});

require("./config/express")(app);

const onError = (error) => {
  switch (error.code) {
    case "EACCES":
      winstonLog(
        {},
        constants.logLevel.error,
        `Port '${port}' requires elevated privileges`
      );
      break;
    case "EADDRINUSE":
      winstonLog(
        {},
        constants.logLevel.error,
        `Port '${port}' is already in use`
      );
      break;
    default:
      winstonLog(
        {},
        constants.logLevel.error,
        `An error occurred while starting server: ${error}`
      );
  }
  shutdown();
};

const onListening = () => {
  winstonLog({}, constants.logLevel.info, `Server started on port: '${port}'`);
};

// Creating server
const server = http.createServer(app);
server.listen(port);
server.setTimeout(constants.serverTimeout);
server.on("error", onError);
server.on("listening", onListening);
