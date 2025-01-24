import React from 'react';


function CartItem({ item, onRemove }) {
  return (
    <div style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
      <p>
        <strong>{item.name}</strong>
      </p>
      <p>цена: ${item.price}</p>
      <button onClick={() => onRemove(item.id)}>Удалить</button>
    </div>
  );
}

export default CartItem;