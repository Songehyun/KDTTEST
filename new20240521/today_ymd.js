function ymd(){
  const date = new Date();        // new가 붙으면 반드시 객체이다
  const year = date.getFullYear();
  const month = date.getMonth() + 1;       // month는 0으로 시작함
  const day = date.getDate();
  console.log(year+"-"+month+"-"+day);
  return (year+"-"+month+"-"+day);
  };

  module.exports = ymd;