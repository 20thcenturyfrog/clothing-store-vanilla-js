export class Button {
  elLink = null;

  constructor(id) {
    this.elLink = document.getElementById(id);
  }

  onClick(clickCallback) {
    this.elLink.addEventListener("click", clickCallback);
  }

  onMouseOver(mouseOverCallback) {
    this.elLink.addEventListener("mouseover", mouseOverCallback);
  }

  onMouseOut(mouseOutCallback) {
    this.elLink.addEventListener("mouseout", mouseOutCallback);
  }
}
