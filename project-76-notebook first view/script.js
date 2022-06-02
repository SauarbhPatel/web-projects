// Split text into letters
const text = document.querySelector(".notebookName");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
