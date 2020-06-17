const numDisplay = document.getElementById("num-display");
const userInput = document.getElementById("user-num");
const plus = document.getElementById("plus");
const minus = document.getElementById('minus');

let numValue = 0

//need a function to add the user input value
userInput.addEventListener("keyup", function(){
    numDisplay.innerText = numValue;
    numValue = userInput.value;
    return numValue;
})

//event listeners for the plus and minus buttons
plus.addEventListener("click", function (){
    numDisplay.innerText = numValue;
    numValue++;
    if(numValue < 0){
        numDisplay.style.color = "red";
    }else{
        numDisplay.style.color = "black";
    }
    return numValue;
})

minus.addEventListener("click", function (){
    numDisplay.innerText = numValue;
    numValue--;
    if(numValue < 0){
        numDisplay.style.color = "red";
    }else{
        numDisplay.style.color = "black";
    }
    return numValue;
})

