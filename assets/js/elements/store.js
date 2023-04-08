import { Product } from "../classes/products.js";

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

function displayLoading() {
  loader.classList.add("display");
}

function hideLoading() {
  loader.classList.remove("display");
}

export { fetchProducts, displayLoading };
