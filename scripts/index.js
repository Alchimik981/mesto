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
const content = document.querySelector('.content')
const popupLink = popupOpenCard.querySelector(".popup__photo");
const popupName = popupOpenCard.querySelector(".popup__description");


addButton.addEventListener("click", openPopupAddCard);
editButton.addEventListener("click", openPopupEditInfo);
closePopupEditInfo.addEventListener("click", closePopupEdit);
closePopupAddCard.addEventListener("click", closePopupAdd);
closePopupOpenCard.addEventListener("click", closePopupFullCard);
formEditInfo.addEventListener("submit", handleEditFormSubmit);
formAddCard.addEventListener("submit", handleAddFormSubmit);
editButton.addEventListener("keydown", keyHandler);
addButton.addEventListener("keydown", keyHandler);
popupEditInfo.addEventListener("click", closePopupByOverlay);
popupAddCard.addEventListener("click", closePopupByOverlay);
popupOpenCard.addEventListener("click", closePopupByOverlay);
document.addEventListener("keydown", keyHandler);

function closePopupByOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopupEdit();
    closePopupAdd();
    closePopupFullCard();
  }
}

function keyHandler(evt) {
  if (evt.key === "Escape") {
    closePopupEdit();
    closePopupAdd();
    closePopupFullCard();
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
}

function openPopupAddCard() {
  openPopup(popupAddCard);
  formAddCard.reset();
}

function openPopupFullCard() {
  openPopup(popupOpenCard);
}

function closePopupEdit() {
  closePopup(popupEditInfo);
}

function closePopupAdd() {
  closePopup(popupAddCard);
}

function closePopupFullCard() {
  closePopup(popupOpenCard);
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

const handleLikeIcon = (initialCards) => {
  initialCards.target.classList.toggle("element__like-btn_active");
};

const handleDeleteIcon = (initialCards) => {
  const card = initialCards.target.closest(".element");
  card.remove();
};

const handleOpenPicture = (initialCards) => {
  const cardLink = initialCards.target.closest(".element__pic").src;
  const cardName = initialCards.target.closest(".element").textContent;
  popupLink.src = cardLink;
  popupName.textContent = cardName;
};

const getCardElement = (initialCards) => {
  const cardElement = document
    .querySelector("#element-template")
    .content.cloneNode(true);
  cardElement.querySelector(".element__pic").src = initialCards.link;
  cardElement.querySelector(".element__text").textContent = initialCards.name;
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

