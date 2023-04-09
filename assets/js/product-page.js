import { headerMainPageLink, headerStoreLink } from "./elements/header.js";

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

import {
  sizeBtnsArray,
  colorBtnsArray,
  toggleActiveClass,
  checkCartBtn,
  addToCartBtn,
} from "./elements/product.js";

// Header

headerMainPageLink.attachLink("index.html");
headerStoreLink.attachLink("store.html");

//footer

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

//product page

window.addEventListener("DOMContentLoaded", function () {
  toggleActiveClass(sizeBtnsArray, "product__size-btn_active");
  toggleActiveClass(colorBtnsArray, "product__color-option_active");
  checkCartBtn();
  addToCartBtn.addEventListener("click", function () {
    console.log("Added!");
  });
});
