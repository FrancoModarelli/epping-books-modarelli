import React from 'react'
import { useState } from 'react'
import ItemsCounter from '../Buttons/ItemsCounter' 
import './Product.css'
import '../Buttons/Buttons.css'
import AddButton from '../Buttons/AddButton'

const ProductDetail = ({ imagen, title, stock, initial, detail }) => {


    //cantidad del producto
    const [buy, setBuy] = useState([])


    const addToCart = (title, counter) =>{
        const newItem = {
            id: buy.length,
            title: title,
            quantity: counter
        }

        setBuy([ ...buy, newItem]) 
        console.log(title);
        console.log(counter);
        console.log(buy);
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
                        <ItemsCounter initial= { initial } stock={ stock }/>
                        <hr/>
                        <AddButton toCart = { addToCart }/>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}


export default ProductDetail;