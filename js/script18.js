document.getElementById('nom').addEventListener('blur', function() {
    var nom = document.getElementById('nom').value;

    if (nom === "") {
        document.getElementById('lbl1').innerHTML = "Obligatoire";
        document.getElementById('lbl1').style.display = "block";
        document.getElementById('lbl1').style.color = "red";
    } 
    else {
        document.getElementById('lbl1').style.display = "none";
    }
});

document.getElementById('email').addEventListener('blur', function() {
    var email = document.getElementById('email').value;

    if (email === "") {
        document.getElementById('lbl2').innerHTML = "Obligatoire";
        document.getElementById('lbl2').style.display = "block";
        document.getElementById('lbl2').style.color = "red";
    } 
    else {
        var valid1 = /[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+/;
        
        if (valid1.test(email)) {
            document.getElementById('lbl2').style.display = "none";
        } 
        else {
            document.getElementById('lbl2').innerHTML = "Format Email invalide";
            document.getElementById('lbl2').style.display = "block";
            document.getElementById('lbl2').style.color = "red";
        }
    }
});

document.getElementById('pas').addEventListener('blur', function() {
    var pas= document.getElementById('pas').value;
    var valid2 = /(?=.*[a-z])(?=.{8,})/;

    if (valid2.test(pas)) {
        document.getElementById('lbl4').style.display = "none";
        document.getElementById('cfps').disabled = false;

        document.getElementById('cfps').addEventListener('blur', function() {
            if (document.getElementById('pas').value === document.getElementById('cfps').value) {
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
        document.getElementById('cfps').disabled = true;
    }
    if (valid2.test(pas)) {
        document.getElementById('lbl3').innerHTML = "Mot de passe fort";
        document.getElementById('lbl3').style.display = "block";
        document.getElementById('lbl3').style.color = "green";
        document.getElementById('cfps').disabled = false;
    }  
});

var Clear = document.getElementById("clear");
var Nom = document.getElementById("nom");
var Prenom = document.getElementById("prenom");
var Email = document.getElementById("email");
var Pass = document.getElementById("pas");
var Cfr_pass = document.getElementById("cfps");
var Telephone = document.getElementById("tele");

Clear.addEventListener("click", function() {
    Nom.value = '';
    Prenom.value = '';
    Email.value = '';
    Pass.value = '';
    Cfr_pass.value = '';
    Telephone.value = '';
    document.getElementById('cfps').disabled = false;

    document.getElementById('lbl1').style.display = "none";
    document.getElementById('lbl2').style.display = "none";
    document.getElementById('lbl3').style.display = "none";
    document.getElementById('lbl4').style.display = "none";
    document.getElementById('lbl1').innerHTML = "";
    document.getElementById('lbl2').innerHTML = "";
    document.getElementById('lbl3').innerHTML = "";
    document.getElementById('lbl4').innerHTML = "";
    document.getElementById('lbl1').style.color = "";
    document.getElementById('lbl2').style.color = "";
    document.getElementById('lbl3').style.color = "";
    document.getElementById('lbl4').style.color = "";
});