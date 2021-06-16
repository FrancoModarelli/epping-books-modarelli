import React, { useEffect, useState } from 'react';
import { getProductById } from '../helpers/myFunctions';
import ProductDetail from './presentacionals/ProductDetail';


const ProductDetailContainer = ({ idProduct }) => {

    //useState para guardar el producto obtenido de la base de datos.
    const [product, setProduct] = useState(null);


    const getProducts = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = getProductById(id);
                resolve(result);
            }, 2000);
        });
    }

    useEffect(() => {
        getProducts(idProduct).then(response => setProduct(response));
    }, [idProduct])

    return (
        <>  {
            product ?
                <>
                    <ProductDetail Product={product} />
                </> 
                    :
                    <p className="loading">Cargando producto</p>
        }
        </>
    )
}

export default ProductDetailContainer

