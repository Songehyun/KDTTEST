const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === "GET"){
    if(req.url === "/") {
      fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
        if(err) {
          res.writeHead(500, {"Content-Type": "text/plain"});
          res.end("500 code는 서버 자체의 에러");
          return;
        }
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end(data);
      });
    } else {
      res.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"})
      res.end("404 code는 페이지를 찾을 수 없음");
    }
  } else if (req.method === "POST") {
    if (req.url === "/submit") {
      let body = "";
      req.on("data" , (chunk) => {
        body += chunk.toString();
      });
      req.on("end" , () => {
        const parsedData = new URLSearchParams(body);
        const title = parsedData.get("title");
        const content = parsedData.get("content")
      })
    }
  }
})
