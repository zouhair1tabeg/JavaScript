function calcule(){
    var n = document.getElementById("nom").value;
    var p = document.getElementById("prenom").value;
    var c = n + " "+ p
    var d = document.getElementById("dest").value;
    var prix;

    if (document.getElementById("standar").checked==true){
        if (d === "paris"){
            prix = 1500
        }
        if (d === "new york"){
            prix = 4000
        }
        if (d === "abidjan"){
            prix = 4900
        }
        if (d === "caire"){
            prix = 3800
        }
    }

    else{
        if (d === "paris"){
            prix = 2500
        }
        if (d === "new york"){
            prix = 6000
        }
        if (d === "abidjan"){
            prix = 5500
        }
        if (d === "caire"){
            prix = 4800
        }
    }

    if (document.getElementById("ar").checked==true){
        prix = prix*2
    }

    document.getElementById("client").innerHTML = c;
    document.getElementById("prix").innerHTML = prix;
}

function clear_form(){
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("dest").value = "";
    document.getElementById("client").innerHTML = "--";
    document.getElementById("prix").innerHTML = "--";
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
        radioButton.checked = false;
    });
}