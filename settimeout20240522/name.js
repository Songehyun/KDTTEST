setTimeout(function() {

  console.log("1.배성빈");

  setTimeout(function() {

    console.log("2.김정수");

    setTimeout(function() {

      console.log("3.조우식");

    }, 1000);
  }, 2000);
}, 3000);


// 비동기처리
// setTimeout(function() {
//   console.log("1.배성빈");
// }, 3000);

// setTimeout(function() {
//   console.log("2.김정수");
// }, 2000);

// setTimeout(function() {
//   console.log("3.조우식");
// }, 1000);