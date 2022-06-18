var hamburgerBtnEl = document.querySelector(".hamburger-btn")
var menuEl = document.querySelector("#main-menu")


hamburgerBtnEl.addEventListener('click',function(e){
    e.stopPropagation()
    if (menuEl.classList.contains('show-menu')){
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

document.body.addEventListener('click', function(e){
    if (!menuEl.contains(e.target) && menuEl.classList.contains('show-menu')) {
        collapseMenu()
    }
})
