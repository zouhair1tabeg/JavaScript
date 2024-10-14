const tache_liste = document.getElementById('tache_liste');

document.getElementById("Ajouter_button").addEventListener("click" , function(){
    const tache_inp = document.getElementById('input_tache');
    const tache_name = tache_inp.value.trim();

    if(tache_name !==""){
        const liste = document.createElement('li');

        const check = document.createElement('input');
        check.type = "checkbox";
        liste.appendChild(check)
        

        const lbl = document.createElement("lbl");
        lbl.textContent = tache_name
        liste.appendChild(lbl)

        check.addEventListener("change", function () {
            if (this.checked) {
                lbl.style.textDecoration = "line-through";
            } else {
                lbl.style.textDecoration = "none";
            }
        });

        tache_liste.appendChild(liste);

        tache_inp.value = "";
    }
});