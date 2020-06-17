let addButton
let subButton
let input
let display

addButton = document.getElementById('add-button')
subButton = document.getElementById('sub-button')
input = document.getElementById('user-input')
display = document.getElementById('display')

document.addEventListener('click', (e) => {
    let count = display.innerText
    let value = input.value
    let sum = parseInt(count) + parseInt(value)
    let difference = parseInt(count) - parseInt(value)
   
    if (e.target.id == 'add-button') {
        display.textContent = sum
        //display the count in black if it is a positive value
        if (display.textContent > 0) {
            display.style.color = '#000'
        }
    }
    if (e.target.id == 'sub-button') {
        display.textContent = difference
        //display the count in red if it is a negative value
        if (display.textContent < 0) {
            display.style.color = '#f00'
        }
    }
})