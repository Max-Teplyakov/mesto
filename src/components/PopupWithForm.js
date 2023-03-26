import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, hadleFormSubmit) {
    super(popupSelector);
    this._hadleFormSubmit = hadleFormSubmit;
    this._inputFormList =
      this._popupSelector.querySelectorAll(".popup__form-input");
    this._popupForm = this._popupSelector.querySelector(".popup__form");
  }

  _getInputValues() {
    const data = {};
    this._inputFormList.forEach((input) => {
      data[input.name] = input.value;
    });
    return data;
  }
  setInputValues(data) {
    this._inputFormList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._hadleFormSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }
}
