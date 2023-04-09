import { headerMainPageLink, headerStoreLink } from "./elements/header.js";

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
  footerMainPageLink,
  footerStoreLink,
} from "./elements/footer.js";

// Header

headerMainPageLink.attachLink("index.html");
headerStoreLink.attachLink("store.html");

// Store

document.addEventListener("DOMContentLoaded", function () {
  fetchProducts("https://fakestoreapi.com/products");
  displayLoading();
});

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
