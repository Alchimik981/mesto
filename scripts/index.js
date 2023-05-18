const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__edit-btn");
const addButton = profile.querySelector(".profile__add-btn");
const popupEditInfo = document.querySelector(".popup_edit-info");
const popupAddCard = document.querySelector(".popup_add-card");
const popupOpenCard = document.querySelector(".popup_open-card");
const closePopupEditInfo = popupEditInfo.querySelector(".popup__close");
const closePopupAddCard = popupAddCard.querySelector(".popup__close");
const closePopupOpenCard = popupOpenCard.querySelector(".popup__close");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");
const formEditInfo = document.querySelector(".popup__container_edit-info");
const formAddCard = document.querySelector(".popup__container_add-card");
let nameInputValue = document.querySelector(".profile__name").textContent;
let aboutInputValue = document.querySelector(".profile__about").textContent;
let nameInput = document.querySelector(".input-text_type_name");
let aboutInput = document.querySelector(".input-text_type_about");
let placeInput = document.querySelector(".input__text_type_place");
let linkInput = document.querySelector(".input__text_type_link");
const savePopupEditInfo = popupEditInfo.querySelector(".popup__save-btn");
const savePopupAddCard = popupAddCard.querySelector(".popup__save-btn");
const cardTemplate = document.querySelector("#element-template").content;
const elementsSection = document.querySelector(".elements");

addButton.addEventListener("click", openPopupAddCard);
editButton.addEventListener("click", openPopupEditInfo);
closePopupEditInfo.addEventListener("click", closePopupEdit);
closePopupAddCard.addEventListener("click", closePopupAdd);
closePopupOpenCard.addEventListener("click", closePopupFullCard);
formEditInfo.addEventListener("submit", handleEditFormSubmit);
formAddCard.addEventListener("submit", handleAddFormSubmit);

function openPopup(popup) {popup.classList.add("popup_active");}
function closePopup(popup) {popup.classList.remove("popup_active");}

function openPopupEditInfo() {
  nameInput.value = nameInputValue;
  aboutInput.value = aboutInputValue;
  popupEditInfo.classList.add("popup_active");
}

function openPopupAddCard() {
  popupAddCard.classList.add("popup_active");
  placeInput = document.querySelector(".input-text_type_place").value = '';
  linkInput = document.querySelector(".input-text_type_link").value = '';
}

function openPopupFullCard() {
  popupOpenCard.classList.add("popup_active");
}

function closePopupEdit() {
  popupEditInfo.classList.remove("popup_active");
}

function closePopupAdd() {
  popupAddCard.classList.remove("popup_active");
}

function closePopupFullCard() {
  popupOpenCard.classList.remove("popup_active");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  nameInput = document.querySelector(".input-text_type_name").value;
  aboutInput = document.querySelector(".input-text_type_about").value;
  profileName.textContent = `${nameInput}`;
  profileAbout.textContent = `${aboutInput}`;
  closePopupEdit();
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  renderCard({
    name: placeInput = document.querySelector(".input-text_type_place").value,
    link: linkInput = document.querySelector(".input-text_type_link").value
  }, elementsSection);
  closePopupAdd();

}

const handleLikeIcon = (evt) => {
  evt.target.classList.toggle("element__like-btn_active");
};

const handleDeleteIcon = (evt) => {
  const card = evt.target.closest(".element");
  card.remove();
};

const handleOpenPicture = (evt) => {
  const cardLink = evt.target.closest(".element__pic").src;
  const cardName = evt.target.closest(".element").textContent;
  popupOpenCard.querySelector(".popup__photo").src = cardLink;
  popupOpenCard.querySelector(".popup__description").textContent = cardName;
};

const getCardElement = (item) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".element__pic").src = item.link;
  cardElement.querySelector(".element__text").textContent = item.name;
  cardElement
    .querySelector(".element__delete-btn")
    .addEventListener("click", handleDeleteIcon);
  cardElement
    .querySelector(".element__like-btn")
    .addEventListener("click", handleLikeIcon);
  cardElement
    .querySelector(".element__pic")
    .addEventListener("click", openPopupFullCard);
  cardElement
    .querySelector(".element__pic")
    .addEventListener("click", handleOpenPicture);
  return cardElement;
};

const renderCard = (item, elementsSection) => {
  elementsSection.prepend(getCardElement(item));
};

initialCards.forEach((item) => {
  renderCard(item, elementsSection);
});


