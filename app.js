//define variables//
let buttons = document.getElementsByClassName("button")
let numberToConvert = document.getElementById("numberToConvert")
let count = document.getElementById("count")
let clickedButton = null

//determine which button was clicked//
for (i=0; i<2; i++) {
    buttons[i].addEventListener("click", function (e) {
        clickedButton = e.target.id;
        calculate();
    })
};

//calculate//
function calculate() {
    if (clickedButton === "oneMore") {
        count.innerHTML = parseInt(numberToConvert.value) + parseInt(count.innerHTML);
    } else if (clickedButton === "oneLess") {
        count.innerHTML = parseInt(count.innerHTML) - parseInt(numberToConvert.value);
    };
    if (parseInt(count.innerHTML) < 0) {
        count.style.color = "red";
    };
};


