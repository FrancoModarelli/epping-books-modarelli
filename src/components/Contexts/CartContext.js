import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [buy, setBuy] = useState({onCart:[], totalBuy:0});    

    const addProduct = (product) => {
        setBuy({ ...buy, onCart:[...buy.addProduct, product], totalBuy: (buy.totalBuy + (product.price * product.quantity))})
        console.log(buy);
    }

    const clearBuy = () => {
        setBuy({onCart: [], totalBuy:0});
        console.log("Carrito Vacio");
    }

    const removeProduct = (id) => {
        return (buy.addProduct.filter(book => book.id !==id))
    }

    const isInBuy = (title) =>{
        return(buy.addProduct.some(book=> book.title ===title))
    }

    return <CartContext.Provider value={[{buy, addProduct,clearBuy,removeProduct,isInBuy}]}>
        { children }
    </CartContext.Provider>;
}