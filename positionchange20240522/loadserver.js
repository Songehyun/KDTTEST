function loadserver(url, fliepath, contenttype, req , res){

  const fs = require('fs');

  if(req.method === "GET"){
    if(req.url === "/favicon.ico"){
      return;
    }
    if(req.url === url){
      const flie = fs.readFileSync(fliepath);
      res.statusCode = 200;
      res.setHeader('Content-type', contenttype);
      res.write(flie);
      res.end();
    } else {
    console.log("서버 안돌아감");
    console.log(req.url);
  }
}
};

module.exports = loadserver;


// 예제 코드 : loadserver("/", "./public/index.html", "text/html; charset=utf-8", request, response);