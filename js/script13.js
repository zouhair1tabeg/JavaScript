var phrase = document.getElementById("phrase");
var taille = document.getElementById("taille");
var font_family = document.getElementById("opt");
var soulignie = document.getElementById("checkbox");
var button = document.getElementById("bt1");
var clear = document.getElementById("bt2");
var resultat = document.getElementById("resultat");

button.addEventListener("click" , function(){
    resultat.innerHTML = phrase.value;
    resultat.style.fontSize = taille.value+"px";
    resultat.style.fontFamily = font_family.value;

    if(soulignie.checked){
        resultat.style.textDecoration = "underline"
    }
    else{
        resultat.style.textDecoration = "none"
    }
});

clear.addEventListener("click" , function(){
    phrase.value = '';
    taille.value = '';
    font_family.value = 'serif';
    soulignie.checked = false;
    resultat.innerHTML = '';
});