// Массив С Карточками
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const popupProfile = document.querySelector('.popup_type_profile')
const popupProfileOpenBtn = document.querySelector('.profile__redact');
const popupProfileCloseBtn = popupProfile.querySelector('.popup__close-btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about-me');
const formElement = document.querySelector('.popup__form-profile');
const nameInput = formElement.querySelector('.popup__input_person_name');
const jobInput = formElement.querySelector('.popup__input_person_about-me');
const elementTemplate = document.querySelector('#element').content.querySelector('.element');
const cardsContainer = document.querySelector('.elements');
const popupCardOpen = document.querySelector('.profile__add-button');
const popupCardContain = document.querySelector('.popup_type_card');
const popupCardClose = document.querySelector('.popup__btn-card-close');
const formElementCard = document.querySelector('.popup__form-card');
const cardNameInput = formElementCard.querySelector('.popup__input_card_name');
const cardLinkInput = formElementCard.querySelector('.popup__input_card_src');
const popupImageConatin = document.querySelector('.popup_type_image');
const popupImageBtnClose = document.querySelector('.popup__btn-image-close');
const elementImagePopup = document.querySelector('.popup__image');


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
        document.querySelector('.popup__title-image').textContent = item.name;

        handleLikeClick(popupImageConatin);
    });

    return cardElement
}

function handleLikeClick(popup) {
    popup.classList.toggle('popup_opened');
}

// Открытие и закрытие попапа карточки
popupCardOpen.addEventListener('click', () => {
    handleLikeClick(popupCardContain)
});
popupCardClose.addEventListener('click', () => {
    handleLikeClick(popupCardContain)
});
// Открытие и закрытие попапа профиля
popupProfileOpenBtn.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    handleLikeClick(popupProfile);
});
popupProfileCloseBtn.addEventListener('click', () => {
    handleLikeClick(popupProfile);
});
//Закрытие попапа Изображения
popupImageBtnClose.addEventListener('click', () => {
    handleLikeClick(popupImageConatin)
})

function handleFormSubmitProfile(evt) {
    evt.preventDefault();

    profileJob.textContent = jobInput.value;
    profileName.textContent = nameInput.value;

    handleLikeClick(popupProfile);
}

function handlerFormSubmitCard(evt) {
    evt.preventDefault();

    const cardElement = createCard({ name: cardNameInput.value, link: cardLinkInput.value })

    cardsContainer.prepend(cardElement);

    handleLikeClick(popupCardContain);
    cardLinkInput.value = '';
    cardNameInput.value = '';
}

formElement.addEventListener('submit', handleFormSubmitProfile);
formElementCard.addEventListener('submit', handlerFormSubmitCard);

