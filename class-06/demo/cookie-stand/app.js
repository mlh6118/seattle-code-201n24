'use strict';

// object for my Seattle Store
const seattleStore = document.getElementById('seattleList');
let hours = ['6 a.m.', '7 a.m.', '8 a.m.'];

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
    // your code goes here
  }
}

console.log(seattle.getRandomCustomers());
