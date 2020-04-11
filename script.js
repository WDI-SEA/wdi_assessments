document.getElementById('submit').addEventListener('click', (e) => {
    console.log('submitting your number now!')
    //console.log(document.getElementById('user-input').value)
let startValue = parseInt(document.getElementById('user-input').value)
let resultValue = startValue + parseInt(document.getElementById("display-result").textContent)

document.getElementById('display-result').textContent = ((resultValue - 32) / (1.8) + ' C');    
});