$(document).ready(function(){
    $("#AddBtn").click(function(){
        const prd_input = $("#prd_name");
        const prd_name = prd_input.val().trim();

        const prix = $("#prix");
        const v_prix = prix.val().trim();

        const image_url = $("#img_url").val().trim();

        if(prd_name !== '' && v_prix !== '' && image_url !== ''){
            const tableRow = $("<tr></tr>");

            const nameCell = $("<td></td>").text(prd_name);
            tableRow.append(nameCell);

            const priceCell = $("<td></td>").text(v_prix);
            tableRow.append(priceCell);

            const imageCell = $("<td></td>");
            const image = $("<img>").attr("src", image_url).css({"max-width": "100px", "max-height": "100px"});
            imageCell.append(image);
            tableRow.append(imageCell);

            const actionCell = $("<td></td>");
            const removeBtn = $("<button></button>").text("Supprimer").css({"background-color": "red", "color": "white"}).addClass("removeBtn");
            removeBtn.click(function() {
                $(this).closest('tr').remove();
            });
            actionCell.append(removeBtn);
            tableRow.append(actionCell);

            $("#productTable tbody").append(tableRow);

            prd_input.val('');
            prix.val('');
            $("#img_url").val('');
        }
    });
});