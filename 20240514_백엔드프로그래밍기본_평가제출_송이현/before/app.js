const fs = require('fs');
const http = require('http');

const server = http.createServer(function(request, response){

function urlfunc(url, fliepath, contenttype){
  if(request.url === "/favicon.ico"){
    return;
  }
  if(request.url === url){

    const flie = fs.readFileSync(fliepath);
    response.statusCode = 200;
    response.setHeader('Content-type', contenttype);
    response.write(flie);
    response.end();
  } else {
    console.log(request.url);
  }
};

urlfunc("/allstyle.css", "./public/allstyle.css", "text/css; charset=utf-8");
urlfunc("/allstyle.js", "./public/allstyle.js", "text/javascript; charset=utf-8");
urlfunc("/", "./public/index.html", "text/html; charset=utf-8");
urlfunc("/index.html", "./public/index.html", "text/html; charset=utf-8");
urlfunc("/map.html", "./public/map.html", "text/html; charset=utf-8");
urlfunc("/turn.html", "./public/turn.html", "text/html; charset=utf-8");
urlfunc("/battle.html", "./public/battle.html", "text/html; charset=utf-8");
urlfunc("/character.html", "./public/character.html", "text/html; charset=utf-8");

});

server.listen(8080);