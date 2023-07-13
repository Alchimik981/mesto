import './index.css'
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
} from "../utils/constants.js";
import { Card } from '../components/Card.js'
import { FormValidator } from "../components/FormValidator.js";
import Section from '../components/Section.js'
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";

//Popups:
//Popup - изменение данных профиля
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

//Popup - добавление картинки на страницу
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

//Popup - открытие картинки на весь экран
export const popupFullImage = new PopupWithImage(".popup_open-card");
popupFullImage._setEventListeners();

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

//Валидация полей ввода
const profileFormValidator = new FormValidator(
  formEditInfo,
  validationSettings
);

const cardFormValidator = new FormValidator(formAddCard, validationSettings);

profileFormValidator.validateInputs();
cardFormValidator.validateInputs();
