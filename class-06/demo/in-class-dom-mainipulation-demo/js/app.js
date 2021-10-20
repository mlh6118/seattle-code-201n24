'use strict';

const profileContainer = document.getElementById('kittenProfiles');

let jumper = {
  name: 'Jumper',
  like: ['cuddling', 'lazer pointer', 'catnip', 'stuff mouse'],
  about: 'Jumper is really cute',
  renderLikes: function() {
    for (let i = 0; i < this.like.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${this.name} likes ${this.like[i]}.`;
      ulElement.appendChild(li);
    }
  }
};

console.log(profileContainer);

// 1. create an element
let article = document.createElement('article');
// 2. (or 3) give that element content

// 3. (or 2) append it to the DOM
profileContainer.appendChild(article);



// 1. create an element
let h3 = document.createElement('h3');
// 2. (or 3) give that element content
h3.textContent = jumper.name;
// 3. (or 2) append it to the DOM
article.appendChild(h3);


// 1. create an element
let p = document.createElement('p');
// 2. (or 3) give that element content
p.textContent = jumper.about;
// 3. (or 2) append it to the DOM
article.appendChild(p);

// 1. create an element
let ulElement = document.createElement('ul');
// 2. (or 3) give that element content

// 3. (or 2) append it to the DOM
article.appendChild(ulElement);

jumper.renderLikes();
// let li = document.createElement('li');
// li.textContent = '6 a.m.: 23 cookies';
// ulElement.appendChild(li);

// 1. create an element
let img = document.createElement('img');
// 2. (or 3) give that element content
img.src = 'images/jumper.jpeg';
img.alt = jumper.about;
// 3. (or 2) append it to the DOM
article.appendChild(img);



