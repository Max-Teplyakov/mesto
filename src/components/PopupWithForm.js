import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, hadleFormSubmit) {
    super(popupSelector);
    this._hadleFormSubmit = hadleFormSubmit;
    this._inputFormList =
      this._popupSelector.querySelectorAll(".popup__form-input");
    this._popupForm = this._popupSelector.querySelector(".popup__form");
    this._popupBtn = this._popupSelector.querySelector(".popup__form-save-btn");
  }

  _getInputValues() {
    const inputData = {};
    this._inputFormList.forEach((input) => {
      inputData[input.name] = input.value;
    });
    return inputData;
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

  loadingButtonText(isLoading) {
    if (isLoading) {
      this._popupBtn.textContent = "Сохранение...";
    } else {
      this._popupBtn.textContent = "Сохранить";
    }
  }
}
