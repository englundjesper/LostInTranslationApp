import { Redirect } from 'react-router';
import React from 'react';

export const login = (username) => {
  window.localStorage.setItem('username', username);
  window.location.reload();
};

export const isAuthenticated = () => {
  if (window.localStorage.getItem('username') == null) {
    return false;
  } else {
    return true;
  }
};
export const getLoggedInUser = () => {
  return window.localStorage.getItem('username');
};

export const getList = () => {
  if (window.localStorage.getItem('translationList') != null) {
    return JSON.parse(window.localStorage.getItem('translationList'));
  } else {
    return [];
  }
};
export const clearList = () => {
  window.localStorage.removeItem('translationList');
};

export const logout = () => {
  if (window.localStorage.getItem('username') != null) {
    window.localStorage.clear();
    return <Redirect to="/"></Redirect>;
  }
};
