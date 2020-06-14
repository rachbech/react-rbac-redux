import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, SIGN_OUT_USER } from './authConstants';
import { loginApi } from '../../app/common/data/mock'

// export const login = (creds) => {
//     return (dispatch) => {
//         dispatch({
//             type: LOGIN_USER,
//             payload: {
//                 creds,
//             },
//         });
//     };
// };
export const login = (creds) => (dispatch, getState) => {
    console.log('creds', creds);
    return loginApi(creds)
        .then(user =>
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: {
                    user,
                },
            }),
        )
        .catch(err =>
            dispatch({
                type: LOGIN_USER_FAILURE,
                payload: {
                    message: err.message,
                },
            }),
        );
};

export const logout = () => {
    return {
        type: SIGN_OUT_USER,
    };
};
