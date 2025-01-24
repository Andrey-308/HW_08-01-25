import React from 'react';
import { observer } from 'mobx-react-lite';
import cartStore from '../state/cart';
import CartItem from './CartItem';

function Cart() {
  const handleRemove = (id) => {
    cartStore.removeItem(id);
  };

  return (
    <div>
      {/* <h2>Корзина</h2> */}
      {cartStore.items.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div style={{display:'flex'}} className='cart-item'>
          {cartStore.items.map((item) => (
            <CartItem style={{border:'20px solid red'}} key={item.id} item={item} onRemove={handleRemove} />
          ))}
           <p>
            <strong>Итого сумма:</strong> ${cartStore.totalPrice}
          </p>
        </div>
      )}
    </div>
  );
}

export default observer(Cart);
