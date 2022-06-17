var hamburgerBtnEl = document.querySelector(".hamburger-btn")
var menuEl = document.querySelector("#main-menu")
//var ariaValue = document.querySelector(".hamburger-btn").getAttribute("aria-expanded")


hamburgerBtnEl.addEventListener('click',function(){
    if (menuEl.classList.contains('showmenu')){
        collapseMenu()

    } else {
        openMenu()

    }
}) 

function openMenu() {
    menuEl.classList.add('show-menu')
    hamburgerBtnEl.setAttribute('aria-expanded', 'true')
}

function collapseMenu() {
    menuEl.classList.remove('show-menu')
    hamburgerBtnEl.setAttribute('aria-expanded', 'false')
} 