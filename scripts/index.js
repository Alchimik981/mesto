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


function popupClose() {
  popup.classList.remove('popup_active');
}

function popupOpen() {
  popup.classList.add('popup_active');
}

addButton.addEventListener('click', openAddPopup);
editButton.addEventListener('click', openEditPopup);
closePopup.addEventListener('click', popupClose);

function editFormSubmit(evt) {
  evt.preventDefault();

  nameInput = document.querySelector('.input-text_type_name').value;
  aboutInput = document.querySelector('.input-text_type_about').value;

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

  nameInput = document.querySelector('.input-text_type_name').value;
  aboutInput = document.querySelector('.input-text_type_about').value;

  elementText = document.querySelector('.element__text').textContent = `${nameInput}`;
  elementPic = document.querySelector('.element__pic').src = `${aboutInput}`;

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


function addCards(elementText, elementPic) {
  const cardTemplate = document.querySelector('#element-template').content;
  const elementTemplate = cardTemplate.querySelector('.element').cloneNode(true);

  elementTemplate.querySelector('.element__pic').textContent = elementPic;
  elementTemplate.querySelector('.element__text').textContent = elementText;
  elementContainer.after(elementTemplate);
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

const cardsName = initialCards.map(function (el) {
  return el.name;
});
console.log(cardsName.name)

const cardsLink = initialCards.map(function (el) {
  return el.link;
});
console.log(cardsLink)

initialCards.forEach(() => {
  const cardTemplate = document.querySelector('#element-template').content;
  const elementTemplate = cardTemplate.querySelector('.element').cloneNode(true);
  elementTemplate.querySelector('.element__pic').src = cardsLink[0];
  elementTemplate.querySelector('.element__text').textContent = cardsName[0];
  elementContainer.append(elementTemplate);
})

