const BTN= document.getElementsByClassName("btn");
const SLIDE = document.getElementById("slide")



BTN[0].onclick=function(){
    SLIDE.style.transform="translateX(0px";
    for (let i = 0; i < 5; i++) {
        BTN[i].classList.remove("active");
    }
    this.classList.add("active");
}
BTN[1].onclick=function(){
    SLIDE.style.transform="translateX(-760px";
    for (let i = 0; i < 5; i++) {
        BTN[i].classList.remove("active");
    }
    this.classList.add("active");
}
BTN[2].onclick=function(){
    SLIDE.style.transform="translateX(-1520px";
    for (let i = 0; i < 5; i++) {
        BTN[i].classList.remove("active");
    }
    this.classList.add("active");
}
BTN[3].onclick=function(){
    SLIDE.style.transform="translateX(-2280px";
    for (let i = 0; i < 5; i++) {
        BTN[i].classList.remove("active");
    }
    this.classList.add("active");
}
BTN[4].onclick=function(){
    SLIDE.style.transform="translateX(-3040px";
    for (let i = 0; i < 4; i++) {
        BTN[i].classList.remove("active");
    }
    this.classList.add("active");
}