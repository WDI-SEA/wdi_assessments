var sumInput = document.getElementById("count-input");
var plusButton = document.getElementById("plus-button");
var minusButton = document.getElementById("minus-button");
var valueInput = document.getElementById("value-input")
var numberValue = valueInput.value
var total = 0;

plusButton.addEventListener("click", additionClick)
minusButton.addEventListener("click", subractionCLick) 
valueInput.addEventListener("change", function(e) {
    numberValue = e.target.value
})
    
function additionClick() {
    total += parseInt(numberValue)
    sumInput.value = total
    console.log(total)
}

function subractionCLick() {
    total -= parseInt(numberValue)
    sumInput.value = total
    console.log("hello")
}
