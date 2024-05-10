const { Console } = require('console');
const fs = require('fs');
const http = require('http');

function loadPokemonNames(path) {
  try {


    if (typeof(path) === "string") {
      const pokemonValue = fs.readFileSync(path, 'utf8');
      return JSON.parse(pokemonValue);
    } 
    // else 를 사용하는 대신 try catch 문법을 사용해서 에러를 잡아내는 것이
    // '에러 처리'라는 것을 명시적으로 이야기 하는 좋은 어휘


  } catch (error) {


    // 매개변수 error는 catch구문이 실행될 때 자동으로 전달되는 변수
    console.error("에러 내용:", error);


  }
}
const data = loadPokemonNames("./pokemonNames.json");
// console.log(data);

  let pokemonhead = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>`
  let pokemonend = `</body>
  </html>`;

let short = [];

for (j = 0; j < data.length; j++){
for (i=0; i<data.length; i++) {
if(data[j][0] === data[i][0]){
short += `
  <h1>No.${[i+1]}</h1>
  <h1>${data[i]}</h1>`;
  let htmlname = data[j][0]+'start.html';
  fs.writeFile(htmlname , pokemonhead + short + pokemonend, () => {})
}
}
}

const server = http.createServer((req , res) => {
  fs.readFile(`Estart.html`,`utf-8`,(err, box)=>{
    if(err){
      console.log(`에러`)                               
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(box);
  })
  })
  server.listen(8000)