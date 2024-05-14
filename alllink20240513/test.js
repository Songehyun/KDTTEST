let func = function(a,b,callback){
  return callback(a,b);
}
console.log(func(1,2, function(){
    return arguments[0] + arguments[1];
}))
console.log(func(1,2, function(){
  return arguments[0] - arguments[1];
}))