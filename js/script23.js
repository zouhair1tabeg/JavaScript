document.getElementById('btn').addEventListener('click' , function(){
    var color = document.getElementById('opt').value;
    var div1 = document.getElementById('d');
    var div2 = document.createElement('div');

    div2.style.backgroundColor = color;
    div2.style.width = "100px";
    div2.style.height = "100px";
    div2.style.display = "inline-block";
    div1.appendChild(div2)

    div2.addEventListener('click' , function(){
        div1.removeChild(div2)
    })
});