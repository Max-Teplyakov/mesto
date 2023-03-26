import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.popupImage = this._popupSelector.querySelector(".popup__image");
    this.popupTitle = this._popupSelector.querySelector(".popup__title");
  }

  open(data) {
    //подставляем данные и открываем поапп
    this.popupImage.src = data.link;
    this.popupImage.alt = data.name;
    this.popupTitle.textContent = data.name;
    super.open();
  }
}
