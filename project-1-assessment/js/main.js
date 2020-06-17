// Create the variables needed
let counter = 0;
let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let counterDisplay = document.getElementById("counter");
let userNumber = document.getElementById("amount");
 


// Functions and there on click events
const updateCounter = () => {
  counterDisplay.innerText = `${counter}`;
  if (counter < 0) {
    counterDisplay.style.color = "red";
  } else {
    counterDisplay.style.color = "black";
  }
}

const add = () => {
  counter += parseInt(userNumber.value);
  updateCounter();
}

const subtract = () => {
  counter -= parseInt(userNumber.value);
  updateCounter();
}

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
