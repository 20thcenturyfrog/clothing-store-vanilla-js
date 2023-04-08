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

import {
  sizeBtnsArray,
  colorBtnsArray,
  toggleActiveClass,
  checkCartBtn,
  addToCartBtn,
} from "./elements/product.js";

//footer

footerLogoImg.attachLink("#");
footerPrivacyPolicy.attachLink("#");
footerPublicOffer.attachLink("#");
footerTel.attachLink("#");
footerEmail.attachLink("#");
footerInstagramIcon.attachLink("#");
footerFacebookIcon.attachLink("#");
footerTwitterIcon.attachLink("#");
footerVisaImg.attachLink("#");

//product page

window.addEventListener("DOMContentLoaded", function () {
  toggleActiveClass(sizeBtnsArray, "product__size-btn_active");
  toggleActiveClass(colorBtnsArray, "product__color-option_active");
  checkCartBtn();
  addToCartBtn.addEventListener("click", function () {
    console.log("Added!");
  });
});
