import { headerMainPageLink, headerStoreLink } from "./elements/header.js";

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
  newCollectionBtn,
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
  footerMainPageLink,
  footerStoreLink,
} from "./elements/footer.js";

// Header

headerMainPageLink.attachLink("index.html");
headerStoreLink.attachLink("store.html");

// Offer

offerScrollBtn.attachLink("#newCollection");
offerStoreBtn.attachLink("store.html");

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

newCollectionBtn.attachLink("store.html");

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

footerLogoImg.attachLink("index.html");
footerPrivacyPolicy.attachLink("#");
footerPublicOffer.attachLink("#");
footerTel.attachLink("#");
footerEmail.attachLink("#");
footerInstagramIcon.attachLink("#");
footerFacebookIcon.attachLink("#");
footerTwitterIcon.attachLink("#");
footerVisaImg.attachLink("#");
footerMainPageLink.attachLink("index.html");
footerStoreLink.attachLink("store.html");

// функция для слайдера "команда"
import {
  arrowLeft,
  arrowRight,
  prevSlideMove,
  nextSlideMove,
  changeSlider,
} from "./elements/team.js";

arrowLeft.addEventListener("click", prevSlideMove);
arrowRight.addEventListener("click", nextSlideMove);
changeSlider();
