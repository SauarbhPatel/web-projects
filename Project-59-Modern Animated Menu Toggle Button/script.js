let menutoggle = document.querySelector('.toggle');

// there is tow way to add active class in any class /

menutoggle.onclick = function(){
    menutoggle.classList.toggle('active');
}

// menutoggle.addEventListener ('click',()=>{
//     menutoggle.classList.toggle('active');
// })