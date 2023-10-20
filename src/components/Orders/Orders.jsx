import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart,setCart]=useState(savedCart);

    const handleDeleteCart = (id) =>{
        const remaining = cart.filter(pd => pd.id != id );
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                 {
                    cart.map(pd => <ReviewItem
                    key={pd.id}
                    cart={pd}
                    handleDeleteCart={handleDeleteCart}
                    ></ReviewItem> )
                 }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;