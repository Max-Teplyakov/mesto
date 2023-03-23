import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import initialCards from './data.js';
import options from './options.js';

const cardsContainer = document.querySelector('.elements');
// Попап Профиль
const popupProfile = document.querySelector('.popup_type_profile');
const popupProfileOpenBtn = document.querySelector('.profile__redact');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about-me');
const formElementProfile = document.querySelector('.popup__form-profile');

// Попап Карточки
const popupCardOpen = document.querySelector('.profile__add-button');
const popupCardContain = document.querySelector('.popup_type_card');
const formElementCard = document.querySelector('.popup__form-card');

//Попап Картинки
const popupWithImageSelector = document.querySelector('.popup_type_image');

const handleCardClick = (data) => {
    popupWithImage.open(data);
};
//Создание карточки
function createCard(item) {
    const cardElement = new Card({data: item, handleCardClick}, '#element').generateCard();
    return cardElement;
}

//Создание карточек
const cardList = new Section({
    items: initialCards,
    renderer: createCard,
},
cardsContainer
);
cardList.renderItems();

//Профиль
const userInfo = new UserInfo(profileName, profileJob);

//Попап Картинка
const popupWithImage = new PopupWithImage(popupWithImageSelector);
popupWithImage.setEventListeners();

//Попап Карточки
const addCardFormSubmit = ({title, data}) => {
    cardList.addItem(createCard({ name: title, link: data }));
};
const popupWithFormCard = new PopupWithForm(popupCardContain, addCardFormSubmit);
popupWithFormCard.setEventListeners();

//Попап Профиля
const profileFormSubmit = (info) => {
    userInfo.setUserInfo(info);
};
const popupWithFormProfile = new PopupWithForm(popupProfile, profileFormSubmit);
popupWithFormProfile.setEventListeners();

//Валидация форм
const profileFormValidate = new FormValidator(options, formElementProfile);
const cardFormValidate = new FormValidator(options, formElementCard);
profileFormValidate.enableValidation();
cardFormValidate.enableValidation();

// Открытие попапа карточки
function openPopupCardOnClick() {
    
    cardFormValidate.toggleButtonState();
    cardFormValidate.resetValidation();
    popupWithFormCard.open();
};

popupCardOpen.addEventListener('click', openPopupCardOnClick);

// Открытие попапа профиля
function openPopupProfileOnClick() {
     popupWithFormProfile.setInputValues(userInfo.getUserInfo());
        profileFormValidate.resetValidation();
        popupWithFormProfile.open();
}

popupProfileOpenBtn.addEventListener('click', openPopupProfileOnClick);

// function handleFormSubmitProfile(evt) {
//     popupWithFormProfile.setInputValues(userInfo.getUserInfo());
//     evt.preventDefault();
//     popupWithFormProfile.close();
// }

// function handlerFormSubmitCard(evt) {
//     evt.preventDefault();
//     cardsContainer.prepend(createCard({ name: cardNameInput.value, link: cardLinkInput.value }));
//     popupWithFormCard.close();
//     evt.target.reset();
//     cardFormValidate.toggleButtonState();
// }

// formElementProfile.addEventListener('submit', handleFormSubmitProfile);
// formElementCard.addEventListener('submit', handlerFormSubmitCard);

