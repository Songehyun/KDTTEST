function forObject(a, b) {
  try {
    if(typeof(a) === "object"){
      if(typeof(b) === "object"){
        console.log("a, b 매개변수 모두 객체입니다.");
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