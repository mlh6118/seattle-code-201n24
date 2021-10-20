'use strict';

// object for my Seattle Store
const seattleStore = document.getElementById('seattleList');
let hours = ['6 a.m.', '7 a.m.', '8 a.m.'];

/*
  What does this do:
    Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  Let's say we have a the following min and max values
    min 6
    max 15
  So there are 10 possible values that are between 6 and 15
  including 6 and 15 as possible options. 
    1, 2, 3 ,4, 5, // 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 //

  But if we subtract the min from the max it only equals 9
    15 - 6 = 9 
  We have to add 1 to that difference to get the number 
    of possible options between our min and max. So we ...  
      9 + 1 = 10
      Let's call 10 our range

  math.random() will give us a random decimal 
    We need to multiply it by our range to get a number
      that is in our range (between 1 & 10);
        math.random() * 10 
    ex. a random number: 2.34
    But 2.34 is not between our min and max values of 6 and 15
    Add that random number (2.34) to our min value (6) to get a  
      number in the range we are looking for:
        2.34 + 6 = 8.34

  But math.random() will usually return values with decimals.       
  let's say we have a random number of 2.34
  We can use other methods to get an integer
    Math.floor() = 2 (rounds any decimal down)
    Math.ceil() = 3 (rounds any decimal up)
    Math.round() = 2 (rounds up or down, depending which is closer)
*/

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHourArray: [],
  // between min and max * avg
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getCookieSalesPerHour: function() {
     // calculate the cookies sold for all 14 hours
     // write a for loop that uses the length of the hours away in that loop

    // Get the number of customers this hour
    let customersThisHour = this.getRandomCustomers();
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    // that value of total cookies sold that hour on to our array
    this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    console.log(this.cookiesSoldEachHourArray);


  },
  renderTheList: function() {
    this.getCookieSalesPerHour();
    // code that will render the lists to the page
    // render the LIs inside our UL
  }
}

seattle.renderTheList();


instructor.calcMultiplesOfFive = function() {
  for (let i = 0; i < this.faveNumbers.length; i++) {
    this.multiplesOfFive.push(this.faveNumbers[i] * 5);
  }
}