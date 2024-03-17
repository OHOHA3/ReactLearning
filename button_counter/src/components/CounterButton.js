import React from "react";

class CounterButton extends React.Component {
    state = {
        count: 0
    };

    increment = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };

    decrement = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    };

    render() {
        return (
            <div>
                <p>Значение счетчика: {this.state.count}</p>
                <button onClick={this.increment}>Увеличить</button>
                <button onClick={this.decrement}>Уменьшить</button>
            </div>
        );
    }
}

export default CounterButton;