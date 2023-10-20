import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const ReviewItem = ({ cart,handleDeleteCart }) => {
  const {id, name, img, price, quantity } = cart;
//   console.log(cart);
  return (
    <div className="review-item">
      <div className="item">
        <img src={img} alt="" />
        <div className="under-cart">
          <div>
            <h5>{name}</h5>
            <p>Price : ${price}</p>
            <p>Order Quantity : {quantity}</p>
          </div>
          <button onClick={() => handleDeleteCart(id)} className="btn-delete">
            <FontAwesomeIcon className="icon" icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
