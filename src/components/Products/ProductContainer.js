import React from 'react'
import { useState } from 'react'
import './ProductContainer.css'


const ProductContainer = () =>{
    return(
        <div className="card">
            <img src="#" className="card-img-top" alt="Producto Epping Books" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default ProductContainer