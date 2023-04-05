import { SliderBody } from "../classes/slider.js";

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
  newCollectionSlider,
  prevSlideSideArrow,
  nextSlideSideArrow,
  prevSlideBottomArrow,
  nextSlideBottomArrow,
};
