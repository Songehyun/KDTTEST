// POST 데이터를 받아서 JSON파일 만들기
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URLSearchParams } = require('url');

const server = http.createServer((req, res) => {
  if(req.method === "GET"){
    if(req.url === "/"){
      fs.readFile(path.join(__dirname, "index.html"), (error, data) => {
        if(error) {
          res.writeHead(500, {"Content-Type": "text/plain"});
          res.end("500 code는 서버 자체의 에러");
          return;
        }
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end(data);
      });
    } else {
      res.writeHead(404, {"Content-Type": "text/plain;"});
      res.end("404 code는 페이지를 찾을 수 없음");
    }
  } else if (req.method === "POST") {
    if(req.url === "/test"){
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const parsedData = new URLSearchParams(body);    // 청크된 바디안의 내용을 URL로 바꾸기
        const korea = parsedData.get("korea");
        const mid = parsedData.get("mid");
        const one = parsedData.get("one");
        const ame = parsedData.get("ame");
        const min = parsedData.get("min");
        const fast = parsedData.get("fast");

        const jsonData = {
          "한식" : korea,
          "중식" : mid,
          "일식" : one,
          "양식" : ame,
          "분식" : min,
          "패스트푸드" : fast
        };
        const jsonDataString = JSON.stringify(jsonData, null, 2);
        fs.writeFile(path.join(__dirname, "lunchmake.json"), jsonDataString, (error) => {
          if(error){
            res.writeHead(500, {"Content-Type": "text/plain; charset=utf-8"});
            res.end("서버 자체 에러");
            return;
          }
          res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
          res.end("파일저장됨")
        });
      });
    } else {
      res.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
      res.end("404 code는 페이지를 찾을 수 없음");
    }
  } else {
    res.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
    res.end("404 code는 페이지를 찾을 수 없음");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// const makeJsonflie = fs.writeFile("lunch.txt", `${test(foodJson)}`, 'utf-8', function(error){
//   if(error){
//     console.log("에러 :", error);
//   } else {
//     console.log("파일만듬");
//   }
// });