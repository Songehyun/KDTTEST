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
urlfunc("/img/map.png", "./img/map.png", "image/png; charset=utf-8");
urlfunc("/img/adven.png", "./img/adven.png", "image/png; charset=utf-8");
urlfunc("/img/cave.png", "./img/cave.png", "image/png; charset=utf-8");
urlfunc("/img/badst.png", "./img/badst.png", "image/png; charset=utf-8");
urlfunc("/img/house.png", "./img/house.png", "image/png; charset=utf-8");
urlfunc("/img/mont.png", "./img/mont.png", "image/png; charset=utf-8");
urlfunc("/img/temple.png", "./img/temple.png", "image/png; charset=utf-8");
urlfunc("/img/old.png", "./img/old.png", "image/png; charset=utf-8");

});

server.listen(8080);






// if(request.url === "/img/map.png"){
//   fs.readFile("./img/map.png",function(err,data){
//     if(err){
//       console.error("에러발생 : ", err);
//     }
//     response.statusCode = 200;
//     response.setHeader("Content-Type", "image/png; charset=utf-8");
//     response.write(data);
//     response.end();
//   })
// }