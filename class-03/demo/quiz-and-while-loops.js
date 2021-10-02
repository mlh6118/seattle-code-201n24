'use strict';

/* Add a 7th question that has multiple possible correct answers that are stored in an array.
Give the user 6 attempts to guess the correct answer.
The guesses will end once the user guesses a correct answer or they run out of attempts.
Display all the possible correct answers to the user.
Consider using a loop of some sort for this question.
*/

let attemptsRemaining = 6;
let answeredCorrectly = false;
let score = 0;

// score++

// variable array of answers
let favColors = ['blue', 'cream', 'rose'];

// variable to store the user input
// user is prompted for a guess
let userResponse = 'blue';

// while (attemptsRemaining && !answeredCorrectly) {
//   // console.log("I'm inside the while loop");
//   // console.log(attemptsRemaining);
//   // the user input is evaulated

//   for (let i = 0; i < favColors.length; i++) {
//     // console.log(favColors[i]);
//     if (userResponse === favColors[i]) {
//       console.log("that's correct!");
//       answeredCorrectly = true;
//     } 
//   }


//   // alert the user if they were right
//   // alert the user how many attemps they have left
//   console.log(`You have ${attemptsRemaining - 1} attempts remaining`);
//   attemptsRemaining--;
// }

// Is that value in my array of answers?

// Does the user have any more attempts to guess


// Look up Do Whiles


let attempts = 6;
for (let i = 0; i < attempts; i++) {
  console.log(i);
  for (let j = 0; j < favColors.length; j++) {
    // console.log(favColors[i]);
    if (userResponse === favColors[j]) {
      console.log("that's correct!");
    } 
  }
}