import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResetPassword extends Component {

    render() {
        return (
            <div>
                Reset Password Component
            </div>
        );
    }
};

const mapStateToProps = store => ({
    auth: store.auth,
});

export default connect(mapStateToProps, null)(ResetPassword);
