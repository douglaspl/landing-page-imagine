function toggleNav() {
    document.getElementById('header-nav').classList.toggle('header__nav--is-show');
}



//SCROLL INÍCIO

var element = document.getElementById("form");
var botoes = document.querySelectorAll(".j-cta_cadastro");

   
    for (i = 0; i < botoes.length; i++){
       
        botoes[i].addEventListener('click', scrollToForm);
    
    };

// ----- EXCEÇÃO PARA BOTÃO DO REGULAMENTO INÍCIO
var btnRegulamento = document.getElementById("regulamento");
// Adiciona novo clique para nova função
btnRegulamento.addEventListener('click', openRules);
// ----- EXCEÇÃO PARA BOTÃO DO REGULAMENTO FIM


// SCROLL FIM


// ----- FUNÇÕES INÍCIO

function scrollToForm() {
    element.scrollIntoView({ behavior: "smooth"});
};

function openRules() {
    console.log('Aguardando video de exemplo que virá aqui')
};
// ----- FUNÇÕES FIM




// ----- MODAL DE EXEMPLOS INÍCIO

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("tutoriais");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the player iframe
var player = document.getElementById('player');

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  player.src = "https://player.vimeo.com/video/288253496"
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  player.src = "";
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ----- MODAL DE EXEMPLOS FIM