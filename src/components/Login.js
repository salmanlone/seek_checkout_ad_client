import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setLogin } from './actions/loginActions';
import LoginPromised from "./LoginPromised";
// import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'
// import Recipe from './Recipe'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            trying_login: false
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            trying_login: true
        });
        // this.props.loginUser({ username: this.state.username, password: this.state.password });
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    loginSuccess = (user) => {
        this.props.setLoggedIn(true, user);
    }

    render() {
        return !this.props.is_logged_in ? (!this.state.trying_login) ? (
            <div className="container">
                <div>
                    <h3 className="center">Login</h3>

                    <label for="username">Username</label>
                    <input placeholder="user name" id="username" type="text" class="validate" onChange={this.handleUsername} />

                    <label for="password">Password</label>
                    <input placeholder="password" id="password" type="password" class="validate" onChange={this.handlePassword} />

                    <input className="waves-effect waves-light btn" type="button" value="Login" onClick={this.handleClick} />
                </div>
            </div>
        ) : <LoginPromised username={this.state.username} password={this.state.password} successHandler={this.loginSuccess} /> : <Redirect to='/'/>;
    }
}


const mapStateToProps = (state) => {
    return {
        is_logged_in: state.login_status
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedIn: (status, user) => { dispatch(setLogin(status, user)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)