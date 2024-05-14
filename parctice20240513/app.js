const fs = require('fs');
const http = require('http');

const server = http.createServer(function(request, response){
  if(request.url === '/'){

    const main = fs.readFileSync("./public/main.html", "utf8");
    
    response.statusCode = 200;
    response.setHeader("Content-type", "text/html;");
    response.write(main);
    response.end();
  }
  if(request.url === '/style.css'){

    const style = fs.readFileSync("./public/style.css", "utf8");

    response.statusCode = 200;
    response.setHeader("Content-type", "text/css;");
    response.write(style);
    response.end();
  }
  if(request.url === '/mainjs.js'){

    const mainjs = fs.readFileSync("./public/mainjs.js", "utf8");

    response.statusCode = 200;
    response.setHeader("Content-type", "text/javascript");
    response.write(mainjs);
    response.end();
  }
  console.log(request.url);
});

server.listen(7000);