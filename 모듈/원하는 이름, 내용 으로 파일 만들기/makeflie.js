function makeflie(furl) {
const qs = require('node:querystring');
const fs = require('fs');

  if(furl.startsWith("/test")) {                       //혹시 url에 "/test"글자가 있다면, 아래에 로직을 실행해줄래?
      const inputData = furl.split("?")[1];              //url에 querystring이라는 이름의 규칙이 보여서 적당히 잘라서 사용하려고 해
      const data = qs.decode(inputData);                        //받아온 데이터를 해석해줄래?
      console.log(data);                                        //해석 한 것을 console에 찍어줘
      fs.writeFile( data.name , data.detail , () => {});
    }
  }

  module.exports = makeflie;


// 예제 코드 const flieurl = request.url;  makeflie(flieurl)