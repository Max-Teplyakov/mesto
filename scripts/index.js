let popup = document.querySelector('.popup')
let popupOpenBtn = document.querySelector('.profile__redact');
let popupCloseBtn = popup.querySelector('.popup__close-btn');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__about-me');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_person_name');
let jobInput = formElement.querySelector('.popup__input_person_about-me');

function openPopap() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closePopap() {
    popup.classList.remove('popup_opened');
}

popupOpenBtn.addEventListener('click', openPopap);

popupCloseBtn.addEventListener('click', closePopap);

function handleFormSubmit(evt) {
    evt.preventDefault();

    profileJob.textContent = jobInput.value;
    profileName.textContent = nameInput.value;

    closePopap();
}

formElement.addEventListener('submit', handleFormSubmit);


