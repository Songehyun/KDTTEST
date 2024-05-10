const { Console } = require('console');
const fs = require('fs');

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
console.log(data);


for(i = 0; i < data.length; i++){

if(data[i].length === 3) {


let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>이름이 3글자인 포켓몬만 뽑기<h1>
  <h1>포켓몬 번호 No.${[i]}</h1>
  <h1>${data[i]}</h1>
</body>
</html>`;

fs.writeFile('No.'+[i+1]+"-"+data[i]+'.html', html, () => {})
}

}


  let nohithead = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>`
  let nohitend = `</body>
  </html>`;

let short = [];

for (i=0; i<data.length; i++) {
if(data[i].length !== 3){
short += `
  <h1>No.${[i+1]}</h1>
  <h1>${data[i]}</h1>`;
}
}

fs.writeFile('Nohit.html', nohithead + short + nohitend, () => {})






// let pokenohit =  `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <h1>남아버린 포켓몬들<h1>`
// let pokenohitlast = `</body>
// </html>`;
// fs.writeFile('Nohit.html', pokenohit+pokenohitno+pokenohitlast, () => {})




// function allnohitnofun(arr){
// for(i=0; i<arr.length; i++) {
//   if(arr[i].length !== 3){
//     "No." + [i+1];
//   }
// }
// }

// function allnohitnamefun(array){
// for(i=0; i<array.length; i++){
//   if(array[i].length !== 3){
//     array[i];
//   }
// }
// }