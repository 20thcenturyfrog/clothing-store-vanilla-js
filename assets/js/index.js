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

import {
  footerLogoImg,
  footerPrivacyPolicy,
  footerPublicOffer,
  footerTel,
  footerEmail,
  footerInstagramIcon,
  footerFacebookIcon,
  footerTwitterIcon,
  footerVisaImg,
} from "./elements/footer.js";

// Offer

offerScrollBtn.attachLink("#");
offerStoreBtn.attachLink("#");

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

// Footer

footerLogoImg.attachLink("#");
footerPrivacyPolicy.attachLink("#");
footerPublicOffer.attachLink("#");
footerTel.attachLink("#");
footerEmail.attachLink("#");
footerInstagramIcon.attachLink("#");
footerFacebookIcon.attachLink("#");
footerTwitterIcon.attachLink("#");
footerVisaImg.attachLink("#");

// функция для слайдера "команда"
import {
  slides,
  dots,
  arrowLeft,
  arrowRight,
  index,
  prevSlideMove,
  nextSlideMove,
  changeSlider,
} from "./elements/team.js"



arrowLeft.addEventListener('click', prevSlideMove);
arrowRight.addEventListener('click', nextSlideMove);
changeSlider();