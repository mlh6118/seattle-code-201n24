'use strict';

// "let" and "const" are new in ES6
// before that it was just "var"

let superCool = true;
let correctAnswer = true;
//let message = "weeee!!!!"

if (correctAnswer) {
  var globalScope = "I can go everywhere!";
  let message = "hi, you are correct";
  
  if (superCool) {
    message = "yeah!";
  }
  console.log(message);
}
// globalScope was declared using "var" so it can be used everywhere.
console.log(globalScope);
// message cannot be read outside of the above loop. That is its scope. The below line of code will break if you try and run it:
//console.log(message);

let user = "Daniel";
console.log(user);
// We can change the value of user because we declared it using "let":
user = "Jacob";
console.log(user);

const username = "Tiara";
console.log(username);

// The value of username cannot be changed because we declared username using "const." The below line of code will break if you try to run it.
//username = "Erich";
console.log(username);

// FINAL THOUGHTS
// Avoid using "var" because it is so powerful it can cause lots of problems. You may have varriables with the same name in different files that are overwritting eachother. From here on out use only "let" and "const."