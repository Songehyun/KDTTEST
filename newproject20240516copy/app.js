const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');

const server = http.createServer((request, response) => {
  if(request.method === "GET") {
    console.log("요청 URL 검사 :", request.url);
    if(request.url === "/") {

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      const htmlData = fs.readFileSync("./public/index.html", "utf8");  
      response.write(htmlData);
      response.end();
    }
    if(request.url === "/style.css") {

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/css");
      const cssData = fs.readFileSync("./public/style.css", "utf8");  
      response.write(cssData);
      response.end();
    }
    if(request.url.startsWith("/test")) {                       //혹시 url에 "/test"글자가 있다면, 아래에 로직을 실행해줄래?
      const inputData = request.url.split("?")[1];              //url에 querystring이라는 이름의 규칙이 보여서 적당히 잘라서 사용하려고 해
      const data = qs.decode(inputData);                        //받아온 데이터를 해석해줄래?
      console.log(data);                                        //해석 한 것을 console에 찍어줘
      console.log(data.detail);
    }
  }
});

const PORT = 8080;
server.listen(PORT, function(err) {
  if(err) {
    console.log(err);
  }
  console.log("서버 돌아감");
  console.log(`http://localhost:${PORT}`);
})