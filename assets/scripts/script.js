const btnMegaMenu = document.querySelector("#bmenu_toggle");
const main = document.querySelector(".main-page")

btnMegaMenu.addEventListener("click",()=>{
    main.classList.toggle("overlay-body")
})