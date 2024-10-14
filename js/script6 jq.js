$(document).ready(function(){
    function calcule(){
        var km = parseInt($("#inp").val());
        var prix;

        if ($("#normal").is(":checked")){
            if (km <= 10){
                prix = 50;
            } else {
                prix = 70;
            }
        } else {
            if (km <= 10){
                prix = 80;
            } else {
                prix = 100;
            }
        }

        $("#prix").text(prix);
    }

    function clear_prix(){
        $("#inp").val("");
        $("#prix").empty();
    }

    $("#calculateBtn").click(calcule);
    $("#clearBtn").click(clear_prix);
});