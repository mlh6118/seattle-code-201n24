'use strict';

// What is an array?
// -A collection
// -A list
// -A container that holds value
// -A data structure

                  // 0,       1,      2,     3,       4,    5

let parksNRec = ['Leslie', 'April', 'Ron', 'Andy', 'Ann', 'Tom'];

//console.log(parksNRec[3]);

let waffles = ['JJ\'s', true, [228, 343], 'bacon'];

//console.log(parksNRec.length);

//parksNRec[6] = 'Donna';
//parksNRec[parksNRec.length] = 'Donna';

parksNRec.push('Donna');
parksNRec.push('Tammy', 'Chris', 'Jerry');

// For loops

// for (condition) {
//   // Do this
// }

// //             i < 6
for (let i = 0; i < parksNRec.length; i++) {
  console.log(parksNRec[i]);
  if (parksNRec[i] !== 'Ron') {
    console.log(`Hello ${parksNRec[i]}`);
    //console.log('Hello ' + parksNRec[i]);
  } else {
    console.log(`${parksNRec[i]}!!!!`);
  }
}

// i = i + 1
// i++

//       // Instantiate, evaluate, increment
// for (let i = 0; i < parksNRec.length; i++) {
//   if (parksNRec[i] === 'Ron') {
//     console.log(`${parksNRec[i]}!!!!`);
//   } else if (parksNRec[i] === 'Chris')  {
//     console.log(`I'm ${parksNRec[i]}`);
//   } else {
//     console.log(`Hello ${parksNRec[i]}`);
//   }
// }

// Template literal format:
//`${}`

//// NOTES
// Array Methods:
// .push();
// .shift();
//
// Array Properties:
// .length


// for (let i = 0; i < parksNRec.length; i++) {
//   console.log(i);

//   if (i === 4) {
//     console.log("It does!");
//   } else {
//     console.log('It was else');
//   }
// }

//// Sudo code
// if (condition is true ) {
//   // do this
// } else if (if this other condition is true) {
//   // do this
// } else {
//   // if none of the other things above are true do this
// }



// for (let i = 0; i < parksNRec.length; i++) {
//   console.log(parksNRec[i]);
//   if (parksNRec[i] !== 'Ron' && parksNRec[i] !== 'Chris') {
//     console.log(`Hello ${parksNRec[i]}`);
//     //console.log('Hello ' + parksNRec[i]);
//   } else if (parksNRec[i] === 'Chris')  {
//     console.log(`I'm ${parksNRec[i]}`);
//   } else {
//     console.log(`${parksNRec[i]}!!!!`);
//   }
// }