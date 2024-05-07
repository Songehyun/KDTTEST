let fs = require('fs');

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
    <h1>Promises를 안써도 파일이 만들어진다.</h1>
  </body>
</html>
`;

fs.writeFile('test2.html', html, function (){});    //promises 를 안쓴다 = 아래다 함수 선언