/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.handleAddToCart)
    const { img, name, price, ratings, seller } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <h4>{name}</h4>
                <h5>Price: {price}</h5>
                <p>Manufacturer:{seller}</p>
                <p>{ratings} Star</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='add-cart-btn'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;