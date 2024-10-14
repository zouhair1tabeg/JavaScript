var Nom = document.getElementById("nom");
var Prenom = document.getElementById("prenom");
var CIN = document.getElementById("cin");
var PC = document.getElementById("opt");
var Livraison = document.getElementById("check");
var Envoyer = document.getElementById("envoyer");
var Clear = document.getElementById("clear");
var lbl1 = document.getElementById("ob1");
var lbl2 = document.getElementById("ob2");
var lbl3 = document.getElementById("ob3");
var lbl4 = document.getElementById("ob4");

Envoyer.addEventListener("click" , function(){
    document.getElementById("rnom").innerHTML = `Nom: ${Nom.value}`;
    document.getElementById("rprenom").innerHTML = `Prenom: ${Prenom.value}`;
    document.getElementById("rcin").innerHTML = `CIN: ${CIN.value}`;
    document.getElementById("rpc").innerHTML = `Lap Top: ${PC.value}`;

    if(Nom.value===''){
        lbl1.style.visibility = "visible";
    }
    else{
        lbl1.style.visibility = "hidden";
    }

    if(Prenom.value===''){
        lbl2.style.visibility = "visible";
    }
    else{
        lbl2.style.visibility = "hidden";
    }

    if(CIN.value===''){
        lbl3.style.visibility = "visible";
    }
    else{
        lbl3.style.visibility = "hidden";
    }

    
    if(PC.value===''){
        lbl4.style.visibility = "visible";
    }
    else{
        lbl4.style.visibility = "hidden";
    }
});

Clear.addEventListener("click" , function(){
    Nom.value = '';
    Prenom.value = '';
    CIN.value = '';
    document.getElementById("rnom").innerHTML = '';
    document.getElementById("rprenom").innerHTML = '';
    document.getElementById("rcin").innerHTML = '';
    document.getElementById("rpc").innerHTML = '';
    lbl1.innerHTML = '';
});