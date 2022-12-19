'use strict';

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const CARROT_SIZE = 80;

function initGmae() {
  addItem('carrot',20,'img/carrot.png');
  addItem('bug',20,'img/bug.png');
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - 80;
  const y2 = fieldRect.height - 80;

  for(let i = 0; i < count; i++) {
    const item = document.createElement('img');
    item.setAttribute('class',className);
    item.setAttribute('src',imgPath);
    item.style.position = 'absolute';
    const x = randomNumber(x1,x2);
    const y = randomNumber(y1,y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNumber(min,max) {
  return Math.random() * (max - min) + min;
}


initGmae();