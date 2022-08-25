// start header
// logo cart
let logoCart = document.getElementById('cart-logo');
let cart = document.getElementById('cart');
logoCart.addEventListener('click', function () {
    cart.classList.toggle('visible');
})
// logo cart
// berger icon
let bergerIcon = document.getElementById("fa-bars");
let mobileMenue = document.getElementById("mobile-menue");
let xMark = document.getElementById("fa-xmark");
let overLay = document.getElementById("overlay");
bergerIcon.addEventListener("click", function () 
{
    mobileMenue.style.left = "0";
    overLay.classList.toggle("visible");
})
xMark.addEventListener("click", function () 
{
    mobileMenue.style.left = "-100%";
    overLay.classList.toggle("visible");
})
// console.log(bergerIcon);
// berger icon

// end header



// start landing
let minus = document.getElementById("minus"); 
let plus = document.getElementById("plus"); 
let number = document.getElementById("number-now");

console.log(Number(number.innerText));

plus.onclick = function () {
    number.innerText = Number(number.innerText) + 1;
}

minus.onclick = function () {
    if (Number(number.innerText) == 0) {
        
    }else {
        number.innerText = Number(number.innerText) - 1;
    }
}
// end landing 