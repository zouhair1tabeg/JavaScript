function calcule(){
    var prsn = document.getElementById("client").value;
    var ch = document.getElementById("voiture").value;
    var nj = document.getElementById("nj").value;
    var prix;

    if (ch==="Honda Civic"){
        prix = 300*nj
    }
    else if(ch==="Renault megane"){
        prix = 360*nj
    }
    else {
        prix = 400*nj
    }

    if (document.getElementById("check").checked==true){
        prix = prix*0.90
    }

    document.getElementById("nclient").textContent = prsn;
    document.getElementById("prix").innerHTML = prix;
    
}

function clear_lc(){
    document.getElementById("nclient").innerHTML = "--";
    document.getElementById("prix").innerHTML = "--";
}