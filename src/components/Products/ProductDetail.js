import React from 'react'
import ButtonCounter from '../Buttons/ButtonCounter' 
import './Product.css'
import '../Buttons/Buttons.css'

const ProductDetail = ({ imagen, title, stock, initial, detail }) => {

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
                        <ButtonCounter initial= { initial } stock={ stock } />
                        <hr/>
                        <div id='btnDetalle' >
                            <button className='btn-- btn--medium btn--primary'>Añadir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}


export default ProductDetail;