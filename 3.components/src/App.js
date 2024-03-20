import React from "react";
import Header from "./components/Header"
import bunny from "./images/bunny.PNG"

class App extends React.Component {
    mouseClick() {
        console.log("click")
    }

    mouseEnter() {
        console.log("enter")
    }

    buttonName = "Button text"

    render() {
        return (
            <div className="name">
                <Header title="шапка 1"/>
                <Header title="шапка 2"/>
                <input placeholder={this.buttonName} onClick={this.mouseClick}
                       onMouseEnter={this.mouseEnter} onMouseDown={() => console.log("down")}/>
                <p className="word">{this.buttonName === "aaa" ? "YES": "NO"}</p>
                <img src={bunny}/>
            </div>
        )
    }
}

export default App

