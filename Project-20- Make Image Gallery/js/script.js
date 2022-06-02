var fib = document.getElementById("fullImgBox");
var fi = document.getElementById("fullImg");


function openFullImg(img) {
    fib.style.display = "flex";
    fi.src = img;
}
function closeFullImg() {
    fib.style.display = "none";
}