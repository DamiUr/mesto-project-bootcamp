import { handleEscape, handleOutside } from "../components/modal.js";

/**закрытие попапа*/
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', handleOutside);
  document.removeEventListener('keydown', handleEscape);
}
  
  
  
  /**открытие попапа*/
  export function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEscape);
  }
