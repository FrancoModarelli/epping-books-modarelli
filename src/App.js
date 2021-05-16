import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductContainer from './components/Products/ProductContainer'
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductContainer />
    </div>
  );
}

export default App;
