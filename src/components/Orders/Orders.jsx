import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleDeleteCart = (id) => {
    const remaining = cart.filter((pd) => pd.id != id);
    setCart(remaining);
    removeFromDb(id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((pd) => (
          <ReviewItem
            key={pd.id}
            cart={pd}
            handleDeleteCart={handleDeleteCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to='/checkout'>
            <button className="btn-checkout">Proceed Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
