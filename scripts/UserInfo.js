export default class UserInfo {
  constructor({ title, caption }) {
    this._title = document.querySelector(title);
    this._caption = document.querySelector(caption);
  }

  getUserInfo() {
    const inputName = this._title.textContent;
    const inputAbout = this._caption.textContent;
    return { inputName, inputAbout };
  }

  setUserInfo({ inputName, inputAbout }) {
    this._title.textContent = inputName;
    this._caption.textContent = inputAbout;
  }
}
