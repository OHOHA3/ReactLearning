/*
ReactDOM.render(<div>
    <h1>Привет</h1>
    <h2>hello</h2>
</div>, document.getElementById("app"))*/

/*
ReactDOM.render(React.createElement('input', {
    placeholder: "some text",
    onClick: () => console.log("click"),
    onMouseEnter: () => console.log("enter")
}), document.getElementById("app"))*/

function mouseClick() {
    console.log("click")
}

const mouseEnter = () => console.log("enter")
const buttonName = "Button text"
const tag = <input placeholder={buttonName} onClick={mouseClick}
                   onMouseEnter={mouseEnter} onMouseDown={() => console.log("down")}/>
const app = document.getElementById("app")
ReactDOM.render(tag, app)
