import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtils from './util/session_api_util';
import SessionReducer from './reducers/session_reducer';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // window.sessionReducer = SessionReducer;
  // window.signup = SessionApiUtils.signup;
  // window.logout = SessionApiUtils.logout;
  // window.login = SessionApiUtils.login;
  // window.user1 = {username: "timmy4", password: "password"};
  // window.user2 = {username: "timmy99", password: "password"};
  const store = configureStore();

  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root);
});
