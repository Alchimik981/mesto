import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, handleFormSubmit) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__container");
  }

  _getInputValue() {
    const inputList = Array.from(this._form.querySelectorAll(".input-text"));
    const inputValue = {};
    inputList.forEach((input) => {
      inputValue[input.name] = input.name;
    });
    return inputValue;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValue());
    });
  }
}
