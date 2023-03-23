class FormValidator {
    constructor(options, formElement) {
        this._formElement = formElement;
        this._formSelector = options.formSelector;
        this._inputSelector = options.inputSelector;
        this._submitButtonSelector = options.submitButtonSelector;
        this._inactiveButtonClass = options.inactiveButtonClass;
        this._inputErrorClass = options.inputErrorClass;
        this._errorClass = options.errorClass;
    }

    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

        this.toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this.toggleButtonState();
            });
        });
    }

    _showInputError(inputElement, validationMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = validationMessage;
        errorElement.classList.add(this._errorClass);
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            const validationMessage = inputElement.validationMessage;
            this._showInputError(inputElement, validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.setAttribute('disabled', '');
            this._buttonElement.classList.add(this._inactiveButtonClass);
        } else {
            this._buttonElement.removeAttribute('disabled');
            this._buttonElement.classList.remove(this._inactiveButtonClass);
        }
    }

    enableValidation() {
        this._setEventListeners();
    }

    _hasInvalidInput() {
        return this._inputList.some((input) => {
            return !input.validity.valid;
        });
    }
    resetValidation() {
        this.toggleButtonState();
        this._inputList.forEach((input) => {
            this._hideInputError(input);
        });
    }
}

export default FormValidator