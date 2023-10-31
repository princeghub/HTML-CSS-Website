var navLinks = document.querySelector(".navLink");

function showManu(){
    navLinks.style.top = "0";
}
function hideManu(){
    navLinks.style.top = "-100%";
}


var btn1 =document.getElementById('cartBtn1');
var btn2 =document.getElementById('cartBtn2');
var btn3 =document.getElementById('cartBtn3');

var box1 = document.getElementById('box1')
var box2 = document.getElementById('box2')
var box3 = document.getElementById('box3')

btn1.addEventListener('click', () =>{
    box1.style.display = "block";
    box2.style.display = "none"
    box3.style.display = "none"
})
btn2.addEventListener('click', () =>{
    box2.style.display = "block";
    box1.style.display = "none"
    box3.style.display = "none"
})
btn3.addEventListener('click', () =>{
    box2.style.display = "none";
    box1.style.display = "none"
    box3.style.display = "block"
})