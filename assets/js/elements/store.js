import { Product } from "../classes/products.js";
import { footerFilterLinks } from "./footer.js";

const filterButtons = document.querySelectorAll(".products__filter-button");
const allItemsFilterBtn = document.getElementById("allItemsFilterBtn");
const footerStore = document.getElementById("footerStoreLink");
const pageButtonOne = document.getElementById("pageBtn1");
const productsSection = document.getElementById("productsSection");
const loader = document.getElementById("loading");

async function fetchProducts(url) {
  try {
    const response = await fetch(url);
    const productArray = await response.json();
    productArray.forEach((product) =>
      new Product(
        product.id,
        product.title,
        product.price,
        product.category,
        product.description,
        product.image
      ).addProduct()
    );
    hideLoading();
    allItemsFilterBtn.classList.add("products__filter-button_active");
    pageButtonOne.classList.add("products__page-button_active");
    footerStore.classList.add("footer__link_active");

    footerFilterLinks.forEach((link) => {
      link.classList.remove("footer__clothing-link_active");
    });
  } catch (error) {
    const errorMessage = document.createElement("p");
    errorMessage.className = "products__error-message";
    errorMessage.innerHTML =
      "Сервер временно недоступен. Повторите попытку позже.";
    productsSection.innerHTML = "";
    productsSection.appendChild(errorMessage);
    hideLoading();
  }
}

async function fetchFilteredProducts(url) {
  try {
    const response = await fetch(url);
    const productArray = await response.json();
    productArray.forEach((product) =>
      new Product(
        product.id,
        product.title,
        product.price,
        product.category,
        product.description,
        product.image
      ).addProduct()
    );
    hideLoading();
  } catch (error) {
    const errorMessage = document.createElement("p");
    errorMessage.className = "products__error-message";
    errorMessage.innerHTML =
      "Сервер временно недоступен. Повторите попытку позже.";
    productsSection.innerHTML = "";
    productsSection.appendChild(errorMessage);
    hideLoading();
  }
}

function filterProducts() {
  footerFilterLinks.forEach((link) => {
    link.classList.remove("footer__clothing-link_active");
    if (link.id === this.id) {
      link.classList.add("footer__clothing-link_active");
    }
  });
  const allButtons = [...this.parentElement.children];
  const btnSiblings = allButtons.filter((btn) => btn !== this);
  for (const i in btnSiblings) {
    btnSiblings[i].classList.remove("products__filter-button_active");
  }
  footerStore.classList.remove("footer__link_active");
  allItems.innerHTML = "";
  fetchFilteredProducts(
    `https://fakestoreapi.com/products/category/${this.id}`
  );
  displayLoading();
  this.classList.add("products__filter-button_active");
}

function filterProductsByLinks() {
  filterButtons.forEach((btn) => {
    btn.classList.remove("products__filter-button_active");
    if (btn.id === this.id) {
      btn.classList.add("products__filter-button_active");
    }
  });
  const allLinks = [...this.parentElement.children];
  const linkSiblings = allLinks.filter((link) => link !== this);
  for (const i in linkSiblings) {
    linkSiblings[i].classList.remove("footer__clothing-link_active");
  }
  footerStore.classList.remove("footer__link_active");
  allItems.innerHTML = "";
  fetchFilteredProducts(
    `https://fakestoreapi.com/products/category/${this.id}`
  );
  displayLoading();
  this.classList.add("footer__clothing-link_active");
}

function displayLoading() {
  loader.classList.add("display");
}

function hideLoading() {
  loader.classList.remove("display");
}

export {
  filterButtons,
  allItemsFilterBtn,
  fetchProducts,
  filterProducts,
  filterProductsByLinks,
  displayLoading,
};
