// Попап Профиль
const popup = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupProfileOpenBtn = document.querySelector('.profile__redact');
const popupProfileCloseBtn = popupProfile.querySelector('.popup__close-btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about-me');
const formElementProfile = document.querySelector('.popup-form__profile');
const nameInput = formElementProfile.querySelector('.popup-form__input_person_name');
const jobInput = formElementProfile.querySelector('.popup-form__input_person_about-me');

// Попап Карточки
const popupCardOpen = document.querySelector('.profile__add-button');
const popupCardContain = document.querySelector('.popup_type_card');
const popupCardClose = document.querySelector('.popup__btn-card-close');
const formElementCard = document.querySelector('.popup-form__card');
const cardNameInput = formElementCard.querySelector('.popup-form__input_card_name');
const cardLinkInput = formElementCard.querySelector('.popup-form__input_card_src');

// Попап Картинки
const popupImageConatin = document.querySelector('.popup_type_image');
const popupImageBtnClose = document.querySelector('.popup__btn-image-close');
const elementImagePopup = document.querySelector('.popup__image');
const elemenTextPopup = document.querySelector('.popup__title-image');

//Попап общее
const popupInput = document.querySelectorAll('.popup-form__input');
const popupCloseBtn = document.querySelectorAll('.popup__close-btn');

// Template
const elementTemplate = document.querySelector('#element').content.querySelector('.element');
const cardsContainer = document.querySelector('.elements');

function renderCards(items) {
    const cards = items.map((item) => {
        return createCard({ name: item.name, link: item.link })
    })
    cardsContainer.append(...cards);
}

renderCards(initialCards);

function createCard(item) {
    const cardElement = elementTemplate.cloneNode(true);
    const elementImageCard = cardElement.querySelector('.element__img');

    elementImageCard.src = item.link;
    elementImageCard.alt = item.name;
    cardElement.querySelector('.element__title').textContent = item.name;

    cardElement.querySelector('.element__btn-delete-card').addEventListener('click', () => {
        cardElement.remove();
    });

    cardElement.querySelector('.element__btn-like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__btn-like_active')
    });

    elementImageCard.addEventListener('click', () => {
        elementImagePopup.src = item.link;
        elementImagePopup.alt = item.name;
        elemenTextPopup.textContent = item.name;

        openPopup(popupImageConatin);
    });

    return cardElement
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEscape);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEscape);
}
//Закрытие попапов
popupCloseBtn.forEach((button) => {
    const popupBtn = button.closest('.popup');
    button.addEventListener('click', () => {
        closePopup(popupBtn);
    })
})

//фукция закрытия по Esc
function closePopupByEscape(evt) {
    if (evt.key === 'Escape') {
        openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup)
    }
}

// Открытие попапа карточки
popupCardOpen.addEventListener('click', () => {
    openPopup(popupCardContain)
});

// Открытие попапа профиля
popupProfileOpenBtn.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupProfile);
});

const closePopupByClickOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
}
popup.forEach((item) => {
    item.addEventListener('click', closePopupByClickOnOverlay)
})

function handleFormSubmitProfile(evt) {
    evt.preventDefault();

    profileJob.textContent = jobInput.value;
    profileName.textContent = nameInput.value;

    closePopup(popupProfile);
}

function handlerFormSubmitCard(evt) {
    evt.preventDefault();

    const cardElement = createCard({ name: cardNameInput.value, link: cardLinkInput.value })

    cardsContainer.prepend(cardElement);

    closePopup(popupCardContain);
    evt.target.reset();
}

formElementProfile.addEventListener('submit', handleFormSubmitProfile);
formElementCard.addEventListener('submit', handlerFormSubmitCard);
