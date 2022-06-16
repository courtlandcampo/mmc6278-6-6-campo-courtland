var hamburgerBtnEl = document.querySelector(".hamburger-btn")
var menuEl = document.querySelector("#main-menu")
var ariaValue = document.querySelector(".hamburger-btn").getAttribute("aria-expanded")

hamburgerBtnEl.onclick = function() {
    menuEl.classList.add('show-menu')
    ariaValue = "true"
    console.log(ariaValue)
}
