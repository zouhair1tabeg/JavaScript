function permuter(){
 
    var nombre1 = parseInt(document.getElementById("nombre1").value);
    var nombre2 = parseInt(document.getElementById("nombre2").value);
    
    var permuter = nombre1;
    nombre1 = nombre2;
    nombre2 = permuter;
    
    document.getElementById("nombre1").value = nombre1;
    document.getElementById("nombre2").value = nombre2;
}