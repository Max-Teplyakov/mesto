let popup = document.querySelector('.popup')
let popupOpenBtn = document.querySelector('.profile__redact');
let popupCloseBtn = popup.querySelector('.popup__close-btn');
let popupSaveBtn = popup.querySelector('.popup__save-btn');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__about-me');

popupOpenBtn.addEventListener('click', function activePoap() {
    popup.classList.toggle('popup_opened');
})

popupCloseBtn.addEventListener('click', function inactivePoap() {
    popup.classList.toggle('popup_opened');
})


// Находим форму в DOM
let formElement = document.querySelector('.popup__form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_person_name');// Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.popup__input_person_about-me');// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    profileJob.textContent = jobInput.value;
    profileName.textContent = nameInput.value;
    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    // Вставьте новые значения с помощью textContent

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

formElement.addEventListener('submit', handleFormSubmit);
popupSaveBtn.addEventListener('click', function inactivePoap() {
    popup.classList.toggle('popup_opened');
})

