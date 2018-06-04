import * as SessionApiUtils from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
}
);

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = user => dispatch => (
  SessionApiUtils.login(user)
  .then(payload => dispatch(receiveCurrentUser(payload)),errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
    SessionApiUtils.logout()
    .then(payload => dispatch(logoutCurrentUser(payload)), errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const signup = user => dispatch => (
  SessionApiUtils.signup(user)
  .then(payload => dispatch(receiveCurrentUser(payload)), errors => dispatch(receiveErrors(errors.responseJSON)))
);
