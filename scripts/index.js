const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__edit-btn");
const addButton = profile.querySelector(".profile__add-btn");
const popupEditInfo = document.querySelector(".popup_edit-info");
const popupAddCard = document.querySelector(".popup_add-card");
const popupOpenCard = document.querySelector(".popup_open-card");
const closePopupEditInfo = popupEditInfo.querySelector(".popup__close_form");
const closePopupAddCard = popupAddCard.querySelector(".popup__close_form");
const closePopupOpenCard = popupOpenCard.querySelector(".popup__close_card");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const formEditInfo = document.querySelector(".popup__container_edit-info");
const formAddCard = document.querySelector(".popup__container_add-card");
const nameInput = document.querySelector(".input-text_type_name");
const aboutInput = document.querySelector(".input-text_type_about");
const placeInput = document.querySelector(".input-text_type_place");
const linkInput = document.querySelector(".input-text_type_link");
const savePopupEditInfo = popupEditInfo.querySelector(".popup__save-btn");
const savePopupAddCard = popupAddCard.querySelector(".popup__save-btn");
const elementsSection = document.querySelector(".elements");
const content = document.querySelector(".content");
const popupLink = popupOpenCard.querySelector(".popup__photo");
const popupName = popupOpenCard.querySelector(".popup__description");
const cardTemplate = document
  .querySelector("#element-template")
  .content.querySelector(".element");

addButton.addEventListener("click", openPopupAddCard);
editButton.addEventListener("click", openPopupEditInfo);
formEditInfo.addEventListener("submit", handleEditFormSubmit);
formAddCard.addEventListener("submit", handleAddFormSubmit);
document.addEventListener("keydown", keyHandler);
popupEditInfo.addEventListener("click", handleCloseByClick);
popupAddCard.addEventListener("click", handleCloseByClick);
popupOpenCard.addEventListener("click", handleCloseByClick);

validateInputs();

function hideAllErrors() {
  hideInputError(popupEditInfo, nameInput);
  hideInputError(popupEditInfo, aboutInput);
  hideInputError(popupAddCard, placeInput);
  hideInputError(popupAddCard, linkInput);
}

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
}
function closePopup(obj) {
  obj.classList.remove("popup_active");
}

function openPopupEditInfo() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(popupEditInfo);
  hideAllErrors();
  setEventListeners(formEditInfo);
}

function openPopupAddCard() {
  openPopup(popupAddCard);
  formAddCard.reset();
  hideAllErrors();
  handleInactiveSaveButton(savePopupAddCard)
  setEventListeners(formAddCard);
}

function openPopupFullCard() {
  openPopup(popupOpenCard);
}

function closePopupEdit() {
  closePopup(popupEditInfo);
  document.removeEventListener("keydown", keyHandler);
}

function closePopupAdd() {
  closePopup(popupAddCard);
  document.removeEventListener("keydown", keyHandler);
}

function closePopupFullCard() {
  closePopup(popupOpenCard);
  document.removeEventListener("keydown", keyHandler);
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = `${nameInput.value}`;
  profileAbout.textContent = `${aboutInput.value}`;
  closePopupEdit();
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  renderCard(
    {
      name: placeInput.value,
      link: linkInput.value,
    },
    elementsSection
  );
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
  openPopupFullCard();
  const cardLink = evt.target.closest(".element__pic").src;
  const cardName = evt.target.closest(".element").textContent;
  popupLink.src = cardLink;
  popupLink.alt = cardName;
  popupName.textContent = cardName;
};

const getCardElement = (cardData) => {
  const cardElement = cardTemplate.cloneNode(true);
  const linkElement = cardElement.querySelector(".element__pic");
  linkElement.src = cardData.link;
  linkElement.alt = cardData.name;
  cardElement.querySelector(".element__text").textContent = cardData.name;
  cardElement
    .querySelector(".element__delete-btn")
    .addEventListener("click", handleDeleteIcon);
  cardElement
    .querySelector(".element__like-btn")
    .addEventListener("click", handleLikeIcon);
  linkElement.addEventListener("click", handleOpenPicture);
  return cardElement;
};

const renderCard = (item, elementsSection) => {
  elementsSection.prepend(getCardElement(item));
};

initialCards.forEach((item) => {
  renderCard(item, elementsSection);
});
