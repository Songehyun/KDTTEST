const fs = require('fs');
const ymd = require('./today_ymd.js');

// console.log(ymd());

let convertJson = JSON.stringify(htmlMarkup, null, 2);

const test = fs.writeFileSync(`${ymd()}-test.json`, convertJson,'utf-8', function(error){
  if(error){
    console.log("에러입니다.");
    console.log("에러 내용 : " , error);
  }
  console.log("저장완료");
});