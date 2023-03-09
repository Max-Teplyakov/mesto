class Card {
    constructor(link, name, templateSelector, openPopup) {
        this._link = link;
        this._name = name;
        this._templateSelector = templateSelector;
        this._popupImageConatin = document.querySelector('.popup_type_image');
        this._elementImagePopup = document.querySelector('.popup__image');
        this._elemenTextPopup = document.querySelector('.popup__title-image');

        this._openPopup = openPopup;
    }

    _getTemplate() {
        const elementTemplate = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return elementTemplate;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._elementImageCard = this._element.querySelector('.element__img');
        this._elementLikeImage = this._element.querySelector('.element__btn-like');
        this._elementDeleteCard = this._element.querySelector('.element__btn-delete-card');
        this._elementTitle = this._element.querySelector('.element__title');

        this._elementImageCard.src = this._link;
        this._elementImageCard.alt = this._name;
        this._elementTitle.textContent = this._name;

        this._setEventListeners(this._elementImageCard);

        return this._element
    }

    _handleLikeImageOnClick() {
        this._elementLikeImage.classList.toggle('element__btn-like_active')
    }
    _handleDeleteCardOnClick() {
        this._element.remove();
    }

    _handleImageOnClick() {
        this._elementImagePopup.src = this._link;
        this._elementImagePopup.alt = this._name;
        this._elemenTextPopup.textContent = this._name;
        this._openPopup(this._popupImageConatin);
    }

    _setEventListeners() {
        this._elementDeleteCard.addEventListener('click', () => {
            this._handleDeleteCardOnClick();
        });
        this._elementLikeImage.addEventListener('click', () => {
            this._handleLikeImageOnClick();
        });
        this._elementImageCard.addEventListener('click', () => {
            this._handleImageOnClick();
        });
    }
}

export default Card;