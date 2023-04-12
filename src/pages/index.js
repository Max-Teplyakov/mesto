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
  .then(([userData, cardsArray]) => {
    userInfo.setUserInfo({ name: userData.name, aboutme: userData.about });
    userInfo.setUserAvatar(userData.avatar);
    userInfo.setUserId(userData._id);

    cardList.renderItems(cardsArray);
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
  api
    .addCard({ name: data.title, link: data.data })
    .then((card) => {
      cardList.addItem(createCard(card));
      popupWithFormCard.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
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
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupWithFormProfile.loadingButtonText(false);
    });
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
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupWithFormAvatar.loadingButtonText(false);
    });
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
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupWithFormDelete.loadingButtonText(false);
    });
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
