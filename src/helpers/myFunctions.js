import productList from '../data/productos';

//Esta función devulve un solo objeto de mi array de productos que cumpla con la condición que se establece, en este caso el id.
const getProductById = (id) => productList.find((product) => product.itemID === id);

//acá exporto la función que me ayuda a buscar un objeto de acuerdo a la condición establecida
export {
    getProductById,
}