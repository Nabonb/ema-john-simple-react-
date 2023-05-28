/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    console.log(cart)
    let totalPrice = 0;
    let totalShipping=0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice+totalShipping+tax;
    
    return (
        <div className='order-summary'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>        
            <p>Total Price: {totalPrice}</p>        
            <p>Shipping: {totalShipping}</p> 
            <p>Tax: {tax.toFixed(2)}</p> 
            <p>Grand Total: {grandTotal.toFixed(2)}</p> 
        </div>
    );
};

export default Cart;