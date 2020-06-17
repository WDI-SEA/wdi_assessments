window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  // GLOBAL VARIABLES
  let counter = 0;

  // DOM VARIABLES
  let addBtn = document.getElementById("add");
  let subtractBtn = document.getElementById("subtract");
  let countDisplay = document.getElementById("counter");

  countDisplay.innerText = `${counter}`;

  addBtn.addEventListener("click", () => {
    counter += 1;
    // console.log(counter);
    countDisplay.innerText = `${counter}`;
  });

  subtractBtn.addEventListener("click", () => {
    if (counter === 0) {
      return;
    } else {
      counter -= 1;
      // console.log(counter);
      countDisplay.innerText = `${counter}`;
    }
  });
});
