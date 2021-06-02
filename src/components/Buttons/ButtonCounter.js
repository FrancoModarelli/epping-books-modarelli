import React from 'react'
import { useState } from 'react'
import './Buttons.css'

const ButtonCounter = ({ stock, initial }) => {

    //Counter para sumar y restar
    const [counter,setCounter] = useState(initial);
    //Manejamos el cambio del counter
    const changeCounter =(value) =>{
        setCounter(counter + value);
    }

    return(
        <div className='container--'>
            <button id='btnLess' className='btn-- btn--small btn--secondary' onClick={() => changeCounter(-1)} disabled = { counter === 1 ? true : null}><i className='fas fa-minus' /></button>
            <input type='text' className='counter' value={ counter } readOnly/>
            <button id='btnMore' className='btn-- btn--small btn--primary' onClick={() => changeCounter(+1)} disabled = { counter === stock ? true : null}><i className='fas fa-plus' /></button>
        </div>
    )
}

export default ButtonCounter;