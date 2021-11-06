// a local coffee shop wants your help to build a simple application they can use to record customer orders and maintain a record of what has been ordered (for any period of any amount of time).

// create a very simple app that has two components
// -- a way to create an order
//          - form
// -- a way to display the data
//          - lists (ul)

'use strict';

//----------- Global variables ----------//
// window into the DOM:
const coffeeForm = document.querySelector('form');
const resultsList = document.querySelector('ul');

let drinkOrders = [];

//----------- Constructor functions ----------//

// constructor function for the Drink

function Drink(name, drinkType, milk, size) {
  this.name = name;
  this.drinkType = drinkType;
  this.milk = milk;
  this.size = size;
}

//----------- Global functions ----------//

function makeADrink(name, drinkType, milk, size) {
  // run the drink through the Drink constructor
  let drinkObj = new Drink(name, drinkType, milk, size);
  // push the new Drink instance to the drink array
  drinkOrders.push(drinkObj);
  // render that drink as an LI
  drinkObj.renderADrink();
}

// render the LIs

Drink.prototype.renderADrink = function () {
  // create an LI
  let liElement = document.createElement('li');
  // give it some content
  // "Sheyna ordered a 12oz tea with whole milk"
  liElement.textContent = `${this.name} ordered a ${this.size} oz ${this.drinkType} with ${this.milk} milk.`;
  // append it to the parent
  resultsList.appendChild(liElement);
};

// put our drinks in storage

function storeDrinks() {
  // "order" is our KEY
  // turn my array into a string
  console.log(drinkOrders);
  let stringifiedOrders = JSON.stringify(drinkOrders);
  console.log(stringifiedOrders);
  // put my string in local storage
  localStorage.setItem('order', stringifiedOrders);
}


// get our drinks out of storage

function getDrinks() {
  // check if I have drinks in storage
  let potentialOrders = localStorage.getItem('order');
  // if I do, do something with them
  console.log(potentialOrders);
  if (potentialOrders) {
    let parsedOrders = JSON.parse(potentialOrders);
    // run the parsed orders back through the constructor function
    // this is called REINSTANITATE
    for (let order of parsedOrders) {
      let name = order.name;
      let drinkType = order.drinkType;
      let milk = order.milk;
      let size = order.size;
      makeADrink(name, drinkType, milk, size);
    }
  }
  console.log(drinkOrders);
  //if not?
}

//----------- Event Handler ----------//
function handleSubmit(e) {
  e.preventDefault();
  let customerName = e.target.name.value;
  let drinkType = e.target.drink.value;
  let milk = e.target.milk.value;
  let size = e.target.drinkSize.value;
  makeADrink(customerName, drinkType, milk, size);
  coffeeForm.reset();
  storeDrinks();
}

//----------- Event Listerner ----------//
coffeeForm.addEventListener('submit', handleSubmit);
getDrinks();
