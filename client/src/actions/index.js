import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';

export const signup = (formProps, callback) => {
  return function(dispatch) {
    axios.post('http://localhost:3090/signup', formProps)
     .then(response => {
       dispatch({ type: AUTH_USER, payload: response.data.token});
       localStorage.setItem('token', response.data.token);
       callback();
     })
      .catch(() =>
        dispatch({ type: AUTH_ERROR, payload: 'Email is in use'})
      )
  }
}

export const signout = (formProps) => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload:''
  };
};


export const signin = (formProps, callback) => {
  return function(dispatch) {
    axios.post('http://localhost:3090/signin', formProps)
     .then(response => {
       dispatch({ type: AUTH_USER, payload: response.data.token});
       localStorage.setItem('token', response.data.token);
       callback();
     })
      .catch(() =>
        dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials'})
      )
  }
}
