class Card {
  constructor(
    { data, userId, handleCardClick, handleDeleteClick, handleLikeCardClick },
    templateSelector
  ) {
    this._link = data.link;
    this._name = data.name;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._likeNumber = data.likes.length;
    this._userId = userId;
    this._isLiked = data.likes.some((like) => {
      return like._id === this._userId;
    });
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeCardClick;
    this._handleDeleteIconClick = handleDeleteClick;
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
    this._elementLikeNumber = this._element.querySelector(
      ".element__number-like"
    );
    this._elementDeleteCard = this._element.querySelector(
      ".element__btn-delete-card"
    );
    this._elementTitle = this._element.querySelector(".element__title");

    if (this._isLiked) {
      this._addLike();
    }
    this._elementImageCard.src = this._link;
    this._elementImageCard.alt = this._name;
    this._elementTitle.textContent = this._name;
    this._elementLikeNumber.textContent = this._likeNumber;

    if (this._ownerId === this._userId) {
      this._elementDeleteCard.classList.add("element__btn-delete-card_visible");
    }

    this._setEventListeners();

    return this._element;
  }

  _handleLikeImageOnClick() {
    this._handleLikeClick(
      this._id,
      this._isLiked,
      this._addLike.bind(this),
      this._deleteLike.bind(this),
      this._likeNumberCounter.bind(this)
    );
  }

  _handleImageOnClick() {
    this._handleCardClick({ name: this._name, link: this._link });
  }

  _likeNumberCounter(data) {
    this._likeArray = data.likes.length;
  }

  _addLike() {
    this._elementLikeImage.classList.add("element__btn-like_active");
    this._isLiked = true;
    this._elementLikeNumber.textContent = this._likeArray;
  }

  _deleteLike() {
    this._elementLikeImage.classList.remove("element__btn-like_active");
    this._isLiked = false;
    this._elementLikeNumber.textContent = this._likeArray;
  }

  removeCard(_id) {
    this._element.remove();
  }

  _handleDeleteCardOnClick() {
    this._handleDeleteIconClick(this._id, this.removeCard.bind(this));
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
