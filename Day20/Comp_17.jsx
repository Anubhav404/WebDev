import React from 'react'

const Comp_17 = (props) => {
    // console.log(props)
    const { element, setTodo, todo } = props;
    console.log(todo);
    console.log(element);
    return (
        <>
            <div className="box">

                <h2> {element.item} </h2>

                <p>{element.cals}</p>
                <button className="button" onClick={() => {
                    const Delete = todo.filter((el) => el.id != element.id)
                    setTodo(Delete)
                    console.log(Delete)
                    console.log(element.id)
                }}
                >Delete</button>
       </div>
        </>
    )
}

export default Comp_17;