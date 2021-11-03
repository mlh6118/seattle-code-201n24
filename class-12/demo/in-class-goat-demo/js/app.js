'use strict'

// Global variables:
const myContainer = document.querySelector('section');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

let allGoats = [];
let clicks = 0;
const clicksAllowed = 15;
let indexArray = [];

function Goat(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `images/${name}.${fileExtension}`;
  this.likes = 0;
  this.views = 0;
  allGoats.push(this);
}

new Goat('cruisin-goat', 'png');
new Goat('float-your-goat');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');

function selectRandomGoat() {
  return Math.floor(Math.random() * allGoats.length);
}
console.log(selectRandomGoat());

function renderGoat() {

  // let goat2 = selectRandomGoat();
  // // array method .includes()
  // while (goat1 === goat2) {
  //   goat2 = selectRandomGoat();
  // }

  // more random numbers that are compared against each other 4
  while (indexArray.length < 4) {
    let ranNum = selectRandomGoat();
    if (!indexArray.includes(ranNum)) {
      indexArray.push(ranNum);
    }
  }
  console.log(indexArray);

  // pop (takes off the end) / unshift (adds to the beginning)
  // push (adds to the end) / shift (takes off the beginning)

  let goat1 = indexArray.shift();
  let goat2 = indexArray.shift();

  image1.src = allGoats[goat1].src;
  image1.alt = allGoats[goat1].name;
  allGoats[goat1].views++;
  image2.src = allGoats[goat2].src;
  image2.alt = allGoats[goat2].name;
  allGoats[goat2].views++;
}

function handleGoatClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let clickedGoat = event.target.alt;
  // array method .includes()
  for (let i = 0; i < allGoats.length; i++) {
    if (clickedGoat === allGoats[i].name) {
      allGoats[i].likes++;
      break;
    }
  }
  renderGoat();
  if (clicks === clicksAllowed) {
    myContainer.removeEventListener('click', handleGoatClick);
    renderChart();
    // myButton.addEventListener('click', handleButtonClick);
    // myButton.className = 'clicks-allowed';
  }
}

function renderChart() {
  let goatNames = [];
  let goatLikes = [];
  let goatViews = [];
  for (let i = 0; i < allGoats.length; i++) {
    goatNames.push(allGoats[i].name);
    goatLikes.push(allGoats[i].likes);
    goatViews.push(allGoats[i].views);
  }
  console.log(goatLikes);

  const data = {
    labels: goatNames,
    datasets: [{
      label: 'Likes',
      data: goatLikes,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)'
      ],
      borderWidth: 1
    },
    {
      label: 'Views',
      data: goatViews,
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgb(255, 159, 64)'
      ],
      borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  let canvasChart = document.getElementById('myChart');
  const myChart = new Chart(canvasChart,config);
}

// function handleButtonClick() {
//   for (let i = 0; i < allGoats.length; i++) {
//     let li = document.createElement('li')
//     li.textContent = `${allGoats[i].name} had ${allGoats[i].views} view and was clicked ${allGoats[i].likes} times.`;
//     results.appendChild(li);
//   };
// }

renderGoat();

myContainer.addEventListener('click', handleGoatClick);