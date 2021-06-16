import React from 'react'
import './Product.css'
import './ProductContainer.css'
import Product from './Product'
import { getAllProducts } from '../helpers/dbFunctions';


const ProductContainer = () =>{
    
    return(
        <div>
            {   
                //comprobamos que el tamaño del array y si es me 0 o 'false', va a mostrar le mensaje, sino, renderiza.
                books.length ?
                <>
                    <div className='productView'>
                        {books?.map((book)=>(
                        <Product key={book.publication_dt} 
                            title={book.book_title}
                            imagen={book.imagen?.id || 'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/LAGOZGASXVGWPASNWYYP3IAPV4.jpg'}
                            stock = {stock}
                            initial = {initial}
                        />
                        ))}
                        </div>
                </>
                : <p>Cargando...</p>
            }
        </div>
    )
}

export default ProductContainer