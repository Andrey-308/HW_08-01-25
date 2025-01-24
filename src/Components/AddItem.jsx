import React from 'react';

import productState from '../state/products';


function AddItem() {
  function handleSubmit(e) {
    console.log('run onSubmit');
    e.preventDefault();

    const product = {
      id: Date.now(),
      name: e.target.title.value,
      price: e.target.price.value,
      description: e.target.description.value,
    };
    console.log('e.target.title.value',e.target.title.value)
    console.log('product',product)

    productState.add(product);

    e.target.reset();
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <h6>New Product</h6>
      <input type="text" placeholder='Name' required name="title" />
      <hr />
      <input type="number" placeholder='Price' required name="price" />
      <hr />
      <input type="text" placeholder='Description' required name="description" />
      <hr />
      <button>Add</button>
    </form>
  );
}

export default AddItem;
