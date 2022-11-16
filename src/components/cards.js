import {
    template,
    bigPhotoCaption,
    bigPhoto,
    popupPhoto,
    placeInput,
    urlInput,
    popupAdd,
  } from "../index.js";

  import { closePopup, openPopup } from "../components/utils.js";
  

/** пишем функцию создания карточки cloneItem, клонирование карточки, вставка данных и return получившегося DOM элемента карточки */
export function createCard(item) {
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


/** добавляем новую карточку **/
export function handleFormAddSubmit(evt) {
    evt.preventDefault();
    cardsContainer.prepend(
        createCard({ name: placeInput.value, link: urlInput.value })
    );
    closePopup(popupAdd);
    evt.target.reset();
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




