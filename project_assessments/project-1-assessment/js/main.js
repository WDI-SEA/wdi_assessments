//Global elements/DOM elements
var input = document.getElementById('input')
var plusBtn = document.getElementById('plus')
var minusBtn = document.getElementById('minus')
var output = document.getElementById('output')
let number = 0;

 //set input to 1
 document.getElementById('input').innerHTML = "1";

 //listen for  button clicked
plusBtn.addEventListener('click', function(e) {
    //perform calculation based on entry in input box
    number =  +number + +input.value;
    //update the result on the page
    output.innerHTML = number;
})
//repeat function for minus button
minusBtn.addEventListener('click', function(e){
    number = +number - +input.value;
    output.innerHTML = number;
})
