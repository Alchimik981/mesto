const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__edit-btn");
const addButton = profile.querySelector(".profile__add-btn");
const popupEditInfo = document.querySelector(".popup_edit-info");
const popupAddCard = document.querySelector(".popup_add-card");
const popupOpenCard = document.querySelector(".popup_open-card");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const formEditInfo = document.querySelector(".popup__container_edit-info");
const formAddCard = document.querySelector(".popup__container_add-card");
const nameInput = document.querySelector(".input-text_type_name");
const aboutInput = document.querySelector(".input-text_type_about");
const placeInput = document.querySelector(".input-text_type_place");
const linkInput = document.querySelector(".input-text_type_link");
const savePopupAddCard = popupAddCard.querySelector(".popup__save-btn");
const elementsSection = document.querySelector(".elements");

const initialCards = [
  {
    name: "Таганрог",
    link: "https://images.unsplash.com/photo-1568924509837-7cb0751c0d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Краснодар",
    link: "https://images.unsplash.com/photo-1547135288-962281f3efe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Сибирь",
    link: "https://images.unsplash.com/photo-1630475915483-7e492dcccf18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Санкт-Петербург",
    link: "https://images.unsplash.com/photo-1615529489302-e5e8d9f72ce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Алтай",
    link: "https://images.unsplash.com/photo-1494791286225-ea86fc957ba7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80",
  },
  {
    name: "Роза Хутор",
    link: "https://images.unsplash.com/photo-1617117833203-c91b04e0431f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  },
  {
    name: "Байкал",
    link: "https://images.unsplash.com/photo-1552735855-557bdba3961a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
  },
];

import { Card } from "./cards.js";
import { FormValidator } from "./validate.js";

addButton.addEventListener("click", openPopupAddCard);
editButton.addEventListener("click", openPopupEditInfo);
formEditInfo.addEventListener("submit", handleEditFormSubmit);
formAddCard.addEventListener("submit", handleAddFormSubmit);
popupEditInfo.addEventListener("click", handleCloseByClick);
popupAddCard.addEventListener("click", handleCloseByClick);
popupOpenCard.addEventListener("click", handleCloseByClick);

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
  savePopupAddCard.textContent = 'Создать';
  openPopup(popupAddCard);
  formAddCard.reset();
}


function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupEditInfo);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newCard = new Card( {
    name: placeInput.value,
    link: linkInput.value,
  }, "#element-template").createCard(openPopup);
  elementsSection.prepend(newCard);
  closePopup(popupAddCard);
}

  initialCards.forEach((card) => {
      const newCard = new Card(card, "#element-template").createCard(openPopup);
      elementsSection.prepend(newCard);
  });

  const validationSettings = ({
    forms: document.forms,
    formElement: ".popup__container",
    inputElement: ".input-text",
    buttonElement: ".popup__save-btn",
    inactiveButtonClass: "popup__save-btn_inactive",
    inputErrorClass: "input-text_invalid",
    errorClass: "input-text__error_active",
  });

  function enableValidation(settings) {
    const forms = Array.from(settings.forms);
    forms.forEach((form) => {
        const formValidator = new FormValidator(form, settings);
        formValidator.validateInputs();
    });
}

enableValidation(validationSettings)


