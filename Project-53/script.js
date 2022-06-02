const hamburger =document.querySelector('.container .section .Query .hamburger');
const mobail_menu =document.querySelector('.container .section .Query');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobail_menu.classList.toggle('active');
});

