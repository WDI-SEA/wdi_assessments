const numDisplay = document.getElementById("num-display");
const plus = document.getElementById("plus");
const minus = document.getElementById('minus');
const input = document.getElementById("user-num");

//this works only in console
//declared this as this but there is no value yet
let numValue = 0;
let userNum = 0;

//keyup function
input.addEventListener("keyup", function (){
    userNum = parseInt(input.value);
})

//event listeners for the plus and minus buttons
plus.addEventListener("click", function (){
    numValue += userNum
    numDisplay.innerText = numValue;
    if(numValue < 0){
        numDisplay.style.color = "red";
    }else{
        numDisplay.style.color = "black";
    }
    return numValue;
})

minus.addEventListener("click", function (){
    numValue -= userNum;
    numDisplay.innerText = numValue
    if(numValue < 0){
        numDisplay.style.color = "red";
    }else{
        numDisplay.style.color = "black";
    }
    return numValue;
})

