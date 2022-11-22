import { closePopup } from "../components/utils.js";


/*кнопка esc закрытие пересмотреть исправление*/
export function handleEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

export function handleOutside(event) {
  const isClickInside = !!event.target.closest('.popup__container');
  if (!isClickInside) {
    closePopup(openedPopup);
  };
};

