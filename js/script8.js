function calcule(){
    const $name = document.querySelector("#client").value;
    var gen = document.getElementById("gn").value;
    var prix;

    if (document.getElementById("i3").checked==true){
        if (gen==="12"){
            prix = 3000
        }
        if (gen==="10"){
            prix = 2600
        }
    }

    if (document.getElementById("i5").checked==true){
        if (gen==="12"){
            prix = 3700
        }
        if (gen==="10"){
            prix = 3100
        }
    }

    if (document.getElementById("i7").checked==true){
        if (gen==="12"){
            prix = 4600
        }
        if (gen==="10"){
            prix = 4000
        }
    }

    if (document.getElementById("check").checked==true){
        prix = prix*0.85
    }

  
    document.getElementById("lbprix").innerHTML = prix;
    document.getElementById("lbcli").textContent = $name;

}

function clear_form(){
    document.getElementById("client").value ="";
    document.getElementById("gn").value = "";
    document.getElementById("lbprix").innerHTML = "--";
    document.getElementById("lbcli").innerHTML = "--";
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
        radioButton.checked = false;
    });
}