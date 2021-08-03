import React, { useState } from "react"

const MemePage = ({meme,setMeme}) => {
    const [form,setForm] = useState({
        template_id:meme.id,
        username:"anubhav404",
        password:"1@Anubhav404",
        boxes: []
    })

const generateMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
    form.boxes.map( (box,index) => {
       url = url + `&boxes[${index}][text]=${box.text}`
    } )  
    fetch(url).then( (res) => res.json()).then((data) => setMeme({...meme,url:data.data.url}))
    
}
    
        
return (
        <div className="meme">

        <img src={meme.url} alt="meme" />
        <div>
            {
                [...Array(meme.box_count)].map( (_,index) => {
                   return  <input key={index} type="text"  placeholder={`Meme Caption ${index+1}`} onChange={
                       (e) => {
                            const newBoxes = form.boxes;
                            newBoxes[index] ={text: e.target.value }
                            setForm( {...form,boxes:newBoxes})

                       }
                   }/>
                } )
            }
        </div>
        <div className="buttons">
            <button onClick={generateMeme}>Create Meme</button>
            <button onClick={ () => {
                setMeme(null)
            } }>Go To Meme Page</button>
        </div>
        </div>

    )
} 

export default MemePage;