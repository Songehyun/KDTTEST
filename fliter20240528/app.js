const http = require('http');

const names = ['KDT', '공욱재', '미남', '메서드'];

const server = http.createServer((req, res) => {
  if(name !== '공욱재'){
    if(name !== '메서드'){
      return true;
    }
  }
  return false;

const html = `
<html>
  <head>
    <title>배열요소의 특정 요소</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1>필터링과 매핑</h1>
    <ul>
      ${flitereNames.map(function(name) {
        return '<li>' + name + '</li>';

      }).join('')}
    </ul>
  </body>
</html>
`

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
    });

server.listen(3000, () => {
  console.log('http://localhost:3000');
});