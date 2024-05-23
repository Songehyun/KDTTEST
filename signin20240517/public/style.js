const nameid = document.getElementById('nameid');
const password = document.getElementById('password');
const passwordre = document.getElementById('passwordre');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

const nameyn = document.getElementById('nameyn');
const passwordyn = document.getElementById('passwordyn');
const passwordreyn = document.getElementById('passwordreyn');
const emailyn = document.getElementById('emailyn');
const phoneyn = document.getElementById('phoneyn');
const allno = document.getElementById('allno');

const allbox = document.getElementById('allbox');

const namearray = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민"
];

const numberarray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0"
];

const emailpattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

var phoneRule = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;
var phoneback = /^[0-9]{4}$/;





nameid.addEventListener("input", () => {
  if(namearray.includes(nameid.value)){
    nameyn.style.backgroundColor = "green";
  } else {
    nameyn.style.backgroundColor = "red";
  }
});

password.addEventListener("input", () => {
  if(password.value.slice(0, 3) === nameid.value && phoneback.test(password.value.slice(-4)) === true){
    passwordyn.style.backgroundColor = "green";
  } else {
    passwordyn.style.backgroundColor = "red";
  }
});

passwordre.addEventListener("input", () => {
  if(passwordre.value === password.value){
    passwordreyn.style.backgroundColor = "green";
  } else {
    passwordreyn.style.backgroundColor = "red";
  }
});

email.addEventListener("input", () => {
  if(emailpattern.test(email.value) === true){
    emailyn.style.backgroundColor = "green";
  } else {
    emailyn.style.backgroundColor = "red";
  }
});

phone.addEventListener("input", () => {
  if(phoneRule.test(phone.value)){
    phoneyn.style.backgroundColor = "green";
  } else {
    phoneyn.style.backgroundColor = "red";
  }
});

allbox.addEventListener("input", () => {
  if(nameyn.style.backgroundColor === "green" && passwordyn.style.backgroundColor === "green" && passwordreyn.style.backgroundColor === "green" && emailyn.style.backgroundColor === "green" && phoneyn.style.backgroundColor === "green"){
    allno.style.backgroundColor = "green";
    allno.style.color = "black";
    allno.innerText = "모든 입력란이 유효합니다.";
  } else {
    allno.style.backgroundColor = "red";
    allno.style.color = "white";
    allno.innerText = "아직 모든 입력란이 유효하지 않습니다.";
  }
});

console.dir(allno);