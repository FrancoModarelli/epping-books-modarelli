import React from 'react'
import '../Buttons/Buttons.css'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    
    return(
        <Link to='/cart' id='btnCartWidget' className='btn btn--medium btn--primary'>
                <i className='fas fa-shopping-cart'></i>
        </Link>
    )
}

export default CartWidget