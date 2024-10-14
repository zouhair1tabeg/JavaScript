function calcule(){
    var ch = document.getElementById("opt").value;
    var prix;

    if(document.getElementById("standar").checked==true){
        if(ch==="Pixel 4"){
            prix = 5000
        }
        else if(ch==="Pixel 5"){
            prix = 5900
        }
        else{
            prix = 6500
        }
    }
    if(document.getElementById("mini").checked==true){
        if(ch==="Pixel 4"){
            prix = 4600
        }
        else if(ch==="Pixel 5"){
            prix = 5000
        }
        else{
            prix = 6000
        }
    }
    if(document.getElementById("pro").checked==true){
        if(ch==="Pixel 4"){
            prix = 5500
        }
        else if(ch==="Pixel 5"){
            prix = 6400
        }
        else{
            prix = 7100
        }
    }


    document.getElementById("prix").innerHTML = prix;
}

function clear_ph(){
    document.getElementById("prix").innerHTML = "--";
}