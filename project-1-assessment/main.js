/* -------------- DOM References -------------- */
let result = document.getElementById("result");
let number = document.getElementById("number");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

number.value = 1;
result.value = 0;

/* --------------- Functions ---------------- */
// source: I had to look up how to make .value appear as a number, not a string. https://stackoverflow.com/questions/14496531/adding-two-numbers-concatenates-them-instead-of-calculating-the-sum
function add() {
    result.value = +result.value + +number.value;
    result.innerText = result.value;
    negative();
}

function subtract() {
    result.value = +result.value - +number.value;
    result.innerText = result.value;
    negative();
}

function negative() {
    if (result.value < 0) {
        result.style.color = "red";
    } else {
        result.style.color = "black";
    }
}

/* --------------- Event Listeners ---------------*/
plus.addEventListener('click', add);

minus.addEventListener('click', subtract);