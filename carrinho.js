var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

function trocar() {
    showSidebar = !showSidebar;
    if(showSidebar){
        navigationHeader.style.margin = "0px";
    } else{
        navigationHeader.style.margin = "-10px";
    }
}

function continuar(){
    
}