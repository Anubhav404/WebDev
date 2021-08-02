import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import CreateNote from "./CreateNote"
import Note from "./Note"


const Keep = ({title,content}) => {
    const [addItem,setAddItem] = useState([])

    const addNote = (note) => {
        setAddItem( (preData)=>{
            return ([...preData,note])

        } )
        
    }
    return (
        
        <div className="main">
            
        <Header />
        <CreateNote passNote = {addNote} />
        
        {addItem.map((val,index)=>{
                return (<Note 
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                />
                )
            } )
        }
        <Footer />
        </div>
        
    )
}

export default Keep;