
// get a DOM element
let myForm = document.getElementById('form');

function handleSubmit(event) {
  // console.log(event);
  event.preventDefault();
  let userFirstName = event.target.firstname.value;
  console.log(typeof userFirstName); // values come as strings
  let userLastName = event.target.lastname.value;
  console.log(userFirstName, userLastName);
}

myForm.addEventListener('submit', handleSubmit);
