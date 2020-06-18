// --------------> DOM REFERENCES <-----------------------
let displayNum = document.getElementById('count-display');

let plusButton = document.getElementById('plus-btn');
let minusButton = document.getElementById('minus-btn');

let inputField = document.getElementById('number');

var result = 0;




//access the input's value
function add() {
    // console.log(parseInt(inputField.value));
    let numberInput = parseInt(inputField.value)

    result += numberInput;
    // console.log(result)
    
    // console.log(displayNum.innerText)
    displayNum.innerText = result
}

function minus() {
    let numberInput = parseInt(inputField.value)

    result -= numberInput;
    // console.log(result)
    
    // console.log(displayNum.innerText)
    displayNum.innerText = result
}


// -------------------> CLICK EVENTS <------------------

//on click for + button, add the input to the displayResult 
//on clikc for - button, subtract the input from the displayResult

plusButton.addEventListener('click', add)
minusButton.addEventListener('click', minus)