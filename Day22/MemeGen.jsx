import React, { useState, useEffect } from "react"
import "./Meme.css"
import MemePage from "./MemePage"
import Templates from "./Templates"



const MemeGen = (props) => {
    const [templates, setTemplate] = useState([])
    const [meme,setMeme] = useState(null)
    

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => {
                // console.log(data.data.memes);
                setTemplate(data.data.memes);


            })
    }, [])

    return (
        <>
            <h2 className="heading">Meme Generator </h2>
           
            {meme === null ?  <Templates templates={templates} setMeme={setMeme} /> : <MemePage meme={meme} setMeme={setMeme}/> }
           
        </>
    )
}

export default MemeGen