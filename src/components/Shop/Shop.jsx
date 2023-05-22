// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    console.log(products)
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=><Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className='order-summary'>
                <h2>dawdawd</h2>
            </div>
        </div>
    );
};

export default Shop;