import React from 'react'
import './Modal.css'
import '../Buttons/Buttons.css'

const ModalDetail = ({title, imagen, stock, detail, modalState, modalHandler}) => {

    //evita cerrar el modal si toco sobre el contenido
    const handleModalClick = (e) =>{
        e.stopPropagation();
    }


    return (
        <div className={`${modalState === true ? 'modal-style':'modal-close'}`}  onClick={ modalHandler }>
            <div className='modal-container' onClick={handleModalClick}>
                <img className='modalImagen' src={ imagen } alt={ title } />
                <div className='modal-content flex-boss'>
                    <h2>{ title }</h2>
                    <p>{ detail }</p>
                    <p>Stock: { stock }</p>
                    <button className='btn-- btn--medium btn--secondary' aria-label='Close modal' onClick={ modalHandler }>Cerrar</button> 
                </div>
            </div>
        </div>
    )
}

export default ModalDetail;
