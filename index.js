let slideIndex = 1;
showSlide(slideIndex);

setInterval(() => {
  moveSlide(1);
}, 3000);

function moveSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  let i;
  const slides = document.getElementsByClassName("carousel-slide");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
