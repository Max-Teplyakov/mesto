export default class UserInfo {
  constructor(name, job) {
    this._name = name;
    this._job = job;
    this._userAvatar = document.querySelector(".profile__avatar");
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      aboutme: this._job.textContent,
    };
  }

  setUserInfo({ name, aboutme }) {
    this._name.textContent = name;
    this._job.textContent = aboutme;
  }

  setUserAvatar(url) {
    this._userAvatar.src = url;
  }

  setUserId(_id) {
    this._userId = _id;
  }

  getUserId() {
    return this._userId;
  }
}
