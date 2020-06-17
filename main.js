document.addEventListener('DOMContentLoaded', function() {

let resultDiv = document.getElementById('output')
let minusBtn  = document.getElementById('minus')
let plusBtn = document.getElementById('plus')
let resultStart = 0
let clickCount = 0


minusBtn.addEventListener('click', function(e) {
    let userInput = document.getElementById('numberIn').value
    resultDiv.innerText = (resultStart - userInput)
    console.log(resultDiv)
    clickCount++
    if (clickCount > 1) {
        resultDiv.innerText = (resultDiv.innerText - userInput)
        clickCount++
    }
})


plusBtn.addEventListener('click', function(e) {
    let userInput = document.getElementById('numberIn').value
    resultDiv.innerText = (resultStart + userInput)
    console.log(resultDiv)
    clickCount++
    if (clickCount > 1) {
        resultDiv.innerText = (resultDiv.innerText + userInput)
        clickCount++
    }


})

})