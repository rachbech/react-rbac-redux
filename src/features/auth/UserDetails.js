import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <h1>Name:</h1> {this.props.auth.currentUser.name}
                    </li>
                    <li>
                        <h1>Email:</h1> {this.props.auth.currentUser.email}
                    </li>
                    <li>
                        <h1>Role:</h1> {this.props.auth.currentUser.role}
                    </li>
                </ul>
            </div>
        );
    }
};

const mapStateToProps = store => ({
    auth: store.auth,
});

export default connect(mapStateToProps, null)(UserDetails);
