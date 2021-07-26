
import React, { useState } from "react"

import "./Increment.css"


const Increment = () => {

    // const state = useState()

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)

    const IncNum = () => {
        
        setCount(count + 1)

    }

    const IncNum2 = () => {
        
        setCount2(count2 + 1)

    }
    const IncNum3 = () => {
        
        setCount3(count3 + 1)

    }
    const IncNum4 = () => {
        
        setCount4(count4 + 1)

    }
    return (
        <>
            <div className="main">
            <div className="div_one">
                <h1 className="heading"> {count}</h1>
                <button className="button" onClick={IncNum}>Click Here</button>
            </div>
            <div className="div_two">
                <h1 className="heading"> {count2}</h1>
                <button className="button" onClick={IncNum2}>Click Here</button>
            </div>
            <div className="div_three">
                <h1 className="heading"> {count3}</h1>
                <button className="button" onClick={IncNum3}>Click Here</button>
            </div>
            <div className="div_four">
                <h1 className="heading"> {count4}</h1>
                <button className="button" onClick={IncNum4}>Click Here</button>
            </div>
            </div>
            
        </>
    )
}

export default Increment;