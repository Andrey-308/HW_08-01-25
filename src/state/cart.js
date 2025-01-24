import { makeAutoObservable } from "mobx";

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  get totalPrice() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

const cartStore = new CartStore();
export default cartStore;