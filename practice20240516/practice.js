const someURL = "/test?name=kongukjae&age=27&city=deajeon";


function queryStringToObject(url) {
  const text = url.split("?")[1];
  console.log(text);

  const keyValuePairs = text.split("&");
  const obj = {};           // 이건 어디에 쓰는 거지?

  keyValuePairs.forEach((pair) => {
    const keyValue = pair.split("=");
    const key = keyValue[0];
    const value = keyValue[1];
    obj[key] = value;     // key는 숫자가 아닐텐데 어떻게 배열에 담지?
  });

  console.log(obj);
  return obj;
}

const resultObject = queryStringToObject(someURL);
console.log(resultObject);

