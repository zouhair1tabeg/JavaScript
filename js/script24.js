const productTable = document.getElementById("productTable");

document.getElementById("AddBtn").addEventListener('click', function(){
    const prd_input = document.getElementById("prd_name");
    const prd_name = prd_input.value.trim();

    const prix = document.getElementById("prix");
    const v_prix = prix.value.trim();

    const image_url = document.getElementById("img_url").value.trim();

    if(prd_name !== '' && v_prix !== '' && image_url !== ''){
        const tableRow = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = prd_name;
        tableRow.appendChild(nameCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = v_prix;
        tableRow.appendChild(priceCell);

        const imageCell = document.createElement('td');
        const image = document.createElement('img');
        image.src = image_url;
        image.style.maxWidth = '100px'; 
        image.style.maxHeight = '100px'; 
        imageCell.appendChild(image);
        tableRow.appendChild(imageCell);

        const actionCell = document.createElement('td');
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Supprimer';
        removeBtn.style.backgroundColor="red"
        removeBtn.style.color="white"
        removeBtn.classList.add('removeBtn');
        removeBtn.addEventListener('click', function() {
            const parentRow = removeBtn.closest('tr');
            parentRow.parentNode.removeChild(parentRow);
        });
        actionCell.appendChild(removeBtn);
        tableRow.appendChild(actionCell);

        productTable.querySelector("tbody").appendChild(tableRow);

        prd_input.value = '';
        prix.value = '';
        document.getElementById('img_url').value = '';
    }
});