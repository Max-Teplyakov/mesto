export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  //получить список всех карточек в виде массива (GET)
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }
  //добавить карточку (POST)
  addCard() {}
  //удалить карточку (DELETE)
  deleteCard() {}
  //получить данные пользователя (GET)
  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }
  //заменить данные пользователя (PATCH)
  replaceUserData({ nameUser, aboutUser }) {
    fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: nameUser,
        about: aboutUser,
      }),
    });
  }
  //заменить аватар (PATCH)
  repllaceAvatar() {}
  //“залайкать” карточку (PUT)
  likeCard() {}
  //удалить лайк карточки (DELETE)
  deletelikeCard() {}
}
