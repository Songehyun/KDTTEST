const { isArgumentsObject } = require("util/types");

function a(a, b) {                // a와 b사이에 쉼표 = 어? 배열에 있는거네 이건 배열이다.
  return a + b;
}

function b(a, b, callback) {      // Arguments를, 인자를 전달한다
  callback(a, b);         
}

function add(a, b){
  return a + b;
}

console.log(b(1, 2, function(a, b){
  console.log(a + b);
}));

b(1, 2, function(a, b){           // 부모b가 자식b한테 미루는것 함수를 정의해버리기떄문에 재활용성은 꽝, 호출할때마다 정의해줘야한다.
  console.log(a + b);             // 이벤트리스너도 같다.
})
