function b(a, b, callback) {
  callback(a, b);
}

b(20, 10, function(a, b){       
  if(typeof(a) === "string" || typeof(b) === "string"){    
  console.log(a + b);
  } else if(typeof(a) === "number" && typeof(b) === "number"){
    console.log(a * b);
  }
})