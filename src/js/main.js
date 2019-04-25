function toggleNav() {
    document.getElementById('header-nav').classList.toggle('header__nav--is-show');
}



//scroll

var element = document.getElementById("form");
var botao = document.getElementById("button");

botao.addEventListener('click', scrollToForm);

function scrollToForm() {
    element.scrollIntoView({ behavior: "smooth"});
};