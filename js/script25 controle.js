const tache_liste = document.getElementById('liste');

document.getElementById("Add_Btn").addEventListener("click" , function(){
    const input_tache = document.getElementById('tache');
    const v_tache = input_tache.value.trim();

    if(v_tache !==""){
        const li = document.createElement('li');

        const tache = document.createElement('input');
        tache.type = "checkbox";
        li.appendChild(tache)
        

        const label = document.createElement("label");
        label.textContent = v_tache
        li.appendChild(label)

        tache.addEventListener("change", function () {
            if (this.checked) {
                label.style.textDecoration = "line-through";
                label.style.color = 'red';
            } else {
                label.style.textDecoration = "none";
                label.style.color = 'black';
            }
        });

        tache_liste.appendChild(li);
        input_tache.value = "";
    }
});