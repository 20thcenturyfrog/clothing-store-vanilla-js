import { Button } from "./classes/button.js";

const offerScrollBtn = new Button("offerScrollBtn");
const offerStoreBtn = new Button("offerStoreBtn");

const arrowIcon = document.querySelector(".offer__arrow");

offerScrollBtn.onMouseOver(moveArrowIcon);
offerScrollBtn.onMouseOut(unmoveArrowIcon);

function moveArrowIcon() {
  arrowIcon.style.position = "relative";
  arrowIcon.style.top = "1.89vh";
}
function unmoveArrowIcon() {
  arrowIcon.style.top = "0";
  arrowIcon.style.transition = "0.75s ease";
}
