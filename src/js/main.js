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
  alert('Aguardando pdf que virá aqui');  
  console.log('Aguardando pdf que virá aqui');
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
  player.src = "https://player.vimeo.com/video/288253496?autoplay=1"
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
    player.src = "";
    modal.style.display = "none";
  }
}

// ----- MODAL DE EXEMPLOS FIM

// ---- Fechar alerta de sucesso

var sucess =  document.getElementsByClassName("alert")[0];
var closeSucess = document.getElementsByClassName("alert__close")[0];


closeSucess.addEventListener('click', function() {
  sucess.classList.remove("alert--is-show");
});


