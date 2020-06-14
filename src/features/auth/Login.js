import React, { Component } from 'react';
import { login } from './authActions';
import { connect } from 'react-redux';

class Login extends Component {
    affich = () => console.log('this.props.auth', this.props.auth);
    loginUser = () => {
        this.props.login({ email: "rachid@gmail.com", password: "password" });
    }
    render() {
        return (
            <div>
                <h1>login page</h1>
                <button onClick={this.loginUser}>
                    Login
                </button>
                <button onClick={this.affich}>
                    Affiche auth
                </button>
            </div>
        );
    }
};

const mapStateToProps = store => ({
    auth: store.auth,
});

const mapDispatchToProps = {
    login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
