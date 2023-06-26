export class FormValidator {
  constructor(formElement, validationSettings) {
    this._formElement = formElement;
    this._inputElement = validationSettings.inputElement;
    this._buttonElement = validationSettings.buttonElement;
    this._inactiveButtonClass = validationSettings.inactiveButtonClass;
    this._inputErrorClass = validationSettings.inputErrorClass;
    this._errorClass = validationSettings.errorClass;
    this._inputList = this._formElement.querySelectorAll(this._inputElement);
    this._submitButton = this._formElement.querySelector(this._buttonElement);
  }

  _showInputError(input) {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = input.validationMessage;
  }

  _hideInputError(input) {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    _resetError(input, errorElement);
  }

  _checkInputValidity(input) {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    input.validity.valid
      ? this._resetError(input, errorElement)
      : this._showInputError(input, errorElement);
  }

  _resetError(input, errorElement) {
    input.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }

  _hasInvalidInput() {
    return Array.from(this._inputList).some((input) => !input.validity.valid);
  }

  _handleInactiveSaveButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _handleActiveSaveButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._handleInactiveSaveButton();
    } else {
      this._handleActiveSaveButton();
    }
  }

  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  validateInputs() {
    this._setEventListeners();
    this._toggleButtonState();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }
}
