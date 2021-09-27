var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
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



// Animação das div
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