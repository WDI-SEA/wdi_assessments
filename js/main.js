/*----- DOM REFS -----*/
let currentCount = document.getElementById('current-count')
let plusBtn = document.getElementById('plus-btn')
let minusBtn = document.getElementById('minus-btn')
let numInput = document.getElementById('num-input')

/*----- VARIABLES -----*/
let count = 0

/*----- FUNCTIONS -----*/

const incrementNum = () => {
    count = count + Number(numInput.value)
    currentCount.innerText = count
    if (count >= 0) {
        currentCount.style.color = 'black'
    }
}
plusBtn.addEventListener('click', incrementNum)

const decrementNum = () => {
    count = count - Number(numInput.value)
    currentCount.innerText = count
    if (count < 0) {
        currentCount.style.color = 'red'
    }
}
minusBtn.addEventListener('click', decrementNum)