const numDisplay = document.getElementById("num-display");
const plus = document.getElementById("plus");
const minus = document.getElementById('minus');
const input = document.getElementById("user-num");

//this works only in console
let x = parseInt(input.value);
let clickValue = 0;
let numValue = x + clickValue;

//keyup function
input.addEventListener("keyup", function (){
    x = parseInt(input.value);
    numValue = x + clickValue;
    numDisplay.innerText = numValue;
})

//event listeners for the plus and minus buttons
plus.addEventListener("click", function (){
    clickValue++;
    if(numValue < 0){
        numDisplay.style.color = "red";
    }else{
        numDisplay.style.color = "black";
    }
    numValue = x + clickValue;
    numDisplay.innerText = numValue;
    return numValue;
})

minus.addEventListener("click", function (){
    clickValue--;
    if(numValue < 0){
        numDisplay.style.color = "red";
    }else{
        numDisplay.style.color = "black";
    }
    numValue = x + clickValue;
    numDisplay.innerText = numValue;
    return numValue;
})

