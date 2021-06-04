import React from 'react'
import { useState, useEffect } from 'react'
import './Product.css'
import './ProductContainer.css'
import Product from './Product'
import ProductDetail from './ProductDetail'


const ProductContainer = ({initial, stock}) =>{
    
    const [books,setBooks] = useState([])

    //uso de api para crear contenido
    useEffect(() => {
        const fetchBooks = async() => {
            try{
                //llamamos a la api del New York Times Best Sellers
                const response = await fetch('https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=vQ9DhthcrG5pT3iVcgtZU1z0foFlWCqL');
                //Capturamos si hay error
                if(response.status !==200) throw new Error('Falla el Fetch');
                //guardamos en formato Json la data devuelta
                const data = await response.json();
                //seteamos estado de books
                setBooks(data.results.splice(17,1));
            }catch (error){
                //en caso de fallar, mostrará el error por pantalla
                console.log(error)
            }finally{
                //console.log('Finalizado');
            }
        }
        fetchBooks();
    },[])
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
                        <div className='productView'>
                        {books?.map((book)=>(
                        <ProductDetail key={book.publication_dt} 
                            title={book.book_title}
                            imagen={book.imagen?.id || 'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/LAGOZGASXVGWPASNWYYP3IAPV4.jpg'}
                            detail={book.summary} 
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