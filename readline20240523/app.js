const rl = require('readline');
// console.dir(rl);

let inOut = {
  input: global.process.stdin,            // global = 최상위 객체
  output: global.process.stdout
};

const readline = rl.createInterface(inOut);

readline.question("내가 좋아하는 동물은? :", function (answer){
  if(answer === "강아지"){
  readline.question("어떤 강아지를 좋아합니까? :", function(answer2){
    console.log(answer2,"정답입니다.");
    readline.close();
  })
  } else {
    console.log("땡 틀렸습니다.")
    readline.close();
  }
})