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

export const logout = () => {
  if (window.localStorage.getItem('username') != null) {
    window.localStorage.clear();
  }
};
