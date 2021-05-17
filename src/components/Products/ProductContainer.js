import React from 'react'
import { useState } from 'react'
import './ProductContainer.css'
import '../Buttons/Buttons.css'


const ProductContainer = () =>{

    
    //Counter para sumar y restar
    const [counter,setCounter] = useState(1);

    //Manejamos el cambio del counter
    const changeCounter =(value) =>{
        if (counter < 1){
        setCounter(1);
        }else{
        setCounter(counter + value);
        }
    }


    return(
        <div className="card">
            <img src="#" className="card-img-top" alt="Producto Epping Books" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <div className='container'>
                    <button className='btn-- btn--small btn--secondary' onClick={() => changeCounter(-1)}><i className='fas fa-minus' /></button>
                    <input type='text' className='counter' name='qty' value={counter} min='1' readOnly/>
                    <button className='btn-- btn--small btn--primary' onClick={() => changeCounter(+1)}><i className='fas fa-plus' /></button>
                </div>
            </div>
        </div>
    )
}

export default ProductContainer