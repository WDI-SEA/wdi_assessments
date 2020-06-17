
// 1) Declare Variables and DOM Elements 

let btnAdd = document.querySelector('#add');
let btnSubtract =document.querySelector('#subtract');
let input = document.querySelector('input');
let output = document.querySelector('output');



// 2) Add Click Event listeners to the Buttons 

btnAdd.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;

});

    btnSubtract.addEventListener('click', () =>{
        input.value = parseInt(input.value) - 1;

    });


// 3)   Display the output 

     function display() {
        document.getElementById("output").innerHTML = input.value;
      }





// Hover Text Change of Buttons from + to - and - to +.    --------------- Note I could not get this to work even if the code looks correct. ????

btnAdd.addEventListener('mouseover', () =>{
    this.textContent = "-"
});


btnAdd.addEventListener('mouseout', () =>{
        this.textContent = "+";
});




    // Change Color to red    ------- Note I could not get this to work even when the logical code looks fully correct ????

function changeColor() {

    if (input.value < 0) {
        return document.getElementById("output").style.color = "red"
    } else { 
       return document.getElementById("output").style.color = "black"
    };
    
    return changeColor;
};






