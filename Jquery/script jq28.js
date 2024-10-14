$(document).ready(function(){
    var hover = false;

    $("#d1").mouseover(function(){
        if (!hover) {
            $("#table").css("visibility", "visible");

            $.ajax({
                url: 'https://mocki.io/v1/57902311-41e0-42f1-8782-560bf641c9bf',
                type: 'GET',
                dataType: 'json',
        
                success: function(data){
                    var table_car = $("#table");
                    for (var i = 0; i < data.length; i++){
                        var car = data[i];
                        var tr = $("<tr></tr>").attr('value', car.id);
                        var td = $("<td></td>").text(car.make);
                        var td1 = $("<td></td>").text(car.model);
                        var td2 = $("<img>").attr('src', car.image).css("width", '100px');
                        table_car.append(tr);
                        tr.append(td, td1, td2);
                    }
                    hover = true;
                }
            });
        }
    });
});
