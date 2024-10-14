function calcule(){
    var km = parseInt(document.getElementById("inp").value);
    var prix;

    if (document.getElementById("normal").checked==true){
        if (km<=10){
                prix = 50
            }
        else{
                prix = 70
            }
    }
    
    else{
        if (km<=10){
                prix = 80
            }
            else{
                prix = 100
            }
    }

    document.getElementById("prix").innerHTML = prix;
}

function clear_prix(){
    document.getElementById("inp").value = "";
    document.getElementById("prix").innerHTML = "";
}