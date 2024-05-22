// setTimeout(function() {}, 1000)            

let counter = 0;                              // 재귀함수, 이걸 간편화 시킨게 셋인터벌이다.
const timer = function() {
  setTimeout(() => {                          // 이방식이 정석 화살표함수 쓰기
    console.log(counter + "vw");
    counter++;
    if(counter < 10) {
    timer();
  } else {
    console.log("초세기가 종료되었습니다.");
  }
  }, 1000);
}

timer()


//절차가 복잡한 작업을 할 때는 타임 로그를 찍어서 언제 찍었는지 확인하기