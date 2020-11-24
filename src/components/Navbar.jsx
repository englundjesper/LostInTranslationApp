import React, { useState } from 'react';
import * as AuthService from '../services/AuthService';

const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.isAuthenticated());

  const logoutHandler = () => {
    props.history.push('/login');
    setIsLoggedIn(false);
    AuthService.logout();
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <span>Logged in</span>
          <button onClick={logoutHandler}>Log out</button>{' '}
        </div>
      ) : (
        <span>Not logged in</span>
      )}
    </div>
  );
};
export default Navbar;
