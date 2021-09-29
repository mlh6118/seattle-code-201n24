'use strict';


/*
  && — the "logical and"
  || - the "logical or" (double pipes)
  ! - the "logical not"
*/

let userAnswer1 = prompt("Are Strawberries Red? Yes or No?").toLowerCase();

if (userAnswer1 === 'yes'  || userAnswer1 === 'y') {
  alert('You answered correctly!');
} else {
  alert('Sorry, that\'s incorrect.');
}