const menu = document.getElementById('menu');
const toggleButton = document.getElementById('menu-toggle');

const menuWidth = 250;
const slideStep = 10;
const intervalTime = 16
const closedPosition = -(menuWidth);
const openPosition = 0;

let isOpen = false;
let interval;

function slideMenu(open){
  let currentPosition = parseInt(menu.style.left, 10);
  let targetPosition;
  let step

  if(open){
    targetPosition = openPosition;
    step = slideStep;
  }

  clearInterval(interval);

  interval = setInterval(() => {
    if(open === true){
      if(currentPosition >= targetPosition) {
        clearInterval(interval);
        menu.style.left = targetPosition + 'px';
        return;
      }
    } else {
      if (currentPosition <= targetPosition) {
        
      }
    }
  }, interval);
}
