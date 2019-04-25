function toggleNav() {
    document.getElementById('header-nav').classList.toggle('header__nav--is-show');
}



//scroll

var element = document.getElementById("form");
var botoes = document.querySelectorAll(".btn");


   
    for (i = 0; i < botoes.length; i++){
       
        botoes[i].addEventListener('click', scrollToForm);
    
    };



function scrollToForm() {
    element.scrollIntoView({ behavior: "smooth"});
};