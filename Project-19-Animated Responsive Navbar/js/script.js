const HBurgur = document.querySelector(".hamburgur");
const nLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");





HBurgur.addEventListener("click",()=>{
    nLinks.classList.toggle("open");
   
});
