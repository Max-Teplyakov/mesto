export const options = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-save-btn",
  inactiveButtonClass: "popup__form-save-btn_inactive",
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "popup__form-input-error_active",
};

// Массив С Карточками
export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const cardsContainer = ".elements";
// Попап Профиль
export const popupProfile = ".popup_type_profile";
export const popupProfileOpenBtn = document.querySelector(".profile__redact");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__about-me");
export const formElementProfile = document.querySelector(
  ".popup__form-profile"
);

// Попап Карточки
export const popupCardOpen = document.querySelector(".profile__add-button");
export const popupCardContain = ".popup_type_card";
export const formElementCard = document.querySelector(".popup__form-card");

// Попап Аватара профиля
export const popupAvatarSelector = ".popup_type_avatar";
export const popupAvatarOpenBtn = document.querySelector(
  ".profile__avatar-edit"
);
export const formElementAvatar = document.querySelector(".popup__form-avatar");

//Попап Картинки
export const popupWithImageSelector = ".popup_type_image";

//Попап удаления
export const popupCardDeleteSelector = ".popup_type_delete";
