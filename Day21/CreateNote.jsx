import React, { useState } from "react"

import "./Style.css"
import AddIcon from '@material-ui/icons/Add';
const CreateNote = (props) => {
    console.log(props)

    const [note,setNote] = useState({
        title:"",
        content:""
    })

    const InputEvent = (e) => {
        // const value = e.target.value;
        // const name = e.target.name;
        const {name,value} = e.target;

        setNote( (oldObj) => {
            return {
                ...oldObj,
                [name] : value 
            }
        } )
    
    }

    const addEvent = () => {
        
        props.passNote(note); 

    }


    return (
        <>
        <div className="main_note">
            
                <input 
                type="text"
                placeholder="Title"
                className="title" 
                onChange={InputEvent} 
                value={note.title}
                name="title"
                />
                <textarea 
               
               
                cols="35" 
                rows="10" 
                placeholder="Write A Note" 
                className="textarea"  
                autoComplete="off"
                onChange={InputEvent}
                value={note.content}
                name="content"
                />
               <button onClick={addEvent} className="button"><AddIcon /> </button> 
           
        </div>
        
        </>
    )
}
export default CreateNote