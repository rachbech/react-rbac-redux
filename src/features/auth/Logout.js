import React, { Component } from 'react';
import { logout } from './authActions';
import { connect } from 'react-redux';

class Logout extends Component {

    render() {
        return (
            <div>
                <h1>Log Out page</h1>
                <button onClick={this.props.logout}>
                    LogOut
                </button>
            </div>
        );
    }
};

const mapDispatchToProps = {
    logout,
};

export default connect(null, mapDispatchToProps)(Logout);
