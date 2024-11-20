import React from "react";
import img from "../images/fun.png"
import img2 from "../images/meme.png"
export default function Header() {
    return (
        <div className="header">
            <div className="col1_hader">
                <img src={img}></img>
                <h1>Meme generator</h1>
            </div>
            <div>
                <img src={img2}></img>
            </div>
        </div>
    )
}