import React from 'react'
import { useState } from 'react'
import './Product.css'
import '../Buttons/Buttons.css'

const Product = ({ imagen, title, stock, initial, detail}) => {

        //Counter para sumar y restar
        const [counter,setCounter] = useState(initial);
        //Manejamos el cambio del counter
        const changeCounter =(value) =>{
            setCounter(counter + value);
        }

    return(
    <>    
        <div className="card">
            <img src={imagen} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className='container--'>
                    <button className='btn-- btn--small btn--secondary' onClick={() => changeCounter(-1)} disabled = { counter === 1 ? true : null}><i className='fas fa-minus' /></button>
                    <input type='text' className='counter' value={ counter } readOnly/>
                    <button className='btn-- btn--small btn--primary' onClick={() => changeCounter(+1)} disabled = { counter === stock ? true : null}><i className='fas fa-plus' /></button>
                </div>
                <hr/>
                <div id='btnDetalle' >
                    <button className='btn-- btn--medium btn--primary' >Detalles</button>
                </div>
            </div>
        </div>
    </>    
    );
}


export default Product