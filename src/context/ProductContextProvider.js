// import React, { useState, useEffect, createContext } from 'react';

// //API
// import { getProducts } from '../services/api';


// const ProductsContext = createContext();

// const ProductContextProvider = (props) => {

//     const [products, setProducts] = useState([]);

//     useEffect(() => {

//         const fetchAPI = async() =>{
//             setProducts(await getProducts());
//         }
//         fetchAPI();

//     },[])


//     return (
//        <ProductContextProvider value={products}>
//             {props.children}

//        </ProductContextProvider>
//     );
// };

// export default ProductContextProvider;

import React, { useState, useEffect, createContext } from 'react';
import { getProducts } from '../services/api';




const ProductContextProvider = (props) => {

    const [products, setProducts] = useState ([]);

    const ProductsContext = createContext()

    useEffect ( () => {

        const fetchAPI = async() => {
           setProducts (await getProducts())
            
        }
        fetchAPI();

    },[])


    return (
        <ProductContextProvider value={products}>
            {props.children}
        </ProductContextProvider>
    );
};

export default ProductContextProvider;