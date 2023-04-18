var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

function trocar(){
    window.alert('Funcionou!')
}

function toggleSidebar() {
    showSidebar = !showSidebar;
    if(showSidebar){
        navigationHeader.style.marginLeft = '0px';
    } else{
        navigationHeader.style.marginLeft = '-10px';
    }
}