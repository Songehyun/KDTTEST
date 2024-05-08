let fs = require('fs');

let html =`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>서버가 잘 돌아간다.</h1>
</body>
</html>`;



fs.writeFile('a.html', html, () => function(){});