//DOM references

let displayDiv = parseInt(document.getElementById('count-display').innerText)

let plusBtn = document.getElementById("plus-btn");
let minusBtn = document.getElementById("minus-btn");

let numInput = parseInt(document.getElementById("number").value)



//access the input's value

//on click for + button, add the input to the display

//on clikc for - button, add the input to the display

var resultAdd = 0;

function add() {
   console.log(displayDiv)
   console.log(numInput)
   resultAdd =  numInput + displayDiv;
    console.log(resultAdd)
//    var x = document.createElement("p");
//    x.textContext = parseInt(displayDiv);
//    document.getElementById('count-display').append(x)
}



function mathBot() {
    plusBtn.addEventListener('click', add)

}

mathBot()