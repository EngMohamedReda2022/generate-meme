import React from "react";
import memee from "../images/4acd7j.webp"
export default function Meme() {

const [meme,setMeme]=React.useState({})
const [data,setData]=React.useState({
    topText:"",
    bottomText:"",
    url:"https://imgflip.com/s/meme/One-Does-Not-Simply.jpg"
})
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(result=>result.json())
        .then(data=>setMeme(data))
    },[])
    function handleUrl() {
        const memes=meme.data.memes;
        const randomNumber=Math.floor(Math.random() * memes.length)
        const url=memes[randomNumber].url
        setData(prev=>{
            return {
                ...prev,
                url:url
            }
        })
    }
    function handleChange(event) {
        const {name,value}=event.target
        setData(prev=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }
    return(
        <div className="meme">  
            <div className="data">  
                <div className="text">
                    <label for="topText">Top Text</label>
                    <input onChange={handleChange} type="text" name="topText" id="topText"></input>
                </div>
                <div className="text">
                    <label for="bottomText">bottom Text</label>
                    <input onChange={handleChange} type="text" name="bottomText" id="bottomText"></input>
                </div>
            </div>
            <button onClick={handleUrl}>get New Image</button>
            <div className="content">
                <img src={data.url}>
                </img>
                <h1>{data.topText}</h1>
                <h1>{data.bottomText}</h1>
            </div>
        </div>
    )
}