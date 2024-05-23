const rl = require('readline');
const fs = require('fs');
const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json"));



const readLine = rl.createInterface({
  input : process.stdin,
  output : process.stdout
});

let answerData = [];
let score = 0;

function pokeque(){readLine.question("포켓몬스터 이름 작성해주세요 :", function(answer){
      if(answer === "종료") {
          console.log("총 포켓몬스터"+score+"개를 작성하였습니다.")
          readLine.close();
        } else if (pokemonData.includes(answer)) {
            score++
            answerData.push(answer);
            
            console.log(answerData);
            pokeque();
    } else {
      console.log("없는 포켓몬");
      pokeque();
    }
});
};

pokeque()
