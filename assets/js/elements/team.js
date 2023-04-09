export { arrowLeft, arrowRight, prevSlideMove, nextSlideMove, changeSlider };

let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let arrowLeft = document.getElementById("left-arrow");
let arrowRight = document.getElementById("right-arrow");
let index = 0;

// функция для слайдера команда
function prevSlideMove() {
  index += -1;
  changeSlider();
}

function nextSlideMove() {
  index += 1;
  changeSlider();
}

function changeSlider(n) {
  if (index > slides.length - 1) index = 0;

  if (index < 0) index = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  dots[index].classList.add("active");
}
