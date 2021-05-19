import React from 'react'
import { useState } from 'react'
import './ProductContainer.css'
import '../Buttons/Buttons.css'


const ProductContainer = ({initial, stock, greeting}) =>{
    
    //Counter para sumar y restar
    const [counter,setCounter] = useState(Number(initial));


    //Manejamos el cambio del counter
    const changeCounter =(value) =>{
        setCounter(counter + value);
    }


    return(
        <div className="card">
            <img src="#" className="card-img-top" alt="Producto Epping Books" />
            <div className="card-body">
                <h5 className="card-title">{ greeting }</h5>
                <div className='container'>
                    <button className='btn-- btn--small btn--secondary' onClick={() => changeCounter(-1)} disabled = { counter === 1 ? true : null}><i className='fas fa-minus' /></button>
                    <input type='text' className='counter' value={ counter } readOnly/>
                    <button className='btn-- btn--small btn--primary' onClick={() => changeCounter(+1)} disabled = { counter === stock ? true : null}><i className='fas fa-plus' /></button>
                </div>
            </div>
        </div>
    )
}

export default ProductContainer