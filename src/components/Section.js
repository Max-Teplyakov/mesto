export default class Section {
  constructor({ items, renderer }, containerteSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerteSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._initialArray.forEach((item) => {
      this._container.append(this._renderer(item));
    });
  }
}
