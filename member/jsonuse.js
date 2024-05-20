function loadNames(path) {

  const fs = require('fs');

  try {

    if (typeof(path) === "string") {
      const nameValue = fs.readFileSync(path, 'utf8');
      return JSON.parse(nameValue);
    } 

  } catch (error) {

    console.error("에러 내용:", error);
    
  }
}

module.exports = loadNames;


// 예시 const memberjson = loadNames("./member.json");