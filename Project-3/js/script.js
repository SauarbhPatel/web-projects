// $(".product-colors span").click(function(){
//     $(".product-colors span").removeClass("active");
//     $(this).addClass("active");
    // $("body").css("background",$(this).attr("data-color"));
    // $(".product-price").css("color",$(this).attr("data-color"));
    // $(".product-button").css("color",$(this).attr("data-color"));
    // $(".product-pic").css("background-image",$(this).attr("data-pic"));
// })


const BTN= document.getElementsByClassName("btn");
const piBTN= document.getElementById("product-info");
const pbBTN= document.getElementById("product-button");
const img= document.getElementById("product-pic");
const body= document.getElementById("body");


BTN[0].onclick=function(){
    img.style.backgroundImage= 'url("img/1.png")';
    piBTN.style.color='#7ed6df';
    pbBTN.style.color='#7ed6df';
    body.style.background='#7ed6df';
    for (let i = 0; i < 4; i++) {
        BTN[i].classList.remove("active");
    }
    this.classList.add("active");
}
BTN[1].onclick=function(){
    img.style.backgroundImage= 'url("img/2.png")';
    body.style.background='#badc58';
    piBTN.style.color='#badc58';
    pbBTN.style.color='#badc58';
    for (let i = 0; i < 4; i++) {
        BTN[i].classList.remove("active");
    }
    this.classList.add("active");
}
BTN[2].onclick=function(){
    body.style.background='#f9ca24';
    img.style.backgroundImage= 'url("img/3.png")';
    piBTN.style.color='#f9ca24';
    pbBTN.style.color='#f9ca24';
    for (let i = 0; i < 4; i++) {
        BTN[i].classList.remove("active");
    }
    this.classList.add("active");
}
BTN[3].onclick=function(){
    body.style.background='#ff7979';
    img.style.backgroundImage= 'url("img/4.png")';
    piBTN.style.color='#ff7979';
    pbBTN.style.color='#ff7979';
    for (let i = 0; i < 4; i++) {
        BTN[i].classList.remove("active");
    }
    this.classList.add("active");
}
