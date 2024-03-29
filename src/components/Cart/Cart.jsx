import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,handleClearCart, children}) => {
    // const {cart}=props;
    let totalPrice = 0;
    let totalShipping= 0;
    let quantity= 0;
    for(const product of cart){
        if(product.quantity===0){
            product.quantity = 1;
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice+totalShipping+tax;
    
    return (
        <div className='order-summary'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>        
            <p>Total Price: {totalPrice}</p>        
            <p>Shipping: {totalShipping}</p> 
            <p>Tax: {tax.toFixed(2)}</p> 
            <p>Grand Total: {grandTotal.toFixed(2)}</p> 
            <button onClick={handleClearCart} className='btn-clear-cart'><span className='txt-clear-cart'>Clear Cart</span><FontAwesomeIcon icon={faTrashAlt} /></button>
            <br />
            {children}
            
        </div>
    );
};

export default Cart;