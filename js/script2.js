function calcule(){
    var poids =parseFloat(document.getElementById("in").value);

    var taille =parseFloat(document.getElementById("ih").value);

    var imc;
    var msg = "";

    if (document.getElementById("r-cm").checked==true){
        taille = taille/100;

        imc = (poids/taille**2).toFixed(2);
    }
    else{
        imc = (poids/Math.pow(taille,2)).toFixed(2);
    }

    if (imc<18.5){
        msg = "Insuffisance poderale"
    }
    else{
        if (imc < 24.9) {
            msg = "Poids normal"
        }
        else{
            if (imc<29.9){
                msg = "Surpoids"
            }
            else{
                msg = "Obesite"
            }
        }
    }

    document.getElementById("lbh").innerHTML = imc;
    document.getElementById("lbn").innerHTML = msg;
}

function clear_imc(){
    document.getElementById("in").value = "";
    document.getElementById("ih").value = "";
    document.getElementById("lbh").innerHTML = "0";
    document.getElementById("lbn").innerHTML = "--";
}