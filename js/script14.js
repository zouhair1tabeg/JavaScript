var border_radius = document.getElementById("br");
var padding = document.getElementById("pd");
var color = document.getElementById("option");
var resultat = document.getElementById("resultat");
var afficher = document.getElementById("afficher");
var clear = document.getElementById("clear");

afficher.addEventListener("click", function() {
    resultat.style.borderRadius = border_radius.value + "px";
    resultat.style.padding = padding.value + "px";
    resultat.style.backgroundColor = color.value;   
});

clear.addEventListener("click", function() {
    border_radius.value = "";
    padding.value = "";
    resultat.style.backgroundColor = "transparent";
    resultat.innerHTML = '';
});