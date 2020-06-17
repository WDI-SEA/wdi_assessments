
var count = 0

document.getElementById("minus").addEventListener("click", () =>{
    console.log("hi")
    let decrement = document.getElementById("numInput").value
    let minus = JSON.parse(decrement)
    console.log(minus)
    count -= minus
    console.log(count)
    document.getElementById("contentDisplay").innerHTML = count
   
})

document.getElementById("plus").addEventListener("click", () =>{
    console.log("no")
    let increment = document.getElementById("numInput").value
    let add = JSON.parse(increment)
    console.log(add)
    count += add
    document.getElementById("contentDisplay").innerHTML = count
})

function displayChanger(){
    docum
}