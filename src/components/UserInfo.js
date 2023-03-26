export default class UserInfo {
  constructor(name, job) {
    this._name = name;
    this._job = job;
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
}
