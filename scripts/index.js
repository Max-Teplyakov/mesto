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

const popup = document.querySelector('.popup')
const popupProfileOpenBtn = document.querySelector('.profile__redact');
const popupProfileCloseBtn = popup.querySelector('.popup__close-btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about-me');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_person_name');
const jobInput = formElement.querySelector('.popup__input_person_about-me');
const elementTemplate = document.querySelector('#element').content.querySelector('.element');
const elements = document.querySelector('.elements');
const popupCardOpen = document.querySelector('.profile__add-button');
const popupCardContain = document.querySelector('.popup_type_card');
const popupCardClose = document.querySelector('.popup-card__close-btn');
const formElementCard = document.querySelector('.popup__form_card');
const cardNameInput = formElementCard.querySelector('.popup__input_card_name');
const cardLinkInput = formElementCard.querySelector('.popup__input_card_src');
const popupImageConatin = document.querySelector('.popup_type_image');
const popupImageBtnClose = document.querySelector('.popup__close-btn-image');


function renderCards(items) {
    const cards = items.map((item) => {
        return createCard({ name: item.name, link: item.link })
    })
    elements.append(...cards);
}

renderCards(initialCards);

function createCard(item) {
    const cardElement = elementTemplate.cloneNode(true);
    cardElement.querySelector('.element__img').src = item.link;
    cardElement.querySelector('.element__img').alt = item.name;
    cardElement.querySelector('.element__title').textContent = item.name;

    cardElement.querySelector('.element__btn-delete-card').addEventListener('click', () => {
        cardElement.remove();
    });

    cardElement.querySelector('.element__btn-like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__btn-like_active')
    });

    cardElement.querySelector('.element__img').addEventListener('click', () => {
        document.querySelector('.popup__image').src = item.link;
        document.querySelector('.popup__title-image').textContent = item.name;

        popupImageConatin.classList.add('popup_opened');
    });

    return cardElement
}

function popupToggle(item) {
    item.classList.toggle('popup_opened');
}

// Открытие и закрытие попапа карточки
popupCardOpen.addEventListener('click', () => {
    popupToggle(popupCardContain)
});
popupCardClose.addEventListener('click', () => {
    popupToggle(popupCardContain)
});
// Открытие и закрытие попапа профиля
popupProfileOpenBtn.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popupToggle(popup);
});
popupProfileCloseBtn.addEventListener('click', () => {
    popupToggle(popup);
});
//Закрытие попапа Изображения
popupImageBtnClose.addEventListener('click', () => {
    popupToggle(popupImageConatin)
})

function handleFormSubmit(evt) {
    evt.preventDefault();

    profileJob.textContent = jobInput.value;
    profileName.textContent = nameInput.value;

    closePopap();
}

function handlerFormSubmitCard(evt) {
    evt.preventDefault();

    const cardElement = createCard({ name: cardNameInput.value, link: cardLinkInput.value })

    elements.prepend(cardElement);

    popupToggle(popupCardContain);
    cardLinkInput.value = '';
    cardNameInput.value = '';
}

formElement.addEventListener('submit', handleFormSubmit);
formElementCard.addEventListener('submit', handlerFormSubmitCard);

