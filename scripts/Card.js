import { popupFullImage } from "./index.js";

export class Card {
  constructor(data, template) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
    this._element = this._getTemplate();
    this._cardPic = this._element.querySelector(".element__pic");
    this._likeIcon = this._element.querySelector(".element__like-btn");
    this._deleteIcon = this._element.querySelector(".element__delete-btn");
  }

  _getTemplate() {
    return document
      .querySelector(this._template)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  _setOpenPictureListener() {
    this._cardPic.addEventListener("click", () => {
      const openPopupFullCard = document.querySelector(".popup_open-card");
      const cardLink = openPopupFullCard.querySelector(".popup__photo");
      const cardName = openPopupFullCard.querySelector(".popup__description");
      cardLink.src = this._link;
      cardLink.alt = this._name;
      cardName.textContent = this._name;
      popupFullImage.open(this._link, this._name)
    });
  }

  likeCard() {
    this._likeIcon.classList.toggle("element__like-btn_active");
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  createCard() {
    const cardTitle = this._element.querySelector(".element__text");
    cardTitle.textContent = this._name;
    this._cardPic.src = this._link;
    this._cardPic.alt = this._name;
    this._setOpenPictureListener();
    this._likeIcon.addEventListener("click", () => {
      this.likeCard();
    });
    this._deleteIcon.addEventListener("click", () => {
      this.deleteCard();
    });

    return this._element;
  }
}
