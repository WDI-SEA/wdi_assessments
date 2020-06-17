let count = document.getElementById("counter");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let userInput = document.getElementById("input");
let value = 0;


plus.addEventListener("click",add);
minus.addEventListener("click",subtract);

function add(){
    value += parseInt(userInput.value);
    count.innerText = value;

    if (value < 0){
        count.style.color = "red";
    } else {
        count.style.color = "black";
    }
}

function subtract(){
    value -= parseInt(userInput.value);
    count.innerText = value;

    
    if (value < 0){
        count.style.color = "red";
    } else {
        count.style.color = "black";
    }
}
