import React, { useState, useEffect } from "react";
import MainCard from "./MainCard";
import "./order.css";
import DemoTest from "./DemoTest.json";
import Order_date_card from "./Order_date_card";

const OrderDate = (props) => {

  

  return (
    
    <div className="order-main-card-container">
      {/* {<Order_date_card date={props.date} total={props.total} order_id={props.order_id} /> } */}
     
      <div className="Order-date-card ">
      
        <div className="order-left-1">
          <h6>Order Placed</h6>
          <h6>{props.date}</h6>
        </div>
        <div className="order-left-2">
          <h6>Total</h6>
          <h6>{props.total}</h6>
        </div>
        <div className="order-right-id">
          <h6>Order id </h6>
          <h6>{props.order_id}</h6>
        </div>
        <div className="downkey">
          <button onClick={props.Clicked}> {props.clicked ? "⩕" : "⩔"}</button>
        </div>
      </div>
      {
        props.clicked ?
        <MainCard sold_at={props.sold_at} sold_by={props.sold_by} item_name={props.item_name} image={props.image} />
        : null
      }
        
      
    </div>
  );
};

export default OrderDate;
