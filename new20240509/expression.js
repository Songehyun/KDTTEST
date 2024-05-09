const a = function (first) {
  console.log(first);
}
a();
const b = (first) => {console.log(first)}            // 극단적으로 코드 줄이면 const b = first => console.log(first);
b();

// >= 이건 조건연산 => 이건 애로우펑션 작성법