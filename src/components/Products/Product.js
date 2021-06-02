import React from 'react'
import ButtonCounter from '../Buttons/ButtonCounter' 
import './Product.css'
import '../Buttons/Buttons.css'

const Product = ({ imagen, title, stock, initial }) => {


    return(
    <>    
        <div className="card">
                <img src={ imagen } className="card-img-top" alt={ title } />
                <div className="image_detail image_detail--blur">
                    <p className={ title.length > 20 ? 'titleImage__' : 'titleImage'}>{ title }</p>  
                </div>
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                    <ButtonCounter initial= { initial } stock={ stock } />
                <hr/>
                <div id='btnDetalle' >
                    <button className='btn-- btn--medium btn--primary'>Añadir</button>
                </div>
            </div>
        </div>
    </>
    );
}


export default Product;