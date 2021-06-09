import React from 'react'
import { useState } from 'react'
import ItemsCounter from '../Buttons/ItemsCounter' 
import './Product.css'
import '../Buttons/Buttons.css'

const Product = ({ imagen, title, stock, initial }) => {

        //Counter para sumar y restar
        const [counter,setCounter] = useState(initial);

    return(
    <>    
        <div className="card">
                <img src={ imagen } className="card-img-top" alt={ title } />
                <div className="image_detail image_detail--blur">
                    <p className={ title.length > 20 ? 'titleImage__' : 'titleImage'}>{ title }</p>  
                </div>
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                    <ItemsCounter initial= { initial } stock={ stock }  counter={ counter } setCounter={ setCounter }/>
            </div>
        </div>
    </>
    );
}


export default Product;