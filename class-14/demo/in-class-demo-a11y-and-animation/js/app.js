'use strict';

const cta = document.querySelector('div.cta');
const results = document.getElementById('results');

function handleClick(event) {
  let newParagraph = document.createElement('p');
  newParagraph.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur illo laborum, doloribus asperiores doloremque obcaecati mollitia nulla, excepturi at, eos perferendis nostrum non tempora quos quisquam alias. Explicabo, quis!';
  results.appendChild(newParagraph);
}

cta.addEventListener('click', handleClick);
cta.addEventListener('keypress', handleClick);