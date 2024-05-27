let movebox = document.getElementById('movebox');
let submitbutton = document.getElementById('submitbutton');

let count = 0;
let boxState = false;

submitbutton.addEventListener('click',()=>{
  count++;
})

function moveBox() {
  if(boxState !== true){
    let moveLeft = setInterval(()=>{
      let red = getRandomInt(0,255);
      let blue = getRandomInt(0,255);
      let green = getRandomInt(0,255);
      num++;
      squre.style.right = `${num}%`;
      squre.style.backgroundColor = `rgb(${red},${blue},${green})`;
      if(count % 2 === 0){
        clearInterval(moveLeft);
        boxState = true;
      }
    },1);
  } else {
    let moveRight = setInterval(()=>{
      let red = getRandomInt(0,255);
      let blue = getRandomInt(0,255);
      let green = getRandomInt(0,255);
      num--;
      squre.style.right = `${num}%`;
      squre.style.backgroundColor = `rgb(${red},${blue},${green})`;
      if(count % 2 === 0){
        clearInterval(moveRight);
        boxState = false;
      }
    },1);
  }
};