import MainCard from "./MainCard";
import "./order.css";
import OrderDate from "./OrderDate";
import OrderNav from "./OrderNav";
import React, { useState, useEffect } from "react";
import DemoTest from "./DemoTest.json";

const OrderCard = (props) => {

  const [clicked,setClicked] = useState(false)
  const Clicked = () => {
    setClicked(!clicked)
    
  }

  return (
    <div>
      <OrderNav />
    
      <div className="main-card-box">
        {DemoTest.map((value, index) => {
          return (
            <OrderDate
              key={index}
              Clicked={Clicked}
              setClicked={setClicked}
              clicked={clicked}
              date={value.date}
              total={value.total}
              order_id={value.order_id}
              sold_by={value.sold_by}
              sold_at={value.sold_at}
              item_name={value.item_name}
              image={value.image}
            />
          );
        })}
      </div>
    </div>
  );
};
export default OrderCard;
