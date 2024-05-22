const http = require("http");
const fs = require('fs');
const path = require("path");
const loadserver = require("./loadserver.js");

const server = http.createServer((request, response) => {
  loadserver("/", "./index.html", "text/html; charset=utf-8", request, response);
  loadserver("/style.css", "./style.css", "text/css; charset=utf-8", request, response);
  loadserver("/index.js", "./index.js", "text/javascript; charset=utf-8", request, response);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});