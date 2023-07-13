export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(popupSelector);
    this._keyHandler = this._keyHandler.bind(this);
    this._handleCloseByOverlayOrButton= this._handleCloseByOverlayOrButton.bind(this)
  }

  _keyHandler(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleCloseByOverlayOrButton(evt) {
    if (
      evt.currentTarget === evt.target ||
      evt.target.classList.contains("popup__close")
    ) {
      this.close();
    }
  }

  _setEventListeners() {
    this._popup.addEventListener("click", this._handleCloseByOverlayOrButton);
  }

  open() {
    this._popup.classList.add("popup_active");
    this._setEventListeners();
    document.addEventListener("keydown", this._keyHandler);
  }

  close() {
    this._popup.classList.remove("popup_active");
    document.removeEventListener("keydown", this._keyHandler);
  }
}
