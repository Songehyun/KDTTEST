const http = require('http');
const loadserver = require('./public/loadserver');

const server = http.createServer(function(request, response){

  loadserver("/", "./public/index.html", "text/html; charset=utf-8", request, response);
  loadserver("/style.css", "./public/style.css", "text/css; charset=utf-8", request, response);

});

server.listen(8000);