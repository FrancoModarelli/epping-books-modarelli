import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import './App.css';
import ProductContainer from './components/Products/ProductContainer'
import Cart from './components/Cart/Cart'
import Nosotros from './components/AboutUs/Nosotros'
import Contacto from './components/Contact/Contacto'

const routes = [
  { path: "/", element:<ProductContainer stock={5} initial={1} /> },
  { path: "/tienda", element:<ProductContainer stock={1} initial={1} /> },
  { path: "/nosotros", element:<Nosotros /> },
  { path: "/contacto", element:<Contacto /> },
  { path: "/cart", element:<Cart />}
]

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {routes.map(({ path, element},index) => (
          <Route key={index} exact path={path}>
            {element}
          </Route>
                ))}
  
      </Switch>
    </BrowserRouter>
  );
}

export default App;
