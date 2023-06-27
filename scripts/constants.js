const profile = document.querySelector(".profile");
export const popupProfileOpenButton = profile.querySelector(".profile__edit-btn");
export const popupAddCardOpenButton = profile.querySelector(".profile__add-btn");
export const popupEditInfo = document.querySelector(".popup_edit-info");
export const popupAddCard = document.querySelector(".popup_add-card");
export const popupOpenCard = document.querySelector(".popup_open-card");
export const profileName = document.querySelector(".profile__name");
export const profileAbout = document.querySelector(".profile__about");
export const formEditInfo = document.querySelector(".popup__container_edit-info");
export const formAddCard = document.querySelector(".popup__container_add-card");
export const nameInput = document.querySelector(".input-text_type_name");
export const aboutInput = document.querySelector(".input-text_type_about");
export const placeInput = document.querySelector(".input-text_type_place");
export const linkInput = document.querySelector(".input-text_type_link");
export const popupAddCardSave = popupAddCard.querySelector(".popup__save-btn");
export const elementsSection = document.querySelector(".elements");

export const initialCards = [
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

export const validationSettings = {
  forms: document.forms,
  formElement: ".popup__container",
  inputElement: ".input-text",
  buttonElement: ".popup__save-btn",
  inactiveButtonClass: "popup__save-btn_inactive",
  inputErrorClass: "input-text_invalid",
  errorClass: "input-text__error_active",
};
