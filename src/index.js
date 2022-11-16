import "./pages/index.css";

import { initialCards } from "./components/array.js";
import { closePopup, openPopup } from "./components/utils.js";
import { createCard, handleFormAddSubmit} from "./components/cards.js";


const cardsContainer = document.querySelector('.cards');
export const template = document.querySelector('#card-template').content.querySelector('.cards__element');
export const popupAdd = document.querySelector('#add');
const formAdd = popupAdd.querySelector('.popup__form');
export const placeInput = formAdd.querySelector('#place');
export const urlInput = formAdd.querySelector('#url');
const profileName = document.querySelector('.profile__name');
const work = document.querySelector('.profile__description');
const popupEdit = document.querySelector('#edit');
const formEdit = popupEdit.querySelector('.popup__form'); /**находим форму в Dom*/
const nameInput = formEdit.querySelector('#name'); /** Находим поля формы в DOM*/
const workInput = formEdit.querySelector('#work'); 
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
export const popups = Array.from(document.querySelectorAll('.popup'));
const closeButtons = document.querySelectorAll('.popup__close');
export const popupPhoto = document.querySelector('.popup_type_photo');
export const bigPhoto = popupPhoto.querySelector('.popup__photo');
export const bigPhotoCaption = popupPhoto.querySelector('.popup__photo-caption');

/**код который из массива карточек, создает и добавляет карточки на страницу*/
initialCards.forEach((card) => {
  const newItem = createCard(card);
  cardsContainer.appendChild(newItem);
});


/*функция handleCloseButton */
function handleCloseButton(evt) {
  const popup = evt.target.closest('.popup');
  closePopup(popup);
}

/** кнопка (х) закрытия на фото*/
closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener('click', handleCloseButton);
});

/** открытие кнопки add (добавить карточку*/
addButton.addEventListener('click', function () {
  openPopup(popupAdd);
});

/** открытие кнопки edit (редактировать карточку*/
editButton.addEventListener('click', function () {
  openPopup(popupEdit);
});


function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value; /**  Получите значение полей из свойства value */
  work.textContent = workInput.value;
  closePopup(popupEdit);
}



/** Обработчик редактирования профиля*/
formEdit.addEventListener('submit', handleFormEditSubmit);
/** Обработчик добавления новой карточки*/
formAdd.addEventListener('submit', handleFormAddSubmit);


export const settings = {
  formSelector: 'popup__form',
  inputSelector: 'popup__row',
  submitButtonSelector: 'popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__row_type_error',
  errorClass: 'popup__form-input-error_active'
};





