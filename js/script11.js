function solutions(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);

    var delta;
    delta = b**2-4*a*c

    var inter;
    var x1;
    var x2;
    if(delta>0){
        inter = "il existe 2 solution"
        x1 = (-b)-(Math.sqrt(delta)) / (2*a)
        x2 = (-b)+(Math.sqrt(delta)) / (2*a)
    }
    if(delta===0){
        inter = "il existe 1 solution"
        x1 = (-b) / (2*a)
        x2 = ""
    }
    else if (delta<0){
        inter = "n'admer aucun solution"
        x1 = ""
        x2 = ""
    }

    document.getElementById("delta").innerHTML = delta;
    document.getElementById("inter").innerHTML = inter;
    document.getElementById("x1").innerHTML = x1;
    document.getElementById("x2").innerHTML = x2;
}

function clear_eq(){
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("delta").innerHTML = "";
    document.getElementById("inter").innerHTML = "";
    document.getElementById("x1").innerHTML = "";
    document.getElementById("x2").innerHTML = "";
}