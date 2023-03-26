class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const elementTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return elementTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementImageCard = this._element.querySelector(".element__img");
    this._elementLikeImage = this._element.querySelector(".element__btn-like");
    this._elementDeleteCard = this._element.querySelector(
      ".element__btn-delete-card"
    );
    this._elementTitle = this._element.querySelector(".element__title");

    this._elementImageCard.src = this._link;
    this._elementImageCard.alt = this._name;
    this._elementTitle.textContent = this._name;

    this._setEventListeners(this._elementImageCard);

    return this._element;
  }

  _handleLikeImageOnClick() {
    this._elementLikeImage.classList.toggle("element__btn-like_active");
  }
  _handleDeleteCardOnClick() {
    this._element.remove();
  }

  _handleImageOnClick() {
    this._handleCardClick({ name: this._name, link: this._link });
  }

  _setEventListeners() {
    this._elementDeleteCard.addEventListener("click", () => {
      this._handleDeleteCardOnClick();
    });
    this._elementLikeImage.addEventListener("click", () => {
      this._handleLikeImageOnClick();
    });
    this._elementImageCard.addEventListener("click", (evt) => {
      this._handleImageOnClick(evt);
    });
  }
}

export default Card;
