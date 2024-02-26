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


function DropDown(){
    var dropDownMenu = document.querySelector(".dropdown-menu");
    dropDownMenu.classList.toggle('open');
}

function ScrollIn(el){
    var div = document.getElementById("navbar");
    var newEl = el.concat("1");
    var children = div.children;
    var funcTag = null;
    for(var i=0; i<children.length; i++){
        var child = children[i];
        if(child.classList.contains(newEl)){
            funcTag = child;
        }
    }
    ChangeID(funcTag);
}

function RegionOver(el){
	var regionSelectHoverImg = el.querySelector("img");
    regionSelectHoverImg.style.width = "100%";
    var regionSelectHoverP = el.querySelector("p");
    regionSelectHoverP.style.display = "none";
}

function RegionOut(el){
    var regionSelectHoverImg = el.querySelector("img");
    regionSelectHoverImg.style.width = "0px";
    var regionSelectHoverP = el.querySelector("p");
    regionSelectHoverP.style.display = "block";
}
