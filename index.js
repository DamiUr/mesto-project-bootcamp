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

const template = document.querySelector('#card-template').content;
const cards = document.querySelector('.cards');

/** пишем функцию создания карточки cloneItem, клонирование карточки, вставка данных и return получившегося DOM элемента карточки **/
function cloneItem(item) {
  const newItem = template.cloneNode(true);
  const photo = newItem.querySelector('.cards__photo');
  const text = newItem.querySelector('.cards__photo-title');
  const likeButton = newItem.querySelector('.cards__like-button');
  const deleteButton = newItem.querySelector('.cards__delete-button');
  photo.src = item.link;
  photo.alt = item.name;
  text.textContent = item.name;
  return newItem;
}

/** пишем код, который из массива карточек, используя функцию создания карточки, создает и добавляет карточки на страницу **/
function renderItem(item) {
  const newItem = cloneItem(item);
  cards.appendChild(newItem);
}

initialCards.forEach((item) => {
  renderItem(item);
});
