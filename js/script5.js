function calcule_tav(){
    var hp = parseInt(document.getElementById("hp").value);
    var tav ;

    if (document.getElementById("ess").checked==true){
        if (hp==5){
            tav = 650;
        }
        if (hp=6){
            tav = 750;
        }
        if (hp==7){
            tav = 950;
        }
        else{
            if (hp=>8){
                tav = 1100;
            }
        }
    }
    else{
        if (hp==5){
            tav = 600;
        }
        if (hp=6){
            tav = 700;
        }
        if (hp==7){
            tav = 900;
        }
        else{
            if (hp=>8){
                tav = 1000;
            }
        }
    }
    document.getElementById("tav").innerHTML = tav;
}


function clear_tav(){
    document.getElementById("hp").value = "";
    document.getElementById("tav").innerHTML = "--";
}