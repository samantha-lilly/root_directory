import * as ApiUtil from '../util/session_api_utils';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const signup = (user) => (dispatch) => (
    ApiUtil.signup(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveSessionErrors(error.responseJSON))
        )
);

export const login = (user) => (dispatch) => (
    ApiUtil.login(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveSessionErrors(error.responseJSON))
        )
);

export const logout = () => (dispatch) => (
    ApiUtil.logout()
        .then(user => dispatch(logoutCurrentUser(user)))
);



