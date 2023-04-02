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
