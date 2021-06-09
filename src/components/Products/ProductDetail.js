import React from 'react'
import { useState } from 'react'
import ItemsCounter from '../Buttons/ItemsCounter' 
import './Product.css'
import '../Buttons/Buttons.css'
import AddButton from '../Buttons/AddButton'
import { EndButton } from '../Buttons/EndButton'

const ProductDetail = ({ imagen, title, stock, initial, detail }) => {


    //estado para cambiar boton
    const [selectButton, setSelectButton] = useState(false);

    //Counter para sumar y restar
    const [counter,setCounter] = useState(initial);

    //cantidad del producto
    const [buy, setBuy] = useState([])


    const addToCart = () =>{
        const newItem = {
            id: buy.length,
            title: title,
            quantity: counter
        }

        setBuy([ ...buy, newItem]) 
        console.log(title);
        console.log(counter);
        console.log(buy);

        setSelectButton(true);
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