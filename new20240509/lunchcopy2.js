const http = require('http');

const lunchMenus = [
  ["주니어와퍼", "몬스터와퍼", "스테커버거","콰트로치즈", "와퍼"],
  ["쉑쉑버거", "핫도그", "밀크쉐이크", "스모크쉑버거"],
  "순두부찌개",
  ["치킨마요", "참치마요", "무슨마요", "도련님도시락"],
  ["짜장면", "짬뽕", "볶음밥", "잡채밥", "유린기"],
  "쭈꾸미",
  "함박스테이크",
  "마라탕",
  "곰탕",
  "돈까스",
  "쌀국수",
  "분식",
  "칼국수",
  "콩나물밥",
];

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function lunchSelector(array) {

  let firstrandom = getRandomInt(0, array.length);                             // 첫번째 배열에 들어갈 숫자를 변수에 저장
  
  if(Array.isArray(array[firstrandom]) === true) {
    return array[firstrandom][getRandomInt(0, array[firstrandom].length)]      // 만약 첫번째 뽑은게 배열이면 배열의 크기만큼 랜덤한번더 돌려서 뽑기
  }
  return array[firstrandom]                                                   // 이건 그냥 단순 배열일경우 뽑아주기
}

console.log(lunchSelector(lunchMenus));

const server = http.createServer((req, res) => {

  if(req.url === "/favicon.ico")
    return;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write("<html>");
  res.write("<head>");
  res.write("<title>");
  res.write("점심 메뉴 고르기");
  res.write("</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>");
  const getData =lunchSelector(lunchMenus);
  console.log(getData); 
  res.write(getData);
  res.write("</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, (error) => {
  if(error) {
    console.log('Error: ', error);
  } else {
    console.log('서버돌아감');
    console.log(`http://localhost:3000/`);
  }
});