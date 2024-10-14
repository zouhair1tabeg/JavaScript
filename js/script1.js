// enters
function calculer(){
        
    var a = parseFloat(document.getElementById("input1").value);

    var b = parseFloat(document.getElementById("input2").value);

    // Traitement

    var s ;

    s = a + b

    // sortie

    document.getElementById("label1").innerHTML = s;
}

