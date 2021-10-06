'use strict';

let companyName = 'Dunder Mifflin Paper Company';
// Structure of a function
/*
   function nameOfFunction() {
     //code that will run goes here
   };
*/

// // function declaration
function birthdayGreeting(birthdayPerson) {
  console.log(`Happy birthday ${birthdayPerson}!`);
  console.log("We hope that your day is filled with joy and lots of good cake");
  console.log(`${birthdayPerson}, you one of the best!`);
  console.log(`Best wishes from the team at the ${companyName}`);

  // "Return" will work like "break"
  // it will stop the function and return the following value:
  return `${birthdayPerson}, you are the best!`;
};

//invoking the function (calling the function):
birthdayGreeting("Pam");
birthdayGreeting("Jim");
birthdayGreeting("Michael");

// declare a function with a parameter (birthdayPerson)
// call a function we call it with an argument ("Pam")

// We can pass variables as arguments
let username = prompt("What is your name?");
let greeting = birthdayGreeting(username);
console.log(greeting);

function birthdayGreeting2(birthdayPerson, age, cakeFlavor, from = "the staff at Dunder Mifflin") {
  console.log(`Happy Birthday ${birthdayPerson}! We're putting ${age} candles on your ${cakeFlavor} cake. Best wishes from ${from}.`);
}

birthdayGreeting2("Dwight", 55, "beat");
birthdayGreeting2("Pam", 30, "choclate");
birthdayGreeting2("Jim", 30, "pineapple", "Pam");

// // If you uncomment the next line of code it will break:
// birthdayGreetingAnotherWay();

// Another way to write a function:
let birthdayGreetingAnotherWay = function() {
  console.log("Happy birthday");
}

// This type of function can only be invoked after the function declariation
birthdayGreetingAnotherWay();