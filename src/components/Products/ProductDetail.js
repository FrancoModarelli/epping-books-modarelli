import React from 'react'
import { useState } from 'react'
import ItemsCounter from '../Buttons/ItemsCounter' 
import './Product.css'
import '../Buttons/Buttons.css'
import AddButton from '../Buttons/AddButton'
import { EndButton } from '../Buttons/EndButton'
import { useCartContext } from '../Contexts/CartContext'

const ProductDetail = ({ imagen, title, stock, initial, detail }) => {

    const buy = useCartContext();

    //estado para cambiar boton
    const [selectButton, setSelectButton] = useState(false);

    //Counter para sumar y restar
    const [counter,setCounter] = useState(initial);

    const addToCart = () =>{
        setSelectButton(true);
        //pregunto si ya esta en la compra
        if(!buy.isInBuy(title)){
            buy.addProduct({title: title, quantity: counter});
            console.log("me meti en la compra")
        }else{
            alert("ya estoy en la compra");
        }
    }

    return(
    <>    
        <div className="card maxi-Width">
            <div className="row no-gutters">
                <div className="col-sm-5 img_detail">
                    <img src={ imagen } className="card-img-top h-100 " alt={ title }/>
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <h5 className="card-title">{ title }</h5>
                        <p className="card-text">{ detail }</p>
                        {selectButton ? <EndButton />
                            :
                            <>
                                <ItemsCounter initial= { initial } stock={ stock } counter={ counter } setCounter={ setCounter }/>
                                <hr/>
                                <AddButton toCart = {addToCart}/>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}


export default ProductDetail;