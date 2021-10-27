'use strict';

// 2D arrays

let numberArray = [
  // 0/0. 0/1.  0/2
  [1900, 1920, 1929],
  // 1/0. 1/1. 1/2
  [1894, 1921, 1965],
  // 2/0  2/1.  2/2
  [1925, 1946, 2014],
  [1920, 1940, 1984]
];


for (let i = 0; i < numberArray[i].length; i++) {
  for (let j = 0; j < numberArray[j].length; j++) {
    console.log(`numberArray[${j}][${i}]: `, numberArray[j][i]);
    // do something
  }
}


'use strict';
             //. 0.     1.       2.       3          4.        5.    6
let starWars = ['Luke', 'Han', 'Leia', 'Chewie', 'Obi-Wan', 'Yoda', 'Lando', 'R2'];

// let forceBeWithYou = function() {
//   for (let i = 0; i < starWars.length; i++) {
//     for (let j = 0; j < starWars.length; j++) {
//       if (i == j + 1) {
//         console.log(i, j);
//         console.log(`${starWars[j]} say 'May the Force be with you!' to ${starWars[i]}.`);
//       }
//     }
//   }
// };

let forceBeWithYou = function() {
  for (let i = 0; i < starWars.length; i++) {
    if (i !== starWars.length - 1) {
      console.log(`${starWars[i]} say 'May the Force be with you!' to ${starWars[i + 1]}.`);
    } else {
      console.log(`${starWars[i]} say 'May the Force be with you!' to ${starWars[0]}.`);
    }
  }
};
console.log(starWars.length);
forceBeWithYou();