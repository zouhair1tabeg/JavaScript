$(document).ready(function(){
    var carDt;

    $.ajax({
        url : 'https://mocki.io/v1/57902311-41e0-42f1-8782-560bf641c9bf',
        type :'GET',
        dataType : 'json',

        success:function(data){
            carDt = data
            var select_car = $("#opt");
            for (var i = 0; i < carDt.length; i++){
                var car =carDt[i];
                var option = $("<option></option>").attr('value' , car.id).text(car.make+ '-' + car.model);
                select_car.append(option)
            }
        }
    });

    $("#btn").click(function(){
        car_seleccted = $("#opt").val();

        for(var i = 0; i< carDt.length; i++){
            var car = carDt[i];
            if(car.id == car_seleccted){
                $("#image").attr('src' , car.image);
                $("#price").text(`Price: ${car.price}`);
                $("#year").text(`Year: ${car.year}`);
            }
        }
    })
});

