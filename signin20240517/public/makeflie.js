function datasplit(req , res) {
  



  const qs = require('node:querystring');
  const fs = require('fs');
  
  if (req.method === "POST") {
    let body = "";
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      let parse = qs.parse(body);
      
      for(let i=0; i<namearray.length; i++){                      
      if (parse.name === namearray[i]) {
        console.log(namearray[i]+"는 있는 이름입니다.")
        return 
      } else {

      }
    }

    })
  }
  
}

module.exports = datasplit;















// for(let i = 0; i < namearray.length; i++){
//   if(data.name !== namearray[i]){

//     return console.log("이름일치");

//   } else {

//     return console.log("이름불일치")

//   }
// }


// fs.writeFile( "signin.txt" , signin , () => {});
// const signin = "이름:"+data.name+"\n"+"비밀번호:"+data.password+"\n";
// 예시 datasplit(furl)