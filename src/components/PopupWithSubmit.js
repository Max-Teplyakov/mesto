import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector, handleDeleteCardFormSubmit) {
    super(popupSelector);
    this.handleDeleteCardFormSubmit = handleDeleteCardFormSubmit;
    this._popupForm = this._popupSelector.querySelector(".popup__form");
    this._popupBtn = this._popupSelector.querySelector(".popup__form-save-btn");
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleDeleteCardFormSubmit(...this._values);
    });
    super.setEventListeners();
  }

  loadingButtonText(isLoading) {
    if (isLoading) {
      this._popupBtn.textContent = "Удаление...";
    } else {
      this._popupBtn.textContent = "Да";
    }
  }

  open(...values) {
    super.open();
    this._values = [...values];
  }
}
