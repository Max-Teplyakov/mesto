import Api from "../components/Api.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import UserInfo from "../components/UserInfo.js";
import {
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
  popupAvatarSelector,
  popupAvatarOpenBtn,
  popupCardDeleteSelector,
  formElementAvatar,
} from "../utils/data.js";
import "./index.css";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-63",
  headers: {
    authorization: "998e2e8b-88af-4a48-b83c-6d7bca9f9f59",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserData(), api.getInitialCards()])
  .then((data) => {
    userInfo.setUserInfo({ name: data[0].name, aboutme: data[0].about });
    userInfo.setUserAvatar(data[0].avatar);
    userInfo.setUserId(data[0]._id);

    cardList.renderItems(data[1]);
  })
  .catch((err) => console.log(err));

const handleCardClick = (data) => {
  popupWithImage.open(data);
};
const handleDeleteClick = (_id, elem) => {
  popupWithFormDelete.open(_id, elem);
};

const handleLikeCardClick = (
  _id,
  isLiked,
  addLike,
  deleteLike,
  likeNumberCounter
) => {
  if (isLiked) {
    api
      .deleteLikeCard(_id)
      .then((data) => {
        likeNumberCounter(data);
        deleteLike();
      })
      .catch((err) => console.log(err));
  } else {
    api
      .likeCard(_id)
      .then((data) => {
        likeNumberCounter(data);
        addLike();
      })
      .catch((err) => console.log(err));
  }
};
//Создание карточки
function createCard(item) {
  const userId = userInfo.getUserId();
  const cardElement = new Card(
    {
      data: item,
      userId,
      handleCardClick,
      handleDeleteClick,
      handleLikeCardClick,
    },
    "#element"
  ).generateCard();
  return cardElement;
}

//Создание карточеk
const cardList = new Section(createCard, cardsContainer);

//Профиль
const userInfo = new UserInfo(profileName, profileJob);

//Попап Картинка
const popupWithImage = new PopupWithImage(popupWithImageSelector);
popupWithImage.setEventListeners();

//Попап Карточки
const handleAddCardFormSubmit = (data) => {
  popupWithFormCard.loadingButtonText(true);
  api.addCard({ name: data.title, link: data.data }).then((card) => {
    cardList.addItem(createCard(card));
    popupWithFormCard.close();
    popupWithFormCard.loadingButtonText(false);
  });
};
const popupWithFormCard = new PopupWithForm(
  popupCardContain,
  handleAddCardFormSubmit
);
popupWithFormCard.setEventListeners();

//Попап Профиля
const handleProfileFormSubmit = (info) => {
  popupWithFormProfile.loadingButtonText(true);
  api
    .replaceUserData(info)
    .then((users) => {
      userInfo.setUserInfo({ name: users.name, aboutme: users.about });
      popupWithFormProfile.close();
      popupWithFormProfile.loadingButtonText(false);
    })
    .catch((err) => console.log(err));
};
const popupWithFormProfile = new PopupWithForm(
  popupProfile,
  handleProfileFormSubmit
);
popupWithFormProfile.setEventListeners();

//Попап аватара
const handleAvatarFormSubmit = (data) => {
  popupWithFormAvatar.loadingButtonText(true);
  api
    .repllaceAvatar(data)
    .then((data) => {
      userInfo.setUserAvatar(data.avatar);
      popupWithFormAvatar.close();
      popupWithFormAvatar.loadingButtonText(false);
    })
    .catch((err) => console.log(err));
};

const popupWithFormAvatar = new PopupWithForm(
  popupAvatarSelector,
  handleAvatarFormSubmit
);

popupWithFormAvatar.setEventListeners();

//Попап Удаления
const handleDeleteCardFormSubmit = (_id, removeCard) => {
  popupWithFormDelete.loadingButtonText(true);
  api
    .deleteCard(_id)
    .then(() => {
      removeCard();
      popupWithFormDelete.close();
      popupWithFormDelete.loadingButtonText(false);
    })
    .catch((err) => console.log(err));
};

const popupWithFormDelete = new PopupWithSubmit(
  popupCardDeleteSelector,
  handleDeleteCardFormSubmit
);

popupWithFormDelete.setEventListeners();

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

//Открытие попапа аватара
function openPopupAvatarOnClick() {
  avatarFormValidate.resetValidation();
  popupWithFormAvatar.open();
}

popupAvatarOpenBtn.addEventListener("click", openPopupAvatarOnClick);

//Валидация форм
const profileFormValidate = new FormValidator(options, formElementProfile);
const cardFormValidate = new FormValidator(options, formElementCard);
const avatarFormValidate = new FormValidator(options, formElementAvatar);

profileFormValidate.enableValidation();
cardFormValidate.enableValidation();
avatarFormValidate.enableValidation();

// const formValidators = {}

// // Включение валидации
// const enableValidation = (options) => {
//   const formList = Array.from(document.querySelectorAll(config.formSelector))
//   formList.forEach((formElement) => {
//     const validator = new FormValidator(formElement, config)
// // получаем данные из атрибута `name` у формы
//     const formName = formElement.getAttribute('name')

//    // вот тут в объект записываем под именем формы
//     formValidators[formName] = validator;
//    validator.enableValidation();
//   });
// };

// enableValidation(config);
