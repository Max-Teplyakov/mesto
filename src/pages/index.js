import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  options,
  cardsContainer,
  popupProfile,
  popupProfileOpenBtn,
  profileName,
  profileJob,
  formElementProfile,
  popupCardOpen,
  popupCardContain,
  formElementCard,
  popupWithImageSelector,
} from "../utils/data.js";
import "./index.css";

const handleCardClick = (data) => {
  popupWithImage.open(data);
};
//Создание карточки
function createCard(item) {
  const cardElement = new Card(
    { data: item, handleCardClick },
    "#element"
  ).generateCard();
  return cardElement;
}

//Создание карточеk
const cardList = new Section(
  {
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
const handleAddCardFormSubmit = ({ title, data }) => {
  cardList.addItem(createCard({ name: title, link: data }));
};
const popupWithFormCard = new PopupWithForm(
  popupCardContain,
  handleAddCardFormSubmit
);
popupWithFormCard.setEventListeners();

//Попап Профиля
const handleProfileFormSubmit = (info) => {
  userInfo.setUserInfo(info);
};
const popupWithFormProfile = new PopupWithForm(
  popupProfile,
  handleProfileFormSubmit
);
popupWithFormProfile.setEventListeners();

//Валидация форм
const profileFormValidate = new FormValidator(options, formElementProfile);
const cardFormValidate = new FormValidator(options, formElementCard);
profileFormValidate.enableValidation();
cardFormValidate.enableValidation();

// Открытие попапа карточки
function openPopupCardOnClick() {
  cardFormValidate.resetValidation();
  popupWithFormCard.open();
}

popupCardOpen.addEventListener("click", openPopupCardOnClick);

// Открытие попапа профиля
function openPopupProfileOnClick() {
  popupWithFormProfile.setInputValues(userInfo.getUserInfo());
  profileFormValidate.resetValidation();
  popupWithFormProfile.open();
}

popupProfileOpenBtn.addEventListener("click", openPopupProfileOnClick);
