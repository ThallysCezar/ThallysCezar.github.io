/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* Scroll sections active link */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* Scroll sections active link */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    /* remove toggle icon and navbar when click navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/* Scroll reveal */
ScrollReveal({
    // reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .education-row, .skills-column, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });

/* typed js */
const typed = new Typed('.multiple-text', {
    strings: ['Backend Developer with Spring Boot', 'Frontend Developer with React', 'Passionate about pixel art.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Função para iniciar o download do currículo
function baixarCurriculo() {
    // URL do arquivo do currículo
    var urlCurriculo = "./assets/CV/curriculo.pdf";

    // Criação de um link temporário para iniciar o download
    var linkDownload = document.createElement("a");
    linkDownload.href = urlCurriculo;
    linkDownload.download = "curriculo.pdf";

    // Clique no link de download
    linkDownload.click();
}

// Adiciona um evento de clique ao botão
var btnDownload = document.getElementById("btn-download");
btnDownload.addEventListener("click", baixarCurriculo);

// email JS 
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Obtenha os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Construa o conteúdo do email
    var subject = 'Formulário de Contato';
    var body = 'Nome: ' + name + '\nEmail: ' + email + '\nMensagem: ' + message;
    
    // Abra o cliente de email padrão do usuário com os dados preenchidos
    window.location.href = 'mailto:thallyspequeno@outlook.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
});

let portfolioBoxes = document.querySelectorAll('.portfolio-box');

portfolioBoxes.forEach(function(box) {
  var portfolioLayer = box.querySelector('.portfolio-layer');

  box.addEventListener('mouseenter', function() {
    portfolioLayer.style.opacity = '1'; // Mostra o texto ao passar o mouse
  });

  box.addEventListener('mouseleave', function() {
    portfolioLayer.style.opacity = '0'; // Oculta o texto ao remover o mouse
  });
});