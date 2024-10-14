var b1 = document.getElementById("boutton1");
var b2 = document.getElementById("boutton2");
var b3 = document.getElementById("boutton3");
var b4 = document.getElementById("boutton4");
var d = document.getElementById("d1");

b1.addEventListener("click" , function(){
    d.style.backgroundColor = 'aquamarine';
});

b2.addEventListener("dblclick" , function(){
    d.style.backgroundColor = "orange";
});

b3.addEventListener("mouseover" , function(){
    d.style.backgroundColor = "blueviolet";
});
b4.addEventListener("mouseout" , function(){
    d.style.backgroundColor = "lightskyblue";
});