    var phrase = document.getElementById("phrase");
    var taille = document.getElementById("tl");
    var color = document.getElementById("opt");
    var result_label = document.getElementById("resultat");
    var button = document.getElementById("butt");
    var clearButton = document.getElementById("clear");
    var gras = document.getElementById("checkbox");
    
    button.addEventListener("click" , function(){
        result_label.innerHTML = phrase.value;
        result_label.style.fontSize = taille.value+"px";
        result_label.style.color = color.value;

        if (gras.checked){
            result_label.style.fontWeight = "bold";
        }
        else{
            result_label.style.fontWeight = "normal";
        }
    });

    
    clearButton.addEventListener("click", function() {
        phrase.value = '';
        taille.value = '';
        color.value = 'red';
        boldCheckbox.checked = false;
        result_label.textContent = '';
        result_label.style = '';
        result_label.value = "";
    });