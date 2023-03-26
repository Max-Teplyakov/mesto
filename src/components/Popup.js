export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector.addEventListener("mousedown", (event) => {
      const targetClassList = event.target.classList; // запишем в переменную класс элемента, на котором произошло событие
      if (
        targetClassList.contains("popup") ||
        targetClassList.contains("popup__close-btn")
      ) {
        // проверяем наличие класса попапа ИЛИ кнопки закрытия
        this.close(); // если один из классов присутствует, то закрываем попап
      }
    });
  }
}
