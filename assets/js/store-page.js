import { fetchProducts, displayLoading } from "./elements/store.js";

document.addEventListener("DOMContentLoaded", function () {
  fetchProducts("https://fakestoreapi.com/products");
  displayLoading();
});
