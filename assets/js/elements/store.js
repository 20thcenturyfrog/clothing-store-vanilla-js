import { Product } from "../classes/products.js";

const filterButtons = document.querySelectorAll(".products__filter-button");
const allItemsFilterBtn = document.getElementById("allItemsFilterBtn");
const pageButtonOne = document.getElementById("pageBtn1");
const productsSection = document.getElementById("productsSection");
const loader = document.getElementById("loading");

async function fetchProducts(url) {
  try {
    const response = await fetch(url);
    const productArray = await response.json();
    productArray.forEach((i) =>
      new Product(
        i.id,
        i.title,
        i.price,
        i.category,
        i.description,
        i.image
      ).addProduct()
    );
    hideLoading();
    allItemsFilterBtn.classList.add("products__filter-button_active");
    pageButtonOne.classList.add("products__page-button_active");
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
    productArray.forEach((i) =>
      new Product(
        i.id,
        i.title,
        i.price,
        i.category,
        i.description,
        i.image
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
  const allButtons = [...this.parentElement.children];
  const btnSiblings = allButtons.filter((btn) => btn !== this);
  for (const i in btnSiblings) {
    btnSiblings[i].classList.remove("products__filter-button_active");
  }
  allItems.innerHTML = "";
  fetchFilteredProducts(
    `https://fakestoreapi.com/products/category/${this.id}`
  );
  displayLoading();
  this.classList.add("products__filter-button_active");
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
  displayLoading,
};
