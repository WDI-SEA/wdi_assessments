
let final = 0;


let input = document.getElementById("in");

let full = 0;

input.addEventListener("change", update)
function update(e){
    full = e.target.value
}

document.getElementById("add").addEventListener("click", function(e){
    final = final + parseInt(input.value)
    document.getElementById("number").innerHTML = final;
    
    return
});

document.getElementById("sub").addEventListener("click", function(e){
     final = final - parseInt(input.value)
     document.getElementById("number").innerHTML = final;
     
     return
});




