import React from "react";
import Header from "./components/Header"
import bunny from "./images/bunny.PNG"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonName: "Button text",
            userData: ""
        }

        this.mouseClick = this.mouseClick.bind(this)
    }

    mouseClick() {
        this.setState({buttonName: "new text"})
        console.log("click")
    }

    mouseEnter() {
        console.log("enter")
    }

    componentDidUpdate(prevProp) {
        if (this.state.userData === "user") {
            console.log("yes")
        }
    }

    render() {
        return (
            <div className="name">
                <Header title="шапка 1"/>
                <h1>{this.state.buttonName}</h1>
                <h2>{this.state.userData}</h2>
                <input placeholder={this.state.buttonName} onClick={this.mouseClick}
                       onChange={event => {
                           this.setState({userData: event.target.value})
                       }}
                       onMouseEnter={this.mouseEnter} onMouseDown={() => console.log("down")}/>
                <p className="word">{this.state.buttonName === "aaa" ? "YES" : "NO"}</p>
                <img src={bunny}/>
            </div>
        )
    }
}

export default App

