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

function openEditPopup() {
  popupOpen()
  popupTitle.innerText = 'Редактировать профиль';
  nameInput = popup.querySelector('.input-text_type_name').value = "Жак-Ив Кусто";
  nameInput = popup.querySelector('.input-text_type_name').placeholder = 'Введите имя';
  aboutInput = popup.querySelector('.input-text_type_about').value = "Исследователь океана";
  aboutInput = popup.querySelector('.input-text_type_about').placeholder = 'О себе';
  formElement.addEventListener('submit', editFormSubmit);
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

function editFormSubmit(evt) {
  evt.preventDefault();

  nameInput = document.querySelector('.input-text_type_name').value;
  aboutInput = document.querySelector('.input-text_type_about').value;

  profileName.textContent = `${nameInput}`;
  profileAbout.textContent = `${aboutInput}`;
  popupClose();
}

function addFormSubmit(evt) {
  evt.preventDefault();

  nameInput = document.querySelector('.input-text_type_name').value;
  aboutInput = document.querySelector('.input-text_type_about').value;

  elementText.textContent = `${nameInput}`;
  elementPic = document.querySelector('.element__pic').src = `${aboutInput}`;
  popupClose();
}





