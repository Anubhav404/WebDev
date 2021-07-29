import React, { useState } from "react"

import Comp_17 from "./Comp_17"

import { v4 as uuidv4 } from "uuid"


function Day17(props) {

    let [value, setValue] = useState("")
    let [value2, setValue2] = useState("")

    let [todo, setTodo] = useState([])



    return (
        <>
            <div className="heading_part">
                <h1>Calories Read Only</h1>
                <input className="input" type="text" placeholder="Name" onChange={(e) => {
                    setValue(e.target.value)
                }}
                    value={value}
                />

                <input className="input" type="number" placeholder="Cals" onChange={(e) => {
                    setValue2(e.target.value)
                }}
                    value={value2}
                />

                <button className="add_button" onClick={() => { //button click krne pr appan ek obj bana rhe h jis me id item or cals hogi 
                    
                    const obj = {
                        id: uuidv4(),
                        item: value,
                        cals: value2
                    }
                    setTodo([obj, ...todo]) //fir appan setTodo me obj pura pass kr rhe h or jo bhi initially todo me hoga voh pass kr rahe h 
                }}>Add</button>
            </div>

            <div className="scroll-bar">
                <div className="scroll">

                    {todo.map((val, index) => {
                        return (
                            <Comp_17 key={index} element={val} setTodo={setTodo} todo={todo} />
                        )
                    })}


                </div>
            </div>
        </>
    )
}

export default Day17;