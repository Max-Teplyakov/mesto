import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector, handlerSubmitAvatar) {
    super(popupSelector);
    this._handlerSubmitAvatar = handlerSubmitAvatar;
  }

  setEventListeners() {
    super.setEventListeners();
    this._handlerSubmitAvatar();
  }
}
