function b(a, b, callback) {
  callback(a, b);         
}

console.log(b(4, 2, function(a, b){
  console.log(a * b);
}));