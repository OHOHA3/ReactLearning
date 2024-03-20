import React from "react";
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'
import AddUser from "./AddUser";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editForm: false}
    }

    render() {
        return (
            <div className="user">
                <IoCloseCircleSharp className="delete-icon" onClick={() => {
                    this.props.onDelete(this.props.user.id)
                }}/>
                <IoHammerSharp className="edit-icon" onClick={() => {
                    this.setState({editForm: !this.state.editForm})
                }}/>
                <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
                <img src={this.props.user.avatar}/>
                <p>{this.props.user.email}</p>
                <b>{this.props.user.isHappy ? "norm" : "not norm"}</b>

                {this.state.editForm && <AddUser onAdd={this.props.onEdit} user={this.props.user}/>}
            </div>
        )
    }
}

export default User