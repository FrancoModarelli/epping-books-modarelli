import React from 'react'
import './Buttons.css'

const AddButton = ({ toCart }) => {

    return (
        <div className='btnDetalle'>
            <button className='btn-- btn--medium btn--primary' onClick={toCart}>Añadir</button>
        </div>
    )
}

export default AddButton;