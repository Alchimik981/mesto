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

editButton.addEventListener('click', () => popup.classList.add('popup_active'));
closePopup.addEventListener('click', () => popup.classList.remove('popup_active'));

function handleFormSubmit(evt) {
  evt.preventDefault();

  nameInput = document.getElementById('input_name').value;
  aboutInput = document.getElementById('input_about').value;

  profileName.textContent = `${nameInput}`;
  profileAbout.textContent = `${aboutInput}`;

  popup.classList.toggle('popup_active');
}

formElement.addEventListener('submit', handleFormSubmit);



