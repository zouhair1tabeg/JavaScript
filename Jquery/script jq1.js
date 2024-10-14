$(document).ready(function(){
    $("#nom").blur(function(){
        var Nom = $("#nom").val();

        if(Nom === ''){
            $("#l1").text("Obligatoire").css('display' , 'block').css('color' , 'red');
        }
        else{
            $("#l1").css("display" , "none")
        }
    });

    $("#mail").blur(function(){
        var Email = $("#mail").val();

        if(Email === ''){
            $("#l3").text("Obligatoire").css('display' , 'block').css('color' , 'red');
        }
        else{
            var prt = /[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+/;

            if (prt.test(Email)){
                $("#l3").css('display' , 'none');
            }
            else{
                $("#l3").text('Format invalide').css('display' , 'block').css('color' , 'red');
            }
        }
    });

    $("#pass").blur(function(){
        var pas = $("#pass").val();
        var pter = /(?=.*[a-z])(?=.{8,})/;

        if(pter.test(pas)){
            $("#l4").css("display" , 'none');
            $("#passco").prop('disabled' , false);

            $("#passco").blur(function(){
                if($("#passco").val() === $("#pass").val()){
                    $("#l5").text('Vérification réussie').css('display' , 'block').css('color' , 'green');
                }
                else{
                    $("#l5").text('Vérification échouée').css('display' , 'block').css('color' , 'red');
                }
            });
        }
        else{
            $("#l4").text('Mot de passe faible').css('display' , 'block').css('color' , 'red');
            $("#passco").prop('disabled' , true);
        }
    });

    $("#phone").blur(function(){
        var ptr = /^0[0-9]{8}$/;

        if(!ptr.test($("#phone").val())){
            $("#l7").text('Format invalid').css('color' , 'red').css('display' , 'block');
        }
        else{
            $("#l7").css('display' , 'none');
        }
    });
});