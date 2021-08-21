import React from "react";
import "./order.css";
import DemoTest from "./DemoTest.json"

const MainCard = (props) => {

  
   
  return (
    <div>
      <div className="order-box">
        <div className="order-left">
          <div className="order-image">
            <img src={props.image} alt="This is Product image" />
          </div>
          <div className="order-details">

          <ul>
            <h4 className="order_item_name">{props.item_name}</h4>
            <h4 className="">Sold by - {props.sold_by}</h4>
            <h4 className=" ">{props.sold_at}</h4>
            <button className="left-button">Buy it again</button>
          </ul>
          </div>
        </div>
        <div className="order-right">
          <button className="right-button">Rate the product</button><br />
          <button className="right-button">About the product</button>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
