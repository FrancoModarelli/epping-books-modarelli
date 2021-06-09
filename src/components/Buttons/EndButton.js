import './Buttons.css'
import { Link } from 'react-router-dom'

export const EndButton = () => {
    return(
        <>
            <hr/>
            <div className='btnDetalle'>
                <button id='btn--center' className='btn-- btn--medium btn--primary'>
                    <Link to={`/Cart`} className='btn--noDecoration'>Finalizar Compra</Link></button>
            </div>
        </>
    )
}
