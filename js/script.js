var slideIndex = 0;
showSlides(slideIndex);

function currentSlide(index) {
  showSlides((slideIndex = index));
}

function muteIndicators(index) {
  var indicators = document.getElementsByClassName("page-indicator");
  for (i = 0; i < indicators.length; i++) {
    if (i != index) {
      indicators[i].style.opacity = ".1";
    } else {
      indicators[i].style.opacity = "1";
    }
  }
}

function showSlides(index) {
  var i;
  var slides = document.getElementsByClassName("slide");
  muteIndicators(index);
  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
