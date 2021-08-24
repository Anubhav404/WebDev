import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addItem , removeItem} from "../actions/index"


const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch() //sare actions like additem and remove items are been operated through the dispatch

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo's....."
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button onClick={ () => {
          dispatch(addItem({
              title:item,
              done:false
          }))
          setItem("")
         
          } }>Add</button>
      
    </div>
  );
};

export default AddTodo;
