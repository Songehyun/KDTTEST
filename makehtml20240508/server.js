const fs = require(`fs`);   // 파일을 불러오기 위한 fs 사용 선언

const http = require(`http`); // 서버를 만들기 위해서 http 사용 선언

const server = http.createServer((req , res) => {
  fs.readFile(`a.html`,`utf-8`,(err, box)=>{
    if(err){
      console.log(`에러`)                                   // 에러가 났을경우 콘솔에 에러 출력
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(box);
  })
  })
  server.listen(8000)