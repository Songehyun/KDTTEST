const fs = require(`fs`);

const http = require(`http`);

const server = http.createServer((req , res) => {
  fs.readFile(`test.html`,`utf-8`,(err, data)=>{
    if(err){
      console.log(`error has beed occured`)
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  })
  })
  server.listen(3303)