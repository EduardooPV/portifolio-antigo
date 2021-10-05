// SLIDES
var slideIndex = 1;
projetos__slide__container(slideIndex);

function plusSlides(n) {
  projetos__slide__container(slideIndex += n);
}

function currentSlide(n) {
  projetos__slide__container(slideIndex = n);
}

function projetos__slide__container(n) {
  var i;
  var slides = document.getElementsByClassName("projetos__slide__sessao");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// ANIMAÇÃO DAS DIV
const target = document.querySelectorAll('[data-animation]')
const animationClass = 'animate'

function animationScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)

  target.forEach(function(element) {
      if (windowTop > element.offsetTop ) {
          element.classList.add(animationClass)
      } else {
          element.classList.remove(animationClass)
      }
  })
}
window.addEventListener('scroll', () => animationScroll())

// FORMULARIO AJAX
var form = document.getElementById("formulario");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("formulario__status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Obrigado pela menssagem, entrarei em contato!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! algo deu errado."
  });
}
form.addEventListener("submit", handleSubmit)

// MENU HAMBURGUER
$('#header__hamburguer').click(function(){
  $('body').toggleClass('open');
  
});

$('#global-nav li').click(function(){
  $('body').toggleClass('open');
})