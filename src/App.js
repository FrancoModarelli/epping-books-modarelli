import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ProductContainer from './components/Products/ProductContainer'
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <ProductContainer stock={5} initial={1} />
        </Route>
        <Route path='/nosotros'>

        </Route>
        <Route path='/contacto'>

        </Route>
        <Route path='/cart'>
          
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
