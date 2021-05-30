import React from 'react'
import { useState } from 'react'
import ModalDetail from '../Modal/ModalDetail'
import './Product.css'
import '../Buttons/Buttons.css'

const Product = ({ imagen, title, stock, initial, detail}) => {

        //Counter para sumar y restar
        const [counter,setCounter] = useState(initial);
        //Manejamos el cambio del counter
        const changeCounter =(value) =>{
            setCounter(counter + value);
        }

        //estado modal
        const [isOpenModal,setIsOpenModal] = useState(false);
        //manejador del modal
        const modalHandler = () => {
            setIsOpenModal(!isOpenModal);
        }

    return(
    <>    
        <div className="card">
                <img src={ imagen } className="card-img-top" alt={ title } />
                <div className="image_detail image_detail--blur">
                    <p className={ title.length > 20 ? 'titleImage__' : 'titleImage'}>{ title }</p>  
                    <div className="btn_ciudad">
                        <button className="btn-- btn--small btn--primary" onClick={ modalHandler }>Detalle</button>
                    </div>
                </div>
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <div className='container--'>
                    <button id='btnLess' className='btn-- btn--small btn--secondary' onClick={() => changeCounter(-1)} disabled = { counter === 1 ? true : null}><i className='fas fa-minus' /></button>
                    <input type='text' className='counter' value={ counter } readOnly/>
                    <button id='btnMore' className='btn-- btn--small btn--primary' onClick={() => changeCounter(+1)} disabled = { counter === stock ? true : null}><i className='fas fa-plus' /></button>
                </div>
                <hr/>
                <div id='btnDetalle' >
                    <button className='btn-- btn--medium btn--primary'>Añadir</button>
                </div>
            </div>
        </div>
        <ModalDetail modalState={isOpenModal} modalHandler={modalHandler} imagen={ imagen } title={ title } stock={ stock } detail={ detail }/>
    </>
    );
}


export default Product;