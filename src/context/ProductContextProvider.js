import React, { useState, useEffect, createContext } from 'react';

//API
import { getProducts } from '../services/api';


export const ProductsContext = createContext();

const ProductContextProvider = (children) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchAPI = async() =>{
            setProducts(await getProducts());
        }
        fetchAPI();

    },[])


    return (
       <ProductContextProvider value={products}>
            {children}

       </ProductContextProvider>
    );
};

export default ProductContextProvider;

// import React, { useState, useEffect, createContext } from 'react';
// import { getProducts } from '../services/api';



// const ProductsContext = createContext();




// const ProductContextProvider = (children) => {

// const [products, setProducts] = useState ([]);

// useEffect (() => {

//     const fetchAPI = async() => {
//         setProducts (await getProducts())
//     }
//     fetchAPI();

// },[])

//     return (
//         <ProductContextProvider value={products}>
//             {children}
//         </ProductContextProvider>
//     );
// };

// export default ProductContextProvider;