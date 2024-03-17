import React from "react";
import Header from "./components/Header"
import CounterButton from "./components/CounterButton";

class App extends React.Component {

    render() {
        return (
            <div className="name">
                <Header title="Button counter"/>
                <CounterButton/>
            </div>
        )
    }
}

export default App

