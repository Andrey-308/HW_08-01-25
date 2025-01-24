import React from 'react';
import ProductList from './Components/ProductList';
import Header from './Components/Header';
import productsState from './state/products';




const products = productsState.products;

function App() {
  return (
    <div>
      
      <hr />
      <div className="header">
     
        <Header />
      </div>
      <hr />
      <ProductList products={products} />
    </div>
  );
}

export default App;
