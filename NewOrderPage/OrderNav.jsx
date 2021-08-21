import React from "react";
import "./order.css";
import customer_image from "../NewOrderPage/cartImage.png";
const OrderNav = () => {
  return (
    <div>
      <div className="Order-nav">
        <h4 className="back">←</h4>
        
          <h4 >
            <span className="cart_image" >
              <img src={customer_image} alt=" " />
            </span>
            Order
          </h4>
        
        <div className="customer_image"></div>
      </div>
    </div>
  );
};

export default OrderNav;
