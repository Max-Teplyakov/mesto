export default class Section {
  constructor({ renderer }, containerteSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerteSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(renderedItems) {
    renderedItems.forEach((item) => {
      this._container.append(this._renderer(item));
    });
  }
}
