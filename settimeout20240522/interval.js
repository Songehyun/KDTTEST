// setInterval("반복실행하고싶은것", "실행간격");

let intervalHandler = 0;                    // 상태변수, 밖에서 조종, 어떤상태일때 어떻게 하겠다
let timer = setInterval(()=>{
  console.log("1초" + intervalHandler);
  intervalHandler++;
  if(intervalHandler > 10){
    clearInterval(timer);
  }
}, 1000);
