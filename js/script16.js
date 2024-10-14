var Nom = document.getElementById("nom");
var Prenom = document.getElementById("prenom");
var Email = document.getElementById("email");
var Niveau_detude = document.getElementById("opt");
var Envoyer = document.getElementById("btn1");
var Clear = document.getElementById("btn2");
var lbl1 = document.getElementById("label1");
var lbl2 = document.getElementById("label2");
var lbl3 = document.getElementById("label3");
var lbl4 = document.getElementById("label4");

Envoyer.addEventListener("click" , function(){
    document.getElementById("rnom").innerHTML = `Nom: ${Nom.value}`;
    document.getElementById("rprenom").innerHTML = `Prenom: ${Prenom.value}`;
    document.getElementById("remail").innerHTML = `Email: ${Email.value}`;
    document.getElementById("rnv").innerHTML = `Niveau d'etudes: ${Niveau_detude.value}`;

    if(Nom.value===''){
        lbl1.style.visibility = "visible" ;
    }
    else {
        lbl1.style.visibility = "hidden" ;
    }

    if(Prenom.value===''){
        lbl2.style.visibility = "visible" ;
    }
    else {
        lbl2.style.visibility = "hidden" ;
    }

    if(Email.value===''){
        lbl3.style.visibility = "visible" ;
    }
    else {
        lbl3.style.visibility = "hidden" ;
    }

    if(Niveau_detude.value===''){
        lbl4.style.visibility = "visible" ;
    }
    else {
        lbl4.style.visibility = "hidden" ;
    }
});

Clear.addEventListener("click" ,function(){
    Nom.value = '';
    Prenom.value = '';
    Email.value = '';
    document.getElementById("rnom").innerHTML = '';
    document.getElementById("rprenom").innerHTML = '';
    document.getElementById("remail").innerHTML = '';
    document.getElementById("rnv").innerHTML = '';
    lbl1.innerHTML='';
    lbl2.innerHTML='';
    lbl3.innerHTML='';
    lbl4.innerHTML='';
});