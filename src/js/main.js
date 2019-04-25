function toggleNav() {
    document.getElementById('header-nav').classList.toggle('header__nav--is-show');
}



//scroll

var element = document.getElementById("form");
var botoes = document.querySelectorAll(".btn");

   
    for (i = 0; i < botoes.length; i++){
       
        botoes[i].addEventListener('click', scrollToForm);
    
    };

// ----- EXCEÇÃO PARA BOTÃO DO REGULAMENTO INÍCIO
var btnRegulamento = document.getElementById("regulamento");

// Retira clique do botão de regulamento
btnRegulamento.removeEventListener('click', scrollToForm);
// Adiciona novo clique para nova função
btnRegulamento.addEventListener('click', openRules);
// ----- EXCEÇÃO PARA BOTÃO DO REGULAMENTO FIM


// FUNÇÕES

function scrollToForm() {
    element.scrollIntoView({ behavior: "smooth"});
};

function openRules() {
    console.log('Aguardando video de exemplo que virá aqui')
};
