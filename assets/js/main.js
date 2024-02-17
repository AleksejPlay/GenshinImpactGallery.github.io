function MoveIn(el){
    let elPos = el.offsetLeft;
    let elWidth = el.offsetWidth;
    var box = document.getElementById("box");
    
    box.style.left = elPos.toString().concat("px");
    box.style.width = elWidth.toString().concat("px");
}
function MoveOut(){
    var actElPos = document.getElementById("active").offsetLeft;
    let actElWidth = document.getElementById("active").offsetWidth;
    var box = document.getElementById("box");

    box.style.left = actElPos.toString().concat("px");
    box.style.width = actElWidth.toString().concat("px");
}

function ChangeID(newActive){
    lastActive = document.getElementById("active");
    lastActive.removeAttribute('id');

    newActive.setAttribute("id" , "active");

    MoveOut();
}


const toggleBtn = document.getElementById("toggle-btn");
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

console.log(toggleBtn)

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
}