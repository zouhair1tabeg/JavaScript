function separe(){

    var nomComplet = document.getElementById("name").value;

    var parties = nomComplet.split(" ");


    document.getElementById("nom").textContent =`nome: ${parties[0]}`  || "--";
    document.getElementById("Prenom").textContent = `Prenom: ${parties[1]}` || "--"; 
}