//DOM references

let displayDiv = document.getElementById('count-display')

let plusBtn = document.getElementById("plus-btn");
let minusBtn = document.getElementById("minus-btn");

let numInput = document.getElementById("number")



//access the input's value

//on click for + button, add the input to the displayResult 


//on clikc for - button, subtract the input from the displayResult


var displayResult = 0;



function add() {
//  console.log(parseInt(numInput.value))
    let convertedNum = parseInt(numInput.value)

    displayResult += convertedNum 

    console.log(displayResult)

    updateDisplay()
}


plusBtn.addEventListener('click', add)

