var Nom = document.getElementById("nom");
var Prenom = document.getElementById("prenom");
var Email = document.getElementById("email");
var Password1 = document.getElementById("pas1");
var Password2 = document.getElementById("pas2");
var Envoyer = document.getElementById("envoyer");
var Clear = document.getElementById("clear");

Nom.addEventListener("blur", function () {
    if (Nom.value === "") {
        document.getElementById("lbl1").innerHTML = "Le champ Nom ne peut pas etre vide";
        document.getElementById("lbl1").style.color = "red";
        document.getElementById("lbl1").style.display = "block";
        Nom.style.border = "solid red";
    }
    else {
        document.getElementById("lbl1").style.display = "none";
        Nom.style.border = "1px solid black";
    }

    var tst = /^[A-Z][a-z]*$/;
    if (tst.test(Nom.value)) {
        document.getElementById("lbl1").style.display = "none";
    } 
    else {
        document.getElementById("lbl1").innerHTML = "La première lettre doit être majuscule";
        document.getElementById("lbl1").style.color = "red";
        document.getElementById("lbl1").style.display = "block";
        Nom.style.border = "solid red";
    }
});

document.getElementById('email').addEventListener('blur', function() {
    if (Email.value === "") {
        document.getElementById('lbl2').innerHTML = "Obligatoire";
        document.getElementById('lbl2').style.display = "block";
        document.getElementById('lbl2').style.color = "red";
    } 

    else {
        var valid1 = /[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+/;
        
        if (valid1.test(Email)) {
            document.getElementById('lbl2').style.display = "none";
        } 
        else {
            document.getElementById('lbl2').innerHTML = "Format Email invalide";
            document.getElementById('lbl2').style.display = "block";
            document.getElementById('lbl2').style.color = "red";
        }
    }
});

document.getElementById('pas1').addEventListener('blur', function() {
    var Password1= document.getElementById('pas1').value;
    var valid2 = /(?=.*[a-z])(?=.{8,})/;

    if (valid2.test(Password1)) {
        document.getElementById('lbl4').style.display = "none";
        document.getElementById('pas2').disabled = false;

        document.getElementById('pas2').addEventListener('blur', function() {
            if (document.getElementById('pas1').value === document.getElementById('pas2').value) {
                document.getElementById('lbl4').innerHTML = "Vérification réussie";
                document.getElementById('lbl4').style.display = "block";
                document.getElementById('lbl4').style.color = "green";
            } 
            else {
                document.getElementById('lbl4').innerHTML = "Vérification échouée";
                document.getElementById('lbl4').style.display = "block";
                document.getElementById('lbl4').style.color = "red";
            }
        });
    } 
    else {
        document.getElementById('lbl3').innerHTML = "Mot de passe faible !";
        document.getElementById('lbl3').style.display = "block";
        document.getElementById('lbl3').style.color = "red";
        document.getElementById('pas2').disabled = true;
    }
    if (valid2.test(Password1)) {
        document.getElementById('lbl3').innerHTML = "Mot de passe fort";
        document.getElementById('lbl3').style.display = "block";
        document.getElementById('lbl3').style.color = "green";
        document.getElementById('pas2').disabled = false;
        Password2.style.backgroundColor= "white"
    }  
});