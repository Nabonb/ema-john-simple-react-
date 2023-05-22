/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {img,name,price,ratings,seller}=props.product;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h3>Price: {price}</h3>
            <p>Manufacturer:{seller}</p>
            <p>{ratings} Star</p>
        </div>
    );
};

export default Product;