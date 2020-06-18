
    // let num = document.getElementById("count").value;
    // let num = parseInt(count);
    // let result = document.getElementById("result");
    // console.log(count);
    
    function plus(){
        let num = document.getElementById("count").value;
        num ++ ;
        console.log(num);
        if (num > 0 ) {
            document.getElementById("result").innerHTML = num;
            document.getElementById("result").style.color = "blue";
            }
            else {
                document.getElementById("result").innerHTML = num;
                document.getElementById("result").style.color = "red";
            }
    }

    function minus(){
        let num = document.getElementById("count").value;
        num -- ;
        console.log(num);
        if (num > 0 ) {
        document.getElementById("result").innerHTML = num;
        document.getElementById("result").style.color = "blue";
        }
        else {
            document.getElementById("result").innerHTML = num;
            document.getElementById("result").style.color = "red";
        }
    }
