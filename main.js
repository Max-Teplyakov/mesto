(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var n,r;return n=e,(r=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"addCard",value:function(e){var t=this,n=e.name,r=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"replaceUserData",value:function(e){var t=this,n=e.name,r=e.aboutme;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return t._getResponseData(e)}))}},{key:"repllaceAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._getResponseData(e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteLikeCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,n;return t=e,(n=[{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){if(e.validity.valid)this._hideInputError(e);else{var t=e.validationMessage;this._showInputError(e,t)}}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",""),this._buttonElement.classList.add(this._inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const a=i;function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function e(t,n){var r=this,o=t.data,i=t.userId,a=t.handleCardClick,u=t.handleDeleteClick,l=t.handleLikeCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=o.link,this._name=o.name,this._id=o._id,this._ownerId=o.owner._id,this._likeNumber=o.likes.length,this._userId=i,this._isLiked=o.likes.some((function(e){return e._id===r._userId})),this._templateSelector=n,this._handleCardClick=a,this._handleLikeClick=l,this._handleDeleteIconClick=u}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImageCard=this._element.querySelector(".element__img"),this._elementLikeImage=this._element.querySelector(".element__btn-like"),this._elementLikeNumber=this._element.querySelector(".element__number-like"),this._elementDeleteCard=this._element.querySelector(".element__btn-delete-card"),this._elementTitle=this._element.querySelector(".element__title"),this._isLiked&&this._addLike(),this._elementImageCard.src=this._link,this._elementImageCard.alt=this._name,this._elementTitle.textContent=this._name,this._elementLikeNumber.textContent=this._likeNumber,this._ownerId===this._userId&&this._elementDeleteCard.classList.add("element__btn-delete-card_visible"),this._setEventListeners(),this._element}},{key:"_handleLikeImageOnClick",value:function(){this._handleLikeClick(this._id,this._isLiked,this._addLike.bind(this),this._deleteLike.bind(this),this._likeNumberCounter.bind(this))}},{key:"_handleImageOnClick",value:function(){this._handleCardClick({name:this._name,link:this._link})}},{key:"_likeNumberCounter",value:function(e){this._likeArray=e.likes.length}},{key:"_addLike",value:function(){this._elementLikeImage.classList.add("element__btn-like_active"),this._isLiked=!0,this._elementLikeNumber.textContent=this._likeArray}},{key:"_deleteLike",value:function(){this._elementLikeImage.classList.remove("element__btn-like_active"),this._isLiked=!1,this._elementLikeNumber.textContent=this._likeArray}},{key:"removeCard",value:function(e){this._element.remove()}},{key:"_handleDeleteCardOnClick",value:function(){this._handleDeleteIconClick(this._id,this.removeCard.bind(this))}},{key:"_setEventListeners",value:function(){var e=this;this._elementDeleteCard.addEventListener("click",(function(){e._handleDeleteCardOnClick()})),this._elementLikeImage.addEventListener("click",(function(){e._handleLikeImageOnClick()})),this._elementImageCard.addEventListener("click",(function(t){e._handleImageOnClick(t)}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const s=c;function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var y=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._container.append(t._renderer(e))}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.addEventListener("mousedown",(function(t){var n=t.target.classList;(n.contains("popup")||n.contains("popup__close-btn"))&&e.close()}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).popupImage=t._popupSelector.querySelector(".popup__image"),t.popupTitle=t._popupSelector.querySelector(".popup__title"),t}return t=a,(n=[{key:"open",value:function(e){this.popupImage.src=e.link,this.popupImage.alt=e.name,this.popupTitle.textContent=e.name,_(S(a.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._hadleFormSubmit=t,n._inputFormList=n._popupSelector.querySelectorAll(".popup__form-input"),n._popupForm=n._popupSelector.querySelector(".popup__form"),n._popupBtn=n._popupSelector.querySelector(".popup__form-save-btn"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputFormList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setInputValues",value:function(e){this._inputFormList.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){E(j(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._hadleFormSubmit(e._getInputValues())})),E(j(a.prototype),"setEventListeners",this).call(this)}},{key:"loadingButtonText",value:function(e){this._popupBtn.textContent=e?"Сохранение...":"Сохранить"}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e)).handleDeleteCardFormSubmit=t,n._popupForm=n._popupSelector.querySelector(".popup__form"),n._popupBtn=n._popupSelector.querySelector(".popup__form-save-btn"),n}return t=a,n=[{key:"setEventListeners",value:function(){var e=this;this._popupForm.addEventListener("submit",(function(t){var n;t.preventDefault(),e.handleDeleteCardFormSubmit.apply(e,function(e){if(Array.isArray(e))return I(e)}(n=e._values)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())})),R(B(a.prototype),"setEventListeners",this).call(this)}},{key:"loadingButtonText",value:function(e){this._popupBtn.textContent=e?"Удаление...":"Да"}},{key:"open",value:function(){R(B(a.prototype),"open",this).call(this);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._values=[].concat(t)}}],n&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var q=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._job=n,this._userAvatar=document.querySelector(".profile__avatar")}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,aboutme:this._job.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.aboutme;this._name.textContent=t,this._job.textContent=n}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e}},{key:"setUserId",value:function(e){this._userId=e}},{key:"getUserId",value:function(){return this._userId}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),V={formSelector:".popup__form",inputSelector:".popup__form-input",submitButtonSelector:".popup__form-save-btn",inactiveButtonClass:"popup__form-save-btn_inactive",inputErrorClass:"popup__form-input_type_error",errorClass:"popup__form-input-error_active"},F=document.querySelector(".profile__redact"),N=document.querySelector(".profile__name"),J=document.querySelector(".profile__about-me"),M=document.querySelector(".popup__form-profile"),H=document.querySelector(".profile__add-button"),$=document.querySelector(".popup__form-card"),z=document.querySelector(".profile__avatar-edit"),G=document.querySelector(".popup__form-avatar");function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q=new n({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-63",headers:{authorization:"998e2e8b-88af-4a48-b83c-6d7bca9f9f59","Content-Type":"application/json"}});Promise.all([Q.getUserData(),Q.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];te.setUserInfo({name:o.name,aboutme:o.about}),te.setUserAvatar(o.avatar),te.setUserId(o._id),ee.renderItems(i)})).catch((function(e){return console.log(e)}));var W=function(e){ne.open(e)},X=function(e,t){ae.open(e,t)},Y=function(e,t,n,r,o){t?Q.deleteLikeCard(e).then((function(e){o(e),r()})).catch((function(e){return console.log(e)})):Q.likeCard(e).then((function(e){o(e),n()})).catch((function(e){return console.log(e)}))};function Z(e){var t=te.getUserId();return new s({data:e,userId:t,handleCardClick:W,handleDeleteClick:X,handleLikeCardClick:Y},"#element").generateCard()}var ee=new y(Z,".elements"),te=new q(N,J),ne=new k(".popup_type_image");ne.setEventListeners();var re=new L(".popup_type_card",(function(e){re.loadingButtonText(!0),Q.addCard({name:e.title,link:e.data}).then((function(e){ee.addItem(Z(e)),re.close()})).catch((function(e){return console.log(e)})).finally((function(){re.loadingButtonText(!1)}))}));re.setEventListeners();var oe=new L(".popup_type_profile",(function(e){oe.loadingButtonText(!0),Q.replaceUserData(e).then((function(e){te.setUserInfo({name:e.name,aboutme:e.about}),oe.close()})).catch((function(e){return console.log(e)})).finally((function(){oe.loadingButtonText(!1)}))}));oe.setEventListeners();var ie=new L(".popup_type_avatar",(function(e){ie.loadingButtonText(!0),Q.repllaceAvatar(e).then((function(e){te.setUserAvatar(e.avatar),ie.close()})).catch((function(e){return console.log(e)})).finally((function(){ie.loadingButtonText(!1)}))}));ie.setEventListeners();var ae=new A(".popup_type_delete",(function(e,t){ae.loadingButtonText(!0),Q.deleteCard(e).then((function(){t(),ae.close()})).catch((function(e){return console.log(e)})).finally((function(){ae.loadingButtonText(!1)}))}));ae.setEventListeners(),H.addEventListener("click",(function(){le.resetValidation(),re.open()})),F.addEventListener("click",(function(){oe.setInputValues(te.getUserInfo()),ue.resetValidation(),oe.open()})),z.addEventListener("click",(function(){ce.resetValidation(),ie.open()}));var ue=new a(V,M),le=new a(V,$),ce=new a(V,G);ue.enableValidation(),le.enableValidation(),ce.enableValidation()})();
//# sourceMappingURL=main.js.map