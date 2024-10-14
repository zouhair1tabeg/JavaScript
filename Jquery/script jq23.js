$(document).ready(function(){
    $("#btn").click(function(){
        color = $("#opt").val();
        div1 = $("#d");
        div2 = $("<div></div>");

        div2.css("backgroundColor" , color).css("width" , "100px").css("height" , "100px").css("display" , "inline-block");
        div1.append(div2)

        div2.click(function(){
            div2.remove()
        })
    })
})