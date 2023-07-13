import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._cardLink = document.querySelector(".popup__photo");
    this._cardName = document.querySelector(".popup__description");
  }

  open(link, name) {
    super.open();
    this._cardLink.src = link;
    this._cardLink.alt = name;
    this._cardName.textContent = name;
  }
}
