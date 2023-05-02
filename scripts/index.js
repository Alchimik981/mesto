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
let savePopup = document.querySelector('.popup__save-btn')

function popupClose() {
  popup.classList.remove('popup_active');
}

editButton.addEventListener('click', () => popup.classList.add('popup_active'));
closePopup.addEventListener('click', popupClose);


function handleFormSubmit(evt) {
  evt.preventDefault();

  nameInput = document.querySelector('.input-text_type_name').value;
  aboutInput = document.querySelector('.input-text_type_about').value;

  profileName.textContent = `${nameInput}`;
  profileAbout.textContent = `${aboutInput}`;

  popupClose();
}

formElement.addEventListener('submit', handleFormSubmit);



