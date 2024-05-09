function calcBooha(a, b, callback) {
  callback(a, b);
}

calcBooha(10, 20, function(a, b) {
  let result = console.log(a + b);
  return result;
});

calcBooha(10, 20, function(a, b) {
  let result =  console.log(a - b);
  return result;
});