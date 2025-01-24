import { makeAutoObservable } from 'mobx';


class ProductState {
   productList = [
    { id: 1, name: 'Pencil', price: 5, description:' description 1'},
    { id: 2, name: 'Ink', price: 3 ,description:' description 2'},
    { id: 3, name: 'Pen', price: 10 ,description:' description 3'},
    { id: 4, name: 'Paper', price: 7,description:' description 4' },
  ];

  constructor() {
    makeAutoObservable(this);
  }
  
  add(product) {
    console.log('add(item)',product)
    console.log('1-this.products',this.productList)
    this.productList.push(product);
     console.log('2-this.productList',this.productList)
  }

  remove(id) {
    this.productList = this.productList.filter((product) => product.id !==id);
  }


}

const productsState= new ProductState();

export default productsState;
