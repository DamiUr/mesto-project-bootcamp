const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
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
const popupAdd = document.querySelector('#add');
const formAdd = popupAdd.querySelector('.popup__form');
const placeInput = formAdd.querySelector('#place');
const urlInput = formAdd.querySelector('#url');
const profileName = document.querySelector('.profile__name');
const work = document.querySelector('.profile__description');
const popupEdit = document.querySelector('#edit');
const formEdit = popupEdit.querySelector('.popup__form'); /**находим форму в Dom*/
const nameInput = formEdit.querySelector('#name'); /** Находим поля формы в DOM*/
const workInput = formEdit.querySelector('#work'); /** Находим поля формы в DOM*/
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popups = Array.from(document.querySelectorAll('.popup'));
const closeButtons = document.querySelectorAll('.popup__close');
const popupPhoto = document.querySelector('.popup_type_photo');
const bigPhoto = popupPhoto.querySelector('.popup__photo');
const bigPhotoCaption = popupPhoto.querySelector('.popup__photo-caption');
const template = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.cards');


/** пишем функцию создания карточки cloneItem, клонирование карточки, вставка данных и return получившегося DOM элемента карточки **/
function createCard(item) {
  const newItem = template.cloneNode(true);
  const photo = newItem.querySelector('.cards__photo');
  const text = newItem.querySelector('.cards__photo-title');
  const likeButton = newItem.querySelector('.cards__like-button');
  const deleteButton = newItem.querySelector('.cards__delete-button');
  photo.src = item.link;
  photo.alt = item.name;
  text.textContent = item.name;
  likeButton.addEventListener('click', pressLikeButton);
  deleteButton.addEventListener('click', pressDeleteButton);
  photo.addEventListener('click', openPopupPhoto);
  return newItem;
}

/** создаем функцию лайка **/
function pressLikeButton(evt) {
  evt.target.classList.toggle('cards__like-button_active');
}

/** создаем функцию удаления **/
function pressDeleteButton(evt) {
  evt.target.closest('.cards__element').remove();
}

/** создаем обработчик открытия попапа изображения*/
function openPopupPhoto(evt) {
  openPopup(popupPhoto);
  bigPhoto.src = evt.target.src;
  bigPhoto.alt = evt.target.alt;
  bigPhotoCaption.textContent = evt.target.alt;
};

/** код который из массива карточек, создает и добавляет карточки на страницу*/
initialCards.forEach((card) => {
  const newItem = createCard(card);
  cardsContainer.appendChild(newItem);
});


/**функция closePopup*/
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape);
}

/*кнопка esc закрытие пересмотреть исправление*/
function handleEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

/**открытие попапа*/
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
}


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

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  cardsContainer.prepend(
    createCard({ name: placeInput.value, link: urlInput.value })
  );
  closePopup(popupAdd);
  placeInput.value = "";
  urlInput.value = "";
}


formEdit.addEventListener('submit', handleFormEditSubmit);
formAdd.addEventListener('submit', handleFormAddSubmit);


popups.forEach(function(popup) {
  popup.addEventListener('click', function(evt) {
    if (evt.currentTarget === evt.target) {
      closePopup(evt.target);
    }
  });
});





