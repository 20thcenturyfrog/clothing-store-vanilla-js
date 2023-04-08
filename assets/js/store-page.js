import { fetchProducts, displayLoading } from "./elements/store.js";

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

// Store

document.addEventListener("DOMContentLoaded", function () {
  fetchProducts("https://fakestoreapi.com/products");
  displayLoading();
});

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
