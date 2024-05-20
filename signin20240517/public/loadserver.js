function loadserver(url, fliepath, contenttype, req , res){

  const fs = require('fs');
  
  if(req.method === "GET"){
    if(req.url === url){
      const flie = fs.readFileSync(fliepath);
      res.statusCode = 200;
      res.setHeader('Content-type', contenttype);
      res.write(flie);
      console.log(req.url);
      res.end();
    }
}
};

module.exports = loadserver;


// 예제 코드 : loadserver("/", "./public/index.html", "text/html; charset=utf-8", request, response);