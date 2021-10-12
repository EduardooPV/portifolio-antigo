// SLIDES
//Carousel
new Glide(".images", {
  type: 'carousel',
  autoplay: 5000,
  breakpoints:({
    768: { perView: 1 },
    3000: { perView: 2 }
  })
}).mount()

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