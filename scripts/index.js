let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-btn')
let addButton = profile.querySelector('.profile__add-btn');
let popup = document.querySelector('.popup');
let closePopup = popup.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.input__text_type_name');
let aboutInput = document.querySelector('.input__text_type_about');
let savePopup = document.querySelector('.popup__save-btn');
let elementText = document.querySelector('.element__text');
let elementPic = document.querySelector('.element__pic');
let elementContainer = document.querySelector('.elements');
let popupTitle = popup.querySelector('.popup__title');
let popupPic = document.querySelector('.popup-pic')

function popupClose() {
  popup.classList.remove('popup_active');
}

function popupOpen() {
  popup.classList.add('popup_active');
}

function popupPicOpen() {
  popupPic.classList.add('popup-pic_active');
}

function popupPicClose() {
  popupPic.classList.remove('popup-pic_active');
}

function popupInput() {
  nameInput = document.querySelector('.input-text_type_name').value;
  aboutInput = document.querySelector('.input-text_type_about').value;
}


addButton.addEventListener('click', openAddPopup);
editButton.addEventListener('click', openEditPopup);
closePopup.addEventListener('click', popupClose);


function editFormSubmit(evt) {
  evt.preventDefault();
  popupInput()
  profileName.textContent = `${nameInput}`;
  profileAbout.textContent = `${aboutInput}`;
  popupClose();
}


function openEditPopup() {
  popupOpen()
  popupTitle.innerText = 'Редактировать профиль';
  nameInput = popup.querySelector('.input-text_type_name').value = "Жак-Ив Кусто";
  nameInput = popup.querySelector('.input-text_type_name').placeholder = 'Введите имя';
  aboutInput = popup.querySelector('.input-text_type_about').value = "Исследователь океана";
  aboutInput = popup.querySelector('.input-text_type_about').placeholder = 'О себе';
  formElement.addEventListener('submit', editFormSubmit);
}

function addFormSubmit(evt) {
  evt.preventDefault();
  popupInput()
  const cardTemplate = document.querySelector('#element-template').content;
  const elementTemplate = cardTemplate.querySelector('.element').cloneNode(true);
  elementTemplate.querySelector('.element__pic').src = `${aboutInput}`;
  elementTemplate.querySelector('.element__text').textContent = `${nameInput}`;
  elementContainer.prepend(elementTemplate);
  popupClose();
}

function openAddPopup() {
  popupOpen();
  popupTitle.innerText = 'Новое место';
  nameInput = popup.querySelector('.input-text_type_name').value = "";
  nameInput = popup.querySelector('.input-text_type_name').placeholder = 'Название';
  aboutInput = popup.querySelector('.input-text_type_about').value = "";
  aboutInput = popup.querySelector('.input-text_type_about').placeholder = 'Добавьте ссылку';
  formElement.addEventListener('submit', addFormSubmit);
}


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const likeCard = (evt) => {
  const like = evt.target.closest('.element__btn') || evt.target.closest('.element__btn_active') ;
  like.classList.toggle('element__btn_active');
  like.classList.toggle('element__btn');
}

const deleteCard = (evt) => {
  const card = evt.target.closest('.element');
  card.remove();
}

function openCard () {
  const fullPicture = document.querySelector('.popup-pic');
  fullPicture.classList.toggle('popup-pic_active');
}



function addCards () {
initialCards.forEach((item) => {
  const cardTemplate = document.querySelector('#element-template').content;
  const elementTemplate = cardTemplate.querySelector('.element').cloneNode(true);
  elementTemplate.querySelector('.element__pic').src = item.link;
  elementTemplate.querySelector('.element__text').textContent = item.name;
  elementContainer.append(elementTemplate);
  elementTemplate.querySelector('.element__delete-btn').addEventListener('click', deleteCard);
  elementTemplate.querySelector('.element__btn').addEventListener('click', likeCard);
  elementTemplate.querySelector('.element__pic').addEventListener('click', popupPicOpen);


})
}

addCards()




