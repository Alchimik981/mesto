let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-btn')
let addButton = profile.querySelector('.profile__add-btn');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close');


function openEditPopup() {
  popup.classList.add('popup_active');
}

editButton.addEventListener('click', openEditPopup);

function closeEditPopup() {
  popup.classList.remove('popup_active');
}

closePopup.addEventListener('click', closeEditPopup);




