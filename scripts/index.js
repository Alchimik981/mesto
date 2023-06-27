import {
  popupProfileOpenButton,
  popupAddCardOpenButton,
  popupEditInfo,
  popupAddCard,
  popupOpenCard,
  profileName,
  profileAbout,
  formEditInfo,
  formAddCard,
  nameInput,
  aboutInput,
  placeInput,
  linkInput,
  popupAddCardSave,
  elementsSection,
  initialCards,
  validationSettings,
} from "./constants.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

function handleCloseByClick(evt) {
  if (
    evt.currentTarget === evt.target ||
    evt.target.classList.contains("popup__close")
  ) {
    closePopup(evt.currentTarget);
  }
}

function keyHandler(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_active"));
  }
}

function openPopup(obj) {
  obj.classList.add("popup_active");
  document.addEventListener("keydown", keyHandler);
}

function closePopup(obj) {
  obj.classList.remove("popup_active");
  document.removeEventListener("keydown", keyHandler);
}

function openPopupEditInfo() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(popupEditInfo);
}

function openPopupAddCard() {
  openPopup(popupAddCard);
  formAddCard.reset();
  cardFormValidator.handleInactiveSaveButton();
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupEditInfo);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newCard = new Card(
    {
      name: placeInput.value,
      link: linkInput.value,
    },
    "#element-template"
  ).createCard(openPopup);
  elementsSection.prepend(newCard);
  closePopup(popupAddCard);
}

popupAddCardOpenButton.addEventListener("click", openPopupAddCard);
popupProfileOpenButton.addEventListener("click", openPopupEditInfo);
formEditInfo.addEventListener("submit", handleEditFormSubmit);
formAddCard.addEventListener("submit", handleAddFormSubmit);
popupEditInfo.addEventListener("click", handleCloseByClick);
popupAddCard.addEventListener("click", handleCloseByClick);
popupOpenCard.addEventListener("click", handleCloseByClick);

initialCards.forEach((card) => {
  const newCard = new Card(card, "#element-template").createCard(openPopup);
  elementsSection.prepend(newCard);
});

const profileFormValidator = new FormValidator(formEditInfo, validationSettings);
profileFormValidator.validateInputs();

const cardFormValidator = new FormValidator(formAddCard, validationSettings);
cardFormValidator.validateInputs();
