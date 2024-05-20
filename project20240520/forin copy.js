function forObject(a, b) {
  try {
    if(typeof(a) === "object"){
      if(typeof(b) === "object"){
        let values = [];
        for(let key in a){
          values.push(a[key]);
        }
        for(let key in b){
          values.push(b[key]);
        }
        console.log(values);
        let add = values.reduce((a, b) => {
          return a + b;
        });
        console.log("다 더한값: ", add);
      }
    }
  } catch(error) {
    console.log(error);
    console.log("안됨")
  }
}

const a = {first: 1};
const b = {first: 2};

forObject(a, b);