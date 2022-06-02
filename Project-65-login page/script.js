let menutoggle = document.querySelector('.toggle');
let section1 = document.querySelector('.login-section-1');
let section2 = document.querySelector('.login-section-2');


menutoggle.addEventListener ('click',()=>{
    section1.classList.toggle('active');
    section2.classList.toggle('active');
})


// let button = document.querySelector('.download-btn');

// button.addEventListener ('click',()=>{
//     button.classList.add('active');


//     setTimeout(()=>{
//          button.classList.remove('active');
//          document.querySelector("i").classList.replace("fa-cloud-download","fa-check-circle-o");
//          document.querySelector(".button-text").innerText="Completed";
//     },5500)
// })

// const loG=document.getElementById("login");
// const reG=document.getElementById("resistation");
// const logbutton=document.getElementById("logbutton")
// const regbutton=document.getElementById("regbutton")



// function register(){
//     loG.style.left="-560px"
//     reG.style.left="10%"
//     regbutton.style.background="burlywood"
//     regbutton.style.color="black"
//     logbutton.style.background="transparent"
//     logbutton.style.color="burlywood"

// }
// function login(){
//     loG.style.left="10%"
//     reG.style.left="560px"
//     regbutton.style.background="transparent"
//     regbutton.style.color="burlywood"
//     logbutton.style.background="burlywood"
//     logbutton.style.color="black"
// }