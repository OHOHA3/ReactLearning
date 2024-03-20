import React from "react";
import * as ReactDOMClient from "react-dom/client"

function mouseClick() {
    console.log("click")
}

const mouseEnter = () => console.log("enter")
const buttonName = "Button text"
const tag = <input placeholder={buttonName} onClick={mouseClick}
                   onMouseEnter={mouseEnter} onMouseDown={() => console.log("down")}/>
const app = ReactDOMClient.createRoot(document.getElementById("app"))
app.render(tag)

