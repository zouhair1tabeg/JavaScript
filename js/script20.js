var Nom = document.getElementById("nom");
var Prenom = document.getElementById("prenom");
var Email = document.getElementById("mail");
var Tele = document.getElementById("tele");
var Envoyer = document.getElementById("envoyer");

Nom.addEventListener("blur" , function(){
    if(Nom.value===""){
        document.getElementById("l1").innerHTML = "Obligatoire";
        document.getElementById("l1").style.color = "red";
        document.getElementById("l1").style.visibility = "visible"
        Nom.style.border = "1px solid red"
    }
    else{
        document.getElementById("l1").style.visibility = "hidden"
        Nom.style.border = "1px solid black"
    }
    check_inp;
});

Prenom.addEventListener("blur" , function(){
    if(Prenom.value===""){
        document.getElementById("l2").innerHTML = "Obligatoire";
        document.getElementById("l2").style.color = "red";
        document.getElementById("l2").style.visibility = "visible"
        Prenom.style.border = "1px solid red"
    }
    else{
        document.getElementById("l2").style.visibility = "hidden"
        Prenom.style.border = "1px solid black"
    }
    check_inp;
});

document.getElementById('mail').addEventListener('blur', function() {
    var Email = document.getElementById('mail');
    var errorMessage = document.getElementById('l3');

    if (Email.value === "") {
        errorMessage.innerHTML = "Obligatoire";
        errorMessage.style.visibility = "visible";
        errorMessage.style.color = "red";
        Email.style.border = "1px solid red";
    } else {
        var valid1 = /[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+/;

        if (valid1.test(Email.value)) {
            errorMessage.style.visibility = "hidden";
        } else {
            errorMessage.innerHTML = "Format invalide";
            errorMessage.style.visibility = "visible";
            errorMessage.style.color = "red";
            Email.style.border = "1px solid red";
        }
    }
    check_inp;
});


Tele.addEventListener("blur" , function(){
    var ptr = /^0[0-9]{8}$/

    if(!ptr.test(Tele.value)){
        document.getElementById("l4").innerHTML = "Format invalid";
        document.getElementById("l4").style.color = "red";
        document.getElementById("l4").visibility = "visible";
        Tele.style.border = "1px solid red";
    }
    else{
        document.getElementById("l4").style.visibility = "hidden";
        Tele.style.border = "1px solid black";
    }
    check_inp;
});


function check_inp() {
    var nomValid = Nom.value.trim() !== "";
    var prenomValid = Prenom.value.trim() !== "";
    var emailValid = Email.value.trim() !== "" && /[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+/.test(Email.value);
    var teleValid = Tele.value.trim() !== "" && /^0[0-9]{8}$/.test(Tele.value);

    if (nomValid && prenomValid && emailValid && teleValid) {
        Envoyer.disabled = false; 
    } else {
        Envoyer.disabled = true; 
    }
}

Nom.addEventListener("blur", check_inp);
Prenom.addEventListener("blur", check_inp);
Email.addEventListener("blur", check_inp);
Tele.addEventListener("blur", check_inp);

Envoyer.addEventListener("click", function(event) {
    event.preventDefault();

    if (!Envoyer.disabled) {
        ;
    }
});

