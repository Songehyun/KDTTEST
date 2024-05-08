let fs = require('fs').promises;   // const fs = require( "fs" ); => fs 모듈 불러오기 

let html = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body > h1:nth-child(1) {
      color : white;
      background-color: #101010;
    };
  </style>
</head>
  <body>
    <h1>아래에 함수를 비워놔도 만들어진다.</h1>
  </body>
</html>
`;

fs.writeFile('test.html', html); // promises 를 쓴다 = 아래다 함수 선언 안해도됨