import { Button } from "../classes/button.js";
import { SliderBody } from "../classes/slider.js";

const offerScrollBtn = new Button("offerScrollBtn");
const offerStoreBtn = new Button("offerStoreBtn");

const arrowIcon = document.querySelector(".offer__arrow");

function moveArrowIcon() {
  arrowIcon.style.top = "1.89vh";
}
function unmoveArrowIcon() {
  arrowIcon.style.top = "0";
}
const offerSlider = new SliderBody(
  "offer__slider-body",
  "offer__slider-line",
  "offer__slide"
);

const offerPicSlider = new SliderBody(
  "offer__slider-pic-body",
  "offer__slider-pic-line",
  "offer__photo_large"
);

const offerSlideNav1 = document.getElementById("offerSlideNav1");
const offerSlideNav2 = document.getElementById("offerSlideNav2");
const offerSlideNav3 = document.getElementById("offerSlideNav3");

function moveOnSliderClick(sliderBtn, number) {
  sliderBtn.addEventListener("click", function (evt) {
    offerPicSlider.elCount = number - 1;
    offerPicSlider.moveSlider();
    offerSlider.elCount = number - 1;
    offerSlider.moveSlider();
    changeSliderColors();
    evt.target.style.borderColor = "#000000";
  });
}
function changeSliderColors() {
  offerSlideNav1.style.borderColor = "#D1D1D1";
  offerSlideNav2.style.borderColor = "#D1D1D1";
  offerSlideNav3.style.borderColor = "#D1D1D1";
}

function checkColor() {
  changeSliderColors();
  switch (offerSlider.elCount) {
    case 0:
      offerSlideNav1.style.borderColor = "#000";
      break;
    case 1:
      offerSlideNav2.style.borderColor = "#000";
      break;
    case 2:
      offerSlideNav3.style.borderColor = "#000";
      break;
  }
}

function autoMoveSlider() {
  setInterval(function () {
    offerSlider.moveSlider();
    offerPicSlider.moveSlider();
    checkColor();
  }, 5000);
}
export {
  offerScrollBtn,
  offerStoreBtn,
  arrowIcon,
  moveArrowIcon,
  unmoveArrowIcon,
  offerSlider,
  offerPicSlider,
  offerSlideNav1,
  offerSlideNav2,
  offerSlideNav3,
  moveOnSliderClick,
  autoMoveSlider,
};
