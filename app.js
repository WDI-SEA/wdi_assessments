
let final = 0;


let input = document.getElementById("in");

let full = parseInt(input.value)









document.getElementById("add").addEventListener("click", function(e){
    final = final + full
    document.getElementById("number").innerHTML = final;
    
    return
});

document.getElementById("sub").addEventListener("click", function(e){
     final = final - full;
     document.getElementById("number").innerHTML = final;
     
     return
});




