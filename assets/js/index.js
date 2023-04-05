import {
  offerScrollBtn,
  offerStoreBtn,
  moveArrowIcon,
  unmoveArrowIcon,
  offerSlider,
  offerPicSlider,
  offerSlideNav1,
  offerSlideNav2,
  offerSlideNav3,
  moveOnSliderClick,
  autoMoveSlider,
} from "./elements/offer.js";

import {
  newCollectionSlider,
  prevSlideSideArrow,
  nextSlideSideArrow,
  prevSlideBottomArrow,
  nextSlideBottomArrow,
} from "./elements/new-collection.js";

// Offer

offerScrollBtn.onMouseOver(moveArrowIcon);
offerScrollBtn.onMouseOut(unmoveArrowIcon);

offerSlider.init();
window.addEventListener("resize", offerSlider.init);
offerPicSlider.init();
window.addEventListener("resize", offerPicSlider.init);

moveOnSliderClick(offerSlideNav1, 0);
moveOnSliderClick(offerSlideNav2, 1);
moveOnSliderClick(offerSlideNav3, 2);

autoMoveSlider();

// New Collection

newCollectionSlider.init();
window.addEventListener("resize", newCollectionSlider.init);

prevSlideSideArrow.addEventListener(
  "click",
  newCollectionSlider.moveSliderBackward
);
nextSlideSideArrow.addEventListener(
  "click",
  newCollectionSlider.moveSliderForward
);
prevSlideBottomArrow.addEventListener(
  "click",
  newCollectionSlider.moveSliderBackward
);
nextSlideBottomArrow.addEventListener(
  "click",
  newCollectionSlider.moveSliderForward
);
