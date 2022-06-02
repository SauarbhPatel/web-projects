const updateSection = document.getElementById('ap-update');

function displayUpdate(){
    updateSection.style.display="flex"
}
function UpdatedisplayNone(){
    updateSection.style.display="none"
}


var addfields = document.getElementById('addFields');
var formsection = document.getElementById('fields');

addfields.onclick = function(){
    var newField = document.createElement('ADD')
    // newField.setAttribute('class','a-p-u-skils flex');
    formsection.appendChild(newField);
}