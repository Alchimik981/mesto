import {
  popupProfileOpenButton,
  popupAddCardOpenButton,
  formEditInfo,
  formAddCard,
  nameInput,
  aboutInput,
  placeInput,
  linkInput,
  initialCards,
  validationSettings,
} from "./constants.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";

//попап - изменение данных профиля
const userInfo = new UserInfo({
  title: ".profile__name",
  caption: ".profile__about",
});

const popupInfoEdit = new PopupWithForm(".popup_edit-info", () => {
  userInfo.setUserInfo({
    inputName: nameInput.value,
    inputAbout: aboutInput.value,
  });
  popupInfoEdit.close();
});
popupInfoEdit.setEventListeners();

popupProfileOpenButton.addEventListener("click", () => {
  const { inputName, inputAbout } = userInfo.getUserInfo();
  nameInput.value = inputName;
  aboutInput.value = inputAbout;
  popupInfoEdit.open();
});

//попап - добавление картинки на страницу
const popupCardAdd = new PopupWithForm(".popup_add-card", () => {
  const card = new Card(
    {
      name: placeInput.value,
      link: linkInput.value,
    },
    "#element-template"
  ).createCard();
  cardsFromBox.addItem(card);
  popupCardAdd.close();
});
popupCardAdd.setEventListeners();

popupAddCardOpenButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCardAdd.open();
  formAddCard.reset();
  cardFormValidator.handleInactiveSaveButton();
});

//Рендер карточек из при запуске страницы
const cardsFromBox = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      return new Card(item, "#element-template").createCard();
    },
  },
  ".elements"
);

cardsFromBox.render();

//попап - открытие картинки на весь экран
export const popupFullImage = new PopupWithImage(".popup_open-card");
popupFullImage._setEventListeners();

//Валидация полей ввода
const profileFormValidator = new FormValidator(
  formEditInfo,
  validationSettings
);

const cardFormValidator = new FormValidator(formAddCard, validationSettings);

profileFormValidator.validateInputs();
cardFormValidator.validateInputs();
