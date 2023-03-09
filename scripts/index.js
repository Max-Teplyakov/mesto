import FormValidator from './FormValidator.js';
import Card from './Card.js';
import initialCards from './data.js';

const options = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__form-save-btn',
    inactiveButtonClass: 'popup__form-save-btn_inactive',
    inputErrorClass: 'popup__form-input_type_error',
    errorClass: 'popup__form-input-error_active'
}
// Попап Профиль
const popupList = Array.from(document.querySelectorAll('.popup'));
const popupProfile = document.querySelector('.popup_type_profile');
const popupProfileOpenBtn = document.querySelector('.profile__redact');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about-me');
const formElementProfile = document.querySelector('.popup__form-profile');
const nameInput = formElementProfile.querySelector('.popup__form-input_person_name');
const jobInput = formElementProfile.querySelector('.popup__form-input_person_about-me');

// Попап Карточки
const popupCardOpen = document.querySelector('.profile__add-button');
const popupCardContain = document.querySelector('.popup_type_card');
const formElementCard = document.querySelector('.popup__form-card');
const cardNameInput = formElementCard.querySelector('.popup__form-input_card_name');
const cardLinkInput = formElementCard.querySelector('.popup__form-input_card_src');

//Попап общее
const popupCloseBtn = document.querySelectorAll('.popup__close-btn');
const cardsContainer = document.querySelector('.elements');

const profileFormValidate = new FormValidator(options, formElementProfile);
const cardFormValidate = new FormValidator(options, formElementCard);

profileFormValidate.enableValidation();
cardFormValidate.enableValidation();

function createCard(item) {
    const cardElement = new Card(item.link, item.name, '#element', openPopup).generateCard();
    return cardElement;
}

function renderInitialElements(cardElements) {
    cardsContainer.append(
        ...cardElements.map((cardElement) => {
            return createCard(cardElement);
        })
    );
}
renderInitialElements(initialCards)

function handleFormSubmitProfile(evt) {
    evt.preventDefault();
    profileJob.textContent = jobInput.value;
    profileName.textContent = nameInput.value;
    closePopup(popupProfile);
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
        closePopup(document.querySelector('.popup_opened'))
    };
};


// Открытие попапа карточки
popupCardOpen.addEventListener('click', () => {
    openPopup(popupCardContain);
    const buttonElement = Array.from(document.querySelectorAll('.popup__form-save-btn'));
    buttonElement.forEach((item) => {
        item.setAttribute('disabled', '');
        item.classList.add('popup__form-save-btn_inactive');
    });
});

// Открытие попапа профиля
popupProfileOpenBtn.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupProfile);
});

//Закрытие попап по оверлей
popupList.forEach((popup) => {
    popup.addEventListener('mouseup', (event) => {
        const targetClassList = event.target.classList; // запишем в переменную класс элемента, на котором произошло событие
        if (targetClassList.contains('popup') || targetClassList.contains('popup__close')) { // проверяем наличие класса попапа ИЛИ кнопки закрытия
            closePopup(popup); // если один из классов присутствует, то закрываем попап
        }
    });
});

function handlerFormSubmitCard(evt) {
    evt.preventDefault();
    cardsContainer.prepend(createCard({ name: cardNameInput.value, link: cardLinkInput.value }));

    closePopup(popupCardContain);
    evt.target.reset();
    const buttonElement = Array.from(document.querySelectorAll('.popup__form-save-btn'));
    buttonElement.forEach((item) => {
        item.setAttribute('disabled', '');
        item.classList.add('popup__form-save-btn_inactive');
    })
}

formElementProfile.addEventListener('submit', handleFormSubmitProfile);
formElementCard.addEventListener('submit', handlerFormSubmitCard);
