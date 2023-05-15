let profile = document.querySelector(".profile");
let editButton = profile.querySelector(".profile__edit-btn");
let addButton = profile.querySelector(".profile__add-btn");
let popup = document.querySelector(".popup");
let closePopup = popup.querySelector(".popup__close");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");
let formElement = document.querySelector(".popup__container");
let nameInput = document.querySelector(".input__text_type_name");
let aboutInput = document.querySelector(".input__text_type_about");
let savePopup = popup.querySelector(".popup__save-btn");
let elementText = document.querySelector(".element__text");
let elementPic = document.querySelector(".element__pic");
let elementContainer = document.querySelector(".elements");
let popupTitle = popup.querySelector(".popup__title");
let popupPic = document.querySelector(".popup-pic");
let popupPhoto = document.querySelector(".popup-pic__photo");
let popupPicClose = document.querySelector(".popup-pic__close")


function popupClose() {
  popup.classList.remove("popup_active");
}

function popupOpen() {
  popup.classList.add("popup_active");
}

function popupPicOpen() {
  popupPic.classList.add("popup-pic_active");
}

function popupPicClosed() {
  popupPic.classList.remove("popup-pic_active");
}

function popupInput() {
  nameInput = document.querySelector(".input-text_type_name").value;
  aboutInput = document.querySelector(".input-text_type_about").value;
}

addButton.addEventListener("click", openAddPopup);
editButton.addEventListener("click", openEditPopup);
closePopup.addEventListener("click", popupClose);
popupPicClose.addEventListener("click", popupPicClosed);

function editFormSubmit(evt) {
  evt.preventDefault();
  popupInput();
  profileName.textContent = `${nameInput}`;
  profileAbout.textContent = `${aboutInput}`;
  popupClose();
}

function openEditPopup() {
  popupOpen();
  popupTitle.innerText = "Редактировать профиль";
  nameInput = popup.querySelector(".input-text_type_name").value =
    "Жак-Ив Кусто";
  nameInput = popup.querySelector(".input-text_type_name").placeholder =
    "Введите имя";
  aboutInput = popup.querySelector(".input-text_type_about").value =
    "Исследователь океана";
  aboutInput = popup.querySelector(".input-text_type_about").placeholder =
    "О себе";
  formElement.addEventListener("submit", editFormSubmit);
}

function addFormSubmit(evt) {
  evt.preventDefault();
  popupInput();
  const cardTemplate = document.querySelector("#element-template").content;
  const elementTemplate = cardTemplate
    .querySelector(".element")
    .cloneNode(true);
  initialCards.unshift({
    name: (elementTemplate.querySelector(
      ".element__text"
    ).textContent = `${nameInput}`),
    link: (elementTemplate.querySelector(
      ".element__pic"
    ).src = `${aboutInput}`),
  });
  popupClose();
  elementContainer.prepend(elementTemplate);
  elementTemplate
    .querySelector(".element__delete-btn")
    .addEventListener("click", deleteCard);
  elementTemplate
    .querySelector(".element__btn")
    .addEventListener("click", likeCard);
    elementTemplate.querySelector('.element__pic').addEventListener('click', popupPicOpen);
    elementTemplate.querySelector('.element__pic').addEventListener('click', opanCard);
}

function openAddPopup() {
  popupOpen();
  popupTitle.innerText = "Новое место";
  nameInput = popup.querySelector(".input-text_type_name").value = "";
  nameInput = popup.querySelector(".input-text_type_name").placeholder =
    "Название";
  aboutInput = popup.querySelector(".input-text_type_about").value = "";
  aboutInput = popup.querySelector(".input-text_type_about").placeholder =
    "Добавьте ссылку";
  formElement.addEventListener("submit", addFormSubmit);
}

let initialCards = [
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

const likeCard = (evt) => {
  const like =
    evt.target.closest(".element__btn") ||
    evt.target.closest(".element__btn_active");
  like.classList.toggle("element__btn_active");
  like.classList.toggle("element__btn");
};

const deleteCard = (evt) => {
  const card = evt.target.closest(".element");
  card.remove();
};

const opanCard = (evt) => {
const cardLink = evt.target.closest(".element__pic").src;
const cardName = evt.target.closest(".element").textContent;
console.log(cardName)
console.log(cardLink)
const cardPopup = document.querySelector('.popup-pic');
    cardPopup.querySelector('.popup-pic__photo').src = cardLink;
    cardPopup.querySelector('.popup-pic__description').textContent = cardName;};


function addCards() {
  initialCards.forEach((item) => {
    const cardTemplate = document.querySelector("#element-template").content;
    const elementTemplate = cardTemplate
      .querySelector(".element")
      .cloneNode(true);
    elementTemplate.querySelector(".element__pic").src = item.link;
    elementTemplate.querySelector(".element__text").textContent = item.name;
    elementContainer.append(elementTemplate);
    elementTemplate
      .querySelector(".element__delete-btn")
      .addEventListener("click", deleteCard);
    elementTemplate
      .querySelector(".element__btn")
      .addEventListener("click", likeCard);
    elementTemplate.querySelector('.element__pic').addEventListener('click', popupPicOpen);
    elementTemplate.querySelector('.element__pic').addEventListener('click', opanCard);

  });
}

addCards();




