export class Product {
  allItems = document.getElementById("allItems");

  constructor(id, title, price, category, description, image) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
    this.description = description;
    this.image = image;
  }

  addProduct() {
    const product = document.createElement("div");
    product.className = "products__item";
    product.innerHTML = `<div class="products__image-wrapper">
      <img
        class="products__item-image"
        src="${this.image}"
        alt="item"
      />
      <div class="products__item-image-arrow">
        <img src="./assets/images/arrow-right.svg" alt="&rarr;" />
      </div>
    </div>
    <div class="products__item-name">${this.title}</div>
    <div class="products__item-price">$${this.price}</div>`;
    allItems.appendChild(product);
  }
}
