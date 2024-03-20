import React from "react";

class AddUser extends React.Component {
    userToAdd = {}

    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            avatar: "",
            email: "",
            isHappy: false
        }
    }

    render() {
        return (
            <form ref={e => this.myForm = e}>
                <input placeholder="Firstname" onChange={e => this.setState({first_name: e.target.value})}></input>
                <input placeholder="Lastname" onChange={e => this.setState({last_name: e.target.value})}></input>
                <input placeholder="Avatar" onChange={e => this.setState({avatar: e.target.value})}></input>
                <textarea placeholder="Email" onChange={e => this.setState({email: e.target.value})}></textarea>

                <label htmlFor="isHappy">Happy?</label>
                <input type="checkbox" id="isHappy" onChange={e => this.setState({isHappy: e.target.checked})}></input>
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userToAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        avatar: this.state.avatar,
                        email: this.state.email,
                        isHappy: this.state.isHappy
                    }
                    if (this.props.user) {
                        this.userToAdd.id = this.props.user.id
                    }
                    this.props.onAdd(this.userToAdd)
                }}>Add
                </button>
            </form>
        )
    }
}

export default AddUser