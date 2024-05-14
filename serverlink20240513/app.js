const http = require("http");
const fs = require('fs');

const server = http.createServer(function(request, response){
  if(request.url === '/'){

    const main = fs.readFileSync("./public/main.html", "utf8");

    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html; charset=utf-8');
    response.write(main);
    response.end();
  }
  if(request.url === '/mainstyle.css'){
    
    const style = fs.readFileSync("./public/mainstyle.css", "utf8");

    response.statusCode = 200;
    response.setHeader('Content-type', 'text/css; charset=utf-8');
    response.write(style);
    response.end();
  }
  if(request.url === '/mainjs.js'){

    const js = fs.readFileSync("./public/mainjs.js", "utf8");

    response.statusCode = 200;
    response.setHeader('Content-type', 'text/css; charset=utf-8');
    response.write(js);
    response.end();
  }
  console.log(request.url);
});

server.listen(8000);