const sizeBtnsArray = document.querySelectorAll(".product__size-btn");
const colorBtnsArray = document.querySelectorAll(".product__color-option");
const addToCartBtn = document.getElementById("productAddToCartBtn");

function toggleActiveClass(array, activeClass) {
  array.forEach((el) => {
    el.addEventListener("click", function (evt) {
      array.forEach((el) => {
        el.classList.remove(activeClass);
      });
      evt.target.classList.toggle(activeClass);
      checkCartBtn();
    });
  });
}

function checkCartBtn() {
  if (isSizeBtnActive() && isColorBtnActive()) {
    addToCartBtn.removeAttribute("disabled");
  } else {
    addToCartBtn.setAttribute("disabled", "true");
  }
}

function isSizeBtnActive() {
  let isActive = false;
  sizeBtnsArray.forEach((el) => {
    if (el.classList.contains("product__size-btn_active")) {
      isActive = true;
    }
  });
  return isActive;
}

function isColorBtnActive() {
  let isActive = false;
  colorBtnsArray.forEach((el) => {
    if (el.classList.contains("product__color-option_active")) {
      isActive = true;
    }
  });
  return isActive;
}

export {
  sizeBtnsArray,
  colorBtnsArray,
  toggleActiveClass,
  checkCartBtn,
  addToCartBtn,
};
