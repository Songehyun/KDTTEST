// JSON파일 활용해서 깔끔하게 바꾸기
const http = require('http');
const fs = require('fs');
const path = require('path');

const foodJson = {
  "한식" : ["돌솥비빔밥", "김치알밥","된장찌개"],
  "패스트푸드": ["더블치즈버거", "콰트로치즈버거", "닭강정","고기만두"],
  "양식" : ["함박스테이크", "로제파스타", "크림파스타"],
  "일식" : ["안심돈까스", "등심돈까스", "카레돈까스", "초밥"],
  "분식" : ["떡볶이", "라볶이", "라면"],
  "중식" : ["짜장면", "짬뽕", "탕수육"]
};

function test(object) {
  let result = [];
  for(let key in object){
    result.push(`${key} : ${object[key]} \n`);
  }
  console.log(result);
  return result.join("");
}

const makeJsonflie = fs.writeFile("lunch.txt", `${test(foodJson)}`, 'utf-8', function(error){
  if(error){
    console.log("에러 :", error);
  } else {
    console.log("파일만듬");
  }
});