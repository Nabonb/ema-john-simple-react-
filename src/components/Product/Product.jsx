/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { img, name, price, ratings, seller } = props.product;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <h4>{name}</h4>
                <h5>Price: {price}</h5>
                <p>Manufacturer:{seller}</p>
                <p>{ratings} Star</p>
            </div>
            <button className='add-cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;