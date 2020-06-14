import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
    auth: store.auth,
});
// Authorization HOC
export const Authorization = (WrappedComponent, allowedRoles) => {
    class WithAuthorization extends React.Component {
        constructor(props) {
            super(props)
            console.log('this.props.role', this.props.auth.currentUser.role);
            // In this case the user is hardcoded, but it could be loaded from anywhere.
            // Redux, MobX, RxJS, Backbone...
            this.state = {
                user: {
                    name: 'rachid',
                    role: this.props.auth.currentUser.role,
                    email: 'rachid@gmail.com'
                }
            }
            console.log('this.state.role', this.state.role);

        }
        render() {
            const { role } = this.state.user.role;

            if (allowedRoles.includes(role)) {
                return <WrappedComponent {...this.props} />
            } else {
                return <h1> You are not authorized to visit this page </h1>
            }
        }
    }
    return connect(mapStateToProps, null)(WithAuthorization)
}