const fs = require("fs");

function readFileAndLog(path) {
  console.log("함수 실행 시작");

  fs.readFile(path, "utf8", function (err, data) {
    if (err === true) {
      console.error("경로에 있는 데이터를 읽지 못해서 에러 발생", err);
      return;
    }
    console.log("읽었다.");
    console.log("읽은 데이터:", data);


    data = null;
    console.log("읽고난 후 메모리에서 지움");
  });
}

const filePath = "./memoricopy.txt";

readFileAndLog(filePath);