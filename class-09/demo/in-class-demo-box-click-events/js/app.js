'use strict';

//1. Get an element from the DOM:
let container = document.getElementById('container');
let parentEl = document.getElementById('results');

// 3. Declare an function that will be an event handler
function handleClick(event) {
  console.log(event.target.id);
  if (event.target.id === 'box-one') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 1 was clicked!';
    pEl.className = 'class-i-am-adding';
    parentEl.append(pEl);
  } else if (event.target.id === 'box-two') {
    let pEl = document.createElement('p');
    pEl.textContent = 'clicked:  Box 2!';
    pEl.setAttribute('class', 'class-i-am-adding');
    parentEl.append(pEl);
  } else if (event.target.id === 'box-three') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 3 done got clicked!';
    pEl.id = 'my-id';
    parentEl.appendChild(pEl);
  } else {
    let pEl = document.createElement('p');
    pEl.textContent = 'FOLLOW INSTRUCTIONS!!!';
    parentEl.appendChild(pEl);
  }
}

console.log(container);
//2. Attach an event listern to the DOM element:
container.addEventListener('click', handleClick);
