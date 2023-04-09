import { Button } from "../classes/button.js";
import { SliderBody } from "../classes/slider.js";

const newCollectionBtn = new Button("newCollectionBtn");

const newCollectionSlider = new SliderBody(
  "new-collection__slider-body",
  "new-collection__slider-line",
  "new-collection__item"
);

const prevSlideSideArrow = document.getElementById(
  "newCollectionPrevSlideSideArrow"
);
const nextSlideSideArrow = document.getElementById(
  "newCollectionNextSlideSideArrow"
);
const prevSlideBottomArrow = document.getElementById(
  "newCollectionPrevSlideBottomArrow"
);
const nextSlideBottomArrow = document.getElementById(
  "newCollectionNextSlideBottomArrow"
);

export {
  newCollectionBtn,
  newCollectionSlider,
  prevSlideSideArrow,
  nextSlideSideArrow,
  prevSlideBottomArrow,
  nextSlideBottomArrow,
};
