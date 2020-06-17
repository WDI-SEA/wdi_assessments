document.addEventListener("DOMContentLoaded", function(){
    let plusButton = document.getElementById("plus-button")
    let minusButton = document.getElementById("minus-button")
    let userInput = document.getElementById("user-input")
    let resultNumber = document.getElementById("result-number")

    plusButton.addEventListener("click", addNumber)
    minusButton.addEventListener("click", subtractNumber)

    function addNumber() {
        let a = parseInt(resultNumber.innerText)
        let b = parseInt(userInput.value)
        resultNumber.innerHTML =  a + b

        if (a + b < 0) {
            resultNumber.style.color = "red"
        } else {
            resultNumber.style.color = "black"
        }
    }

    function subtractNumber() {
        let a = parseInt(resultNumber.innerText)
        let b = parseInt(userInput.value)
        resultNumber.innerHTML = a - b

        if (a - b < 0) {
            resultNumber.style.color = "red"
        } else {
            resultNumber.style.color = "black"
        }
    }
})