let id=0;
const container = document.getElementById('container');

document.getElementById('AddBtn').addEventListener('click' , function(){
    const prd_input = document.getElementById('Nom_produit');
    const prd_name = prd_input.value.trim();

    if(prd_name !==''){
        const new_prd = document.createElement('p');
        const prd_id = 'product_' + id;

        new_prd.setAttribute('id' , prd_id);
        new_prd.classList.add('product');
        new_prd.innerHTML = prd_name+ '  <button class="removeBtn">Supprimer</button>';

        container.appendChild(new_prd);
        id++;
        
        const rmv_Btn = new_prd.querySelector('.removeBtn');
        rmv_Btn.addEventListener("click" , function(){
            new_prd.parentNode.removeChild(new_prd);
        });
    }

});