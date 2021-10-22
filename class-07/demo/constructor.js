'use strict';

// let oneStudent = {
//   name: 'Steve',
//   codeClass: 201,
//   pronouns: 'they, them',
//   onLine: true,
//   school: "Code Fellows",
// };

let studentArray = [];

// Constructor function
function Student(name, pronouns, codeClass) {
  // "this" refers to the instance of student that WILL BE created, it does not refer to the constructor
  this.name = name;
  this.codeClass = codeClass;
  this.pronouns = pronouns;
  this.onLine = true;
  this.introduce = function() {
    console.log(`Hi my name is ${this.name}. My pronouns are ${this.pronouns}. I am in the ${this.codeClass} class.`);
  }
  studentArray.push(this);
}

Student.prototype.hairColor = 'black';
Student.prototype.sayHi = function() {
  console.log('hi');
}

// instantiate a Student object from a constructor
// these are instances of Student
let juan = new Student('Juan', 'he, him', 201);
let sara = new Student('Sara', 'she, her', 301);
let jessica = new Student('Jessica', 'she, her', 201);
let ron = new Student('Ron', 'he, him', 201);
let steve = new Student('Steve', 'they, them', 201);




// juan.hairColor = 'black';
// console.log(juan);
// console.log(sara.hairColor);
// console.log(juan.hairColor);

// console.log(juan);
// console.log(sara);
// juan.introduce();
// sara.introduce();

console.log(studentArray);

for (let i = 0; i < studentArray.length; i++) {
  studentArray[i].sayHi();
}