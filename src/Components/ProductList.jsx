import { observer } from 'mobx-react-lite';
import React from 'react';
import cartStore from '../state/cart';
import productsState from '../state/products';




function ProductList() {
  
  const handleAddToCart = (product) => {
    cartStore.addItem(product);
  };


      

  return (
    <div>
      <h2>Доступно к заказу</h2>
      {productsState.productList.map((product) => {
        // console.log('product',product)        
        return(
        <div key={product.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
          <p className='productName' >
            <strong>{product.name}</strong>
          </p>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Добавить в корзину</button>
          
        </div>
      )})}
     
    </div>
  );
}

export default observer(ProductList);