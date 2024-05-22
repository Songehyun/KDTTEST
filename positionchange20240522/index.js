let movebox = document.getElementById('movebox');
let submitbutton = document.getElementById('submitbutton');

let count = 0;
let clickcount = 0;

function move(){
  let timer = setInterval(() => {
    if(count < 500) {
    movebox.style.left = `-${count}px`;
    count++;
    console.log(count);
    } else {
      return count;
    }
  }, 10);
};

submitbutton.addEventListener("click", move);