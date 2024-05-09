function work(string) {               // 이 work는 이제 안전하게 스트링만 실행할 것이다
  try{ typeof(string) === "string";
      console.log(string);
    }
      catch(crror){
      console.error('내가 원하는게 아니야');
    }
  };

work("안녕");
work(1);
work(true);
work({name : "송이현"});