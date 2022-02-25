export default class LocalStorage {
  constructor() {
    this.storage = {};
  }

  setItem = (key, value) => {
    this.storage[key] = value;
  };

  getItem = (key) => this.storage[key];
}
