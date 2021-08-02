import React from "react"

const Note = (props) => {
    return (
        <>
        <div className="notediv">  
        <h2>{props.title}</h2>
        <br />
        <p>{props.content}</p>
        </div>

        </>
    )
}

export default Note;