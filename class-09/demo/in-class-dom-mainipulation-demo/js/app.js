'use strict';

// the global variable:
const profileContainer = document.getElementById('kittenProfiles');
let kittenArray = [];
const kittenTableBody = document.querySelector('tbody');
// const kittenTFoot = document.querySelector('tfoot');
// const kittenTHead = document.querySelector('thead');
const kittenForm = document.getElementById('form');

// functional logic:
function Kitten(name, like, about, src, ageInMonths) {
  this.name = name;
  this.like = like;
  this.about = about;
  this.src = src;
  this.ageInMonths = ageInMonths;
  this.renderLikes = function (ulElement) {
    for (let i = 0; i < this.like.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${this.name} likes ${this.like[i]}.`;
      ulElement.appendChild(li);
    }
  };
  this.render = function () {
    // 1. create an element
    let article = document.createElement('article');
    // 2. (or 3) give that element content
    // 3. (or 2) append it to the DOM
    profileContainer.appendChild(article);

    // 1. create an element
    let h3 = document.createElement('h3');
    // 2. (or 3) give that element content
    h3.textContent = this.name;
    // 3. (or 2) append it to the DOM
    article.appendChild(h3);

    // 1. create an element
    let p = document.createElement('p');
    // 2. (or 3) give that element content
    p.textContent = this.about;
    // 3. (or 2) append it to the DOM
    article.appendChild(p);

    // 1. create an element
    let ulElement = document.createElement('ul');
    // 2. (or 3) give that element content
    // 3. (or 2) append it to the DOM
    article.appendChild(ulElement);

    this.renderLikes(ulElement);
    // let li = document.createElement('li');
    // li.textContent = '6 a.m.: 23 cookies';
    // ulElement.appendChild(li);

    // 1. create an element
    let img = document.createElement('img');
    // 2. (or 3) give that element content
    img.src = this.src;
    img.alt = this.about;
    // 3. (or 2) append it to the DOM
    article.appendChild(img);
  };
  kittenArray.push(this);
}
/*
  Refer to HTML syntax:
  https://www.w3schools.com/tags/tag_tbody.asp
*/
Kitten.prototype.renderTable = function () {
  let tr = document.createElement('tr');
  kittenTableBody.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);
  for (let i = 0; i < this.like.length; i++) {
    let tdLike = document.createElement('td');
    tdLike.textContent = this.like[i];
    tr.appendChild(tdLike);
  }
};

function handleSubmit(event) {
  event.preventDefault();
  let kittenName = event.target.kittenName.value;
  console.log(kittenName);
  let about = event.target.about.value;
  let ageInMonths = parseInt(event.target.ageInMonths.value);
  let imageURL = event.target.imageURL.value;
  let favorites = [
    event.target.fav1.value,
    event.target.fav2.value,
    event.target.fav3.value,
  ];
  let newKitty = new Kitten(
    kittenName,
    favorites,
    about,
    imageURL,
    ageInMonths
  );
  newKitty.render();
  newKitty.renderTable();
}

// let jumperLikesArray = ['cuddling', 'lazer pointer', 'catnip', 'stuff mouse'];

//let jumper = new Kitten(
new Kitten(
  'Jumper',
  ['cuddling', 'lazer pointer', 'catnip'],
  'Jumper is really cute',
  'images/jumper.jpeg',
  3
);

// let frankie = new Kitten(
new Kitten(
  'Frankie',
  ['naps', 'treats', 'cat tree'],
  'Frankie is adorable, and is 12 months old.',
  'images/frankie.jpeg',
  5
);
// let serena = new Kitten(
new Kitten(
  'Serena',
  ['string', 'feathers', 'soft beds'],
  'Serena is a sweet kitty',
  'images/serena.jpeg',
  3
);

for (let i = 0; i < kittenArray.length; i++) {
  kittenArray[i].render();
  kittenArray[i].renderTable();
}

kittenForm.addEventListener('submit', handleSubmit);
