import React from 'react'
import Cart from './Cart'
// import { FiShoppingCart } from "react-icons/fi";
import { useState } from 'react';
import AddItem from './AddItem';
function Header() {

  let [cartOpen, setCartOpen] = useState(false);
  let [newProductOpen, setnewProductOpen] = useState(false);
 


  return (
    <div className='header'>
   
        <span className ='cart-label' style={{color: !cartOpen ? 'green':'red'}} onClick={()=>{setCartOpen(cartOpen = !cartOpen)}}>
        {!cartOpen ? 'Открыть корзину' : 'Закрыть корзину'}</span>
        <p>{cartOpen ? <Cart/>:null}</p> 
<hr />
        <span className ='cart-label' style={{color: !newProductOpen ? 'grey':'black'}} onClick={()=>{setnewProductOpen(newProductOpen = !newProductOpen)}}>
        {!newProductOpen ? 'New product' : 'Close form'}</span>
        <p>{newProductOpen ? <AddItem/>:null}</p> 

    </div>
  )
}

export default Header
