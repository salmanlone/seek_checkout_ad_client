import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { setLogout } from './actions/loginActions';

class Navbar extends React.Component {
    handleLogOut = (e) => {
        this.props.setLoggedOut();
    }

    render()
    {
        const { props } = this;
        var loginNav = (props.is_logged_in) ? <span>{props.logged_in_username}</span> : <Link to="/login">Login</Link>;
        const logOut = (props.is_logged_in) ? <li><button onClick={this.handleLogOut}>LogOut</button></li> : null;
    
        return (
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Seek Asia Assignment</Link>
    
                    <ul className="right">
                        <li><Link to="/">Dashboard</Link></li>
                        <li>{loginNav}</li>
                        {logOut}
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        is_logged_in: state.login_status,
        logged_in_username: state.login_user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedOut: () => { dispatch(setLogout()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)