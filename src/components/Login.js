import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleClick = (id) => {
        this.props.loginUser(this.state.username, this.state.password);
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h3 className="header">Login</h3>
                    <label for="username">Username</label>
                    <input placeholder="user name" id="username" type="text" class="validate" />

                    <label for="password">Password</label>
                    <input placeholder="password" id="password" type="password" class="validate" />
                    <button className="waves-effect waves-light btn" type="button">Login</button>
                </div>
            </div>
        );
    }
}


export default withRouter(Login)